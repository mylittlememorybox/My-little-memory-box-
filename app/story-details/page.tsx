"use client";

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
  backgroundColor: "rgba(255, 248, 243, 0.96)",
  borderRadius: "30px",
  padding: "40px 24px",
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

const textareaStyle: CSSProperties = {
  ...inputStyle,
  minHeight: "120px",
  resize: "vertical",
};

const labelStyle: CSSProperties = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#6B564C",
  display: "block",
};

const sectionStyle: CSSProperties = {
  backgroundColor: "#FBF4EE",
  borderRadius: "22px",
  padding: "22px",
  marginBottom: "24px",
};

export default function StoryDetailsPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
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
            Ας γνωρίσουμε τον μικρό ήρωα του παραμυθιού
          </h1>

          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              lineHeight: "1.8",
              color: "#7A6A62",
              maxWidth: "720px",
              margin: "0 auto 32px",
            }}
          >
            Συμπλήρωσε λίγα όμορφα στοιχεία για το παιδάκι σου, ώστε να
            δημιουργήσουμε ένα πιο προσωπικό Memory Box και ένα μοναδικό,
            προσωποποιημένο παραμύθι.
          </p>

          <div style={sectionStyle}>
            <label style={labelStyle}>Όνομα παιδιού</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Π.χ. Ανδριάνα"
            />

            <label style={labelStyle}>Ηλικία</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Π.χ. 2 ετών"
            />

            <label style={labelStyle}>Χρώμα μαλλιών</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Π.χ. καστανά"
            />

            <label style={labelStyle}>Χρώμα ματιών</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Π.χ. μελί"
            />

            <label style={labelStyle}>Αγαπημένο ζωάκι</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Π.χ. λαγουδάκι"
            />

            <label style={labelStyle}>Αγαπημένο χρώμα</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Π.χ. ροζ"
            />

            <label style={labelStyle}>Τι αγαπάει περισσότερο;</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Π.χ. μπαλόνια, θάλασσα, αγκαλιές, τραγούδια"
            />

            <label style={labelStyle}>Μια όμορφη ανάμνηση μαζί του</label>
            <textarea
              style={textareaStyle}
              placeholder="Γράψε μια γλυκιά ανάμνηση που θα θέλατε να υπάρχει μέσα στο παραμύθι."
            />

            <label style={labelStyle}>Θέμα παραμυθιού</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Π.χ. σύννεφα, μπαλόνι, θάλασσα, ζωάκια, αστέρια"
            />

            <label style={labelStyle}>Μήνυμα από τη μαμά</label>
            <textarea
              style={textareaStyle}
              placeholder="Γράψε ένα μικρό μήνυμα αγάπης που θα μας βοηθήσει να κάνουμε το παραμύθι ακόμα πιο προσωπικό."
            />
          </div>

          <button
            type="button"
            onClick={() => {
              window.location.href = "/memory-details";
            }}
            style={{
              width: "100%",
              padding: "16px 28px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: "#DCC4B8",
              color: "#4F4039",
              fontSize: "18px",
              fontWeight: 700,
              cursor: "pointer",
              boxSizing: "border-box",
            }}
          >
            Συνέχεια
          </button>

          <div
            style={{
              marginTop: "22px",
              textAlign: "center",
              fontSize: "14px",
              color: "#7A6A62",
            }}
          >
            <Link href="/create-memory" style={{ color: "#7D6457" }}>
              Επιστροφή
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
