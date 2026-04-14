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
  backgroundColor: "#fff",
};

export default function MemoryDetailsPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        <div style={headerBox}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={200}
              height={200}
              style={{ cursor: "pointer", objectFit: "contain" }}
              priority
            />
          </Link>
        </div>

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

          <p
            style={{
              color: "#7A6A62",
              fontSize: "17px",
              lineHeight: "1.7",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            Συμπλήρωσε τη φόρμα για να οργανώσουμε όλες τις αναμνήσεις,
            τις φωτογραφίες και τις στιγμές που θα γίνουν το δικό σας
            προσωποποιημένο παραμύθι.
          </p>
        </div>

        <div style={iframeWrap}>
          <iframe
            src="https://forms.fillout.com/t/gs4nsBTGBGus"
            width="100%"
            height="950"
            frameBorder="0"
            style={{ display: "block", background: "white" }}
            title="Memory Details Form"
          />
        </div>
      </div>
    </main>
  );
}
