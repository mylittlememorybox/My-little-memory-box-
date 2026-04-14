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
  backgroundColor: "#F6EFE8",
  padding: "60px 24px",
  color: "#5E4B42",
};

const inner: CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
};

const card: CSSProperties = {
  backgroundColor: "rgba(255, 248, 243, 0.95)",
  borderRadius: "30px",
  padding: "38px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
  textAlign: "center",
};

export default function PaymentSuccessPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={250}
              height={250}
              style={{ objectFit: "contain", cursor: "pointer" }}
              priority
            />
          </Link>
        </div>

        <div style={card}>
          <h1
            className={elegantFont.className}
            style={{
              fontSize: "42px",
              color: "#7D6457",
              marginBottom: "16px",
            }}
          >
            Η πληρωμή ολοκληρώθηκε
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.85",
              color: "#7A6A62",
              maxWidth: "700px",
              margin: "0 auto 30px",
            }}
          >
            Σε ευχαριστούμε 💛 Τώρα μπορείς να προχωρήσεις στη δημιουργία
            λογαριασμού και να ξεκινήσεις να συμπληρώνεις τις αναμνήσεις που
            θα μετατραπούν στο παραμύθι σας.
          </p>

          <Link
            href="/create-memory"
            style={{
              display: "inline-block",
              padding: "16px 30px",
              borderRadius: "20px",
              backgroundColor: "#EAD7CF",
              color: "#5C4A42",
              fontSize: "18px",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Συνέχεια στη δημιουργία λογαριασμού
          </Link>
        </div>
      </div>
    </main>
  );
}
