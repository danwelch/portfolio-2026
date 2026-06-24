export default function OGPreview() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bitter:wght@600&family=Noto+Sans:wght@600&display=swap"
          rel="stylesheet"
        />
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { background: #000; display: flex; align-items: center; justify-content: center; min-height: 100vh; }
        `}</style>
      </head>
      <body>
        <div
          style={{
            width: 1200,
            height: 630,
            background:
              "linear-gradient(in oklch 210deg, #132240 15%, #0a1628 85%)",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            padding: 88,
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontFamily: "'Bitter', serif",
              fontSize: 96,
              fontWeight: 600,
              color: "#ffffff",
              lineHeight: 1,
              letterSpacing: "-0.01em",
            }}
          >
            Dan Welch
          </div>
          <div
            style={{
              marginTop: 16,
              fontFamily: "'Noto Sans', sans-serif",
              fontSize: 36,
              fontWeight: 600,
              color: "#aaee44",
              lineHeight: 1,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            Design Systems Architect
          </div>
        </div>
      </body>
    </html>
  );
}
