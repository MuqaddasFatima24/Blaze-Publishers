import { JSX } from "react";

// app/head.tsx
export default function Head(): JSX.Element {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* ✅ Google AdSense Verification Script */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8108022846497938"
        crossOrigin="anonymous"
      ></script>

      {/* ✅ Google AdSense Account Meta */}
      <meta
        name="google-adsense-account"
        content="ca-pub-8108022846497938"
      />
    </>
  );
}
