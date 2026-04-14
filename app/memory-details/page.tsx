import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Playfair_Display } from "next/font/google";

const elegantFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const wrap: CSSProperties = {
  minHeight: "100vh",
  background: "#F6EFE8",
  padding: "30px 16px",
};

const inner: CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
};

const headerBox: CSSProperties = {
  textAlign: "center",
  marginBottom: "20px",
};

const iframeWrap: CSSProperties = {
  borderRadius: "24px",
  overflow: "hidden",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  border: "1px solid #EAD7CF",
};

export default function MemoryDetailsPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        
        {/* LOGO */}
        <div style={headerBox}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={200}
              height={200}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>

        {/* TITLE */}
        <div style={headerBox}>
          <h1
            className={elegantFont.className}
            style={{
              fontSize: "36px",
              color: "#7D6457",
              marginBottom: "10px",
            }}
          >
            Η δημιουργία της ανάμνησής σου
          </h1>

          <p style={{ color: "#7A6A62" }}>
            Συμπλήρωσε τη φόρμα για να δημιουργήσουμε το παραμύθι σας 💛
          </p>
        </div>

        {/* FILLOUT EMBED */}
        <div style={iframeWrap}>
          <iframe
            src="https://form.fillout.com/t/abc123"
            width="100%"
            height="900"
            frameBorder="0"
            style={{ background: "white" }}
          />
        </div>
      </div>
    </main>
  );
}
