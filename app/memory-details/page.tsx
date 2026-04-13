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
  maxWidth: "980px",
  margin: "0 auto",
};

const card: CSSProperties = {
  backgroundColor: "rgba(255, 248, 243, 0.95)",
  borderRadius: "30px",
  padding: "38px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "14px",
  border: "1px solid #D8C5B9",
  fontSize: "16px",
  marginTop: "8px",
  marginBottom: "18px",
  backgroundColor: "#fff",
  color: "#5E4B42",
  boxSizing: "border-box",
};

const labelStyle: CSSProperties = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#6B564C",
  display: "block",
};

export default function MemoryDetailsPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={240}
              height={240}
              style={{
                objectFit: "contain",
                cursor: "pointer",
              }}
              priority
            />
          </Link>
        </div>

        <div style={card}>
          <h1
            className={elegantFont.className}
            style={{
              textAlign: "center",
              fontSize: "40px",
              color: "#7D6457",
              marginBottom: "14px",
            }}
          >
            Το επόμενο βήμα
          </h1>

          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              lineHeight: "1.85",
              color: "#7A6A62",
              maxWidth: "760px",
              margin: "0 auto 34px",
            }}
          >
            Τώρα ξεκινά η ουσιαστική δημιουργία της δικής σου ανάμνησης. Εδώ
            θα συμπληρώνεις τις βασικές πληροφορίες που θα μας βοηθήσουν να
            δημιουργήσουμε το παραμύθι και την εμπειρία σου.
          </p>

          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
            <label style={labelStyle}>Πώς θέλεις να ονομάζεται το παραμύθι σου;</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="π.χ. Η μικρή Ανδριάνα και το κουτί των αναμνήσεων"
            />

            <label style={labelStyle}>Ποιο είναι το πιο γλυκό χαρακτηριστικό του παιδιού σου;</label>
            <textarea
              style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }}
              placeholder="Γράψε λίγα λόγια..."
            />

            <label style={labelStyle}>Ποιες στιγμές θέλεις οπωσδήποτε να περιλαμβάνει;</label>
            <textarea
              style={{ ...inputStyle, minHeight: "140px", resize: "vertical" }}
              placeholder="Πρώτα βήματα, πρώτες λέξεις, στιγμές αγκαλιάς..."
            />

            <label style={labelStyle}>Θέλεις το παραμύθι να είναι πιο τρυφερό, πιο παιχνιδιάρικο ή πιο συγκινητικό;</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="π.χ. πολύ τρυφερό και ζεστό"
            />

            <div
              style={{
                backgroundColor: "#FBF4EE",
                borderRadius: "18px",
                padding: "20px",
                marginTop: "12px",
                marginBottom: "24px",
                lineHeight: "1.8",
                color: "#705E55",
              }}
            >
              Στο επόμενο στάδιο θα μπορούν να προστεθούν και περισσότερα
              στοιχεία, φωτογραφίες, βίντεο και προσωπικές λεπτομέρειες για να
              γίνει το παραμύθι ακόμη πιο δικό σας.
            </div>

            <button
              type="button"
              style={{
                width: "100%",
                padding: "16px 24px",
                borderRadius: "20px",
                border: "none",
                backgroundColor: "#EAD7CF",
                color: "#5C4A42",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Συνέχεια στο επόμενο στάδιο
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
