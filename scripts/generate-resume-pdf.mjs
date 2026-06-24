// Generates the resume PDF from the live /resume page using headless Chromium.
//
// Why a real browser: the resume relies on print CSS (`@page`, print media,
// background graphics). Rendering with Chromium's `page.pdf()` is the only way
// to faithfully reproduce what the "Save as PDF" button produces by hand.
//
// Usage: `pnpm resume:pdf`
//   - If a server is already serving BASE_URL (e.g. `pnpm dev` is running), it
//     is reused for a fast turnaround.
//   - Otherwise the script boots `next start` on its own and tears it down after.

import { spawn } from "node:child_process";
import { setTimeout as sleep } from "node:timers/promises";
import { chromium } from "playwright";

const BASE_URL = process.env.RESUME_BASE_URL ?? "http://localhost:3000";
const OUTPUT = "public/Dan_Welch_Resume_DesignSystemsArchitect.pdf";
const PAGE_URL = `${BASE_URL}/resume`;

// When rendering from a protected Vercel preview, this token lets us through the
// auth wall. Sent as a header on every request (document + assets). Empty for
// local/public targets, where it's simply omitted.
const BYPASS_TOKEN = process.env.VERCEL_AUTOMATION_BYPASS_SECRET ?? "";
const bypassHeaders = BYPASS_TOKEN
  ? { "x-vercel-protection-bypass": BYPASS_TOKEN }
  : {};

async function isUp(url) {
  try {
    const res = await fetch(url, { method: "HEAD", headers: bypassHeaders });
    return res.ok || res.status === 405; // some routes reject HEAD
  } catch {
    return false;
  }
}

async function waitForServer(url, timeoutMs = 60_000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (await isUp(url)) return;
    await sleep(500);
  }
  throw new Error(`Server at ${url} did not become ready in ${timeoutMs}ms`);
}

async function main() {
  let server;
  const alreadyRunning = await isUp(PAGE_URL);

  if (alreadyRunning) {
    console.log(`Using existing server at ${BASE_URL}`);
  } else {
    console.log("No server detected — starting `next start`...");
    server = spawn("pnpm", ["exec", "next", "start"], {
      stdio: "inherit",
      env: process.env,
    });
    await waitForServer(PAGE_URL);
  }

  const browser = await chromium.launch();
  try {
    // Apply the bypass token (if any) to every request the page makes.
    const context = await browser.newContext({ extraHTTPHeaders: bypassHeaders });
    const page = await context.newPage();
    await page.goto(PAGE_URL, { waitUntil: "networkidle" });
    // Ensure web fonts are fully loaded before printing.
    await page.evaluate(() => document.fonts.ready);

    // Sanity-check that we actually rendered the resume and not, say, a Vercel
    // auth wall — otherwise we'd silently commit a PDF of the login page.
    const text = (await page.evaluate(() => document.body.innerText)) || "";
    const looksLikeResume =
      /design systems architect/i.test(text) && /experience/i.test(text);
    if (!looksLikeResume) {
      throw new Error(
        `Rendered ${PAGE_URL} does not look like the resume (${text.length} chars). ` +
          `Likely an auth wall or wrong URL. First 200 chars: ${JSON.stringify(text.slice(0, 200))}`,
      );
    }

    await page.pdf({
      path: OUTPUT,
      printBackground: true,
      preferCSSPageSize: true, // honor the @page { size: letter } rule
    });
    console.log(`Wrote ${OUTPUT}`);
  } finally {
    await browser.close();
    if (server) {
      server.kill("SIGTERM");
    }
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
