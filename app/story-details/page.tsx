"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type CSSProperties } from "react";
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

export default function StoryDetailsPage() {
  const [childName, setChildName] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [favoriteAnimal, setFavoriteAnimal] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [favoriteThings, setFavoriteThings] = useState("");
  const [memory, setMemory] = useState("");
  const [theme, setTheme] = useState("");
  const [momMessage, setMomMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      await fetch("ΒΑΛΕ_ΕΔΩ_ΤΟ_MAKE_WEBHOOK_URL", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          childName,
          age,
          hairColor,
          eyeColor,
          favoriteAnimal,
          favoriteColor,
          favoriteThings,
          memory,
          theme,
          momMessage,
        }),
      });

      window.location.href = "/memory-details";
    } catch (error) {
      alert("Κάτι πήγε στραβά. Προσπάθησε ξανά.");
    } finally {
      setLoading(false);
    }
  };

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
            Ας γνωρίσουμε τον μικρό ήρωα του Memory Box
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
            Συμπλήρωσε τα παρακάτω και χάρισε ένα πολύτιμο Memory Box στο παιδί σου.
          </p>

          <label style={labelStyle}>Όνομα παιδιού</label>
          <input value={childName} onChange={(e) => setChildName(e.target.value)} type="text" style={inputStyle} />

          <label style={labelStyle}>Ηλικία</label>
          <input value={age} onChange={(e) => setAge(e.target.value)} type="text" style={inputStyle} />

          <label style={labelStyle}>Χρώμα μαλλιών</label>
          <input value={hairColor} onChange={(e) => setHairColor(e.target.value)} type="text" style={inputStyle} />

          <label style={labelStyle}>Χρώμα ματιών</label>
          <input value={eyeColor} onChange={(e) => setEyeColor(e.target.value)} type="text" style={inputStyle} />

          <label style={labelStyle}>Αγαπημένο ζωάκι</label>
          <input value={favoriteAnimal} onChange={(e) => setFavoriteAnimal(e.target.value)} type="text" style={inputStyle} />

          <label style={labelStyle}>Αγαπημένο χρώμα</label>
          <input value={favoriteColor} onChange={(e) => setFavoriteColor(e.target.value)} type="text" style={inputStyle} />

          <label style={labelStyle}>Τι αγαπάει περισσότερο;</label>
          <input value={favoriteThings} onChange={(e) => setFavoriteThings(e.target.value)} type="text" style={inputStyle} />

          <label style={labelStyle}>Μια όμορφη ανάμνηση</label>
          <textarea value={memory} onChange={(e) => setMemory(e.target.value)} style={textareaStyle} />

          <label style={labelStyle}>Θέμα</label>
          <input value={theme} onChange={(e) => setTheme(e.target.value)} type="text" style={inputStyle} />

          <label style={labelStyle}>Μήνυμα από τη μαμά</label>
          <textarea value={momMessage} onChange={(e) => setMomMessage(e.target.value)} style={textareaStyle} />

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            style={{
              width: "100%",
              padding: "16px 28px",
              borderRadius: "999px",
              border: "none",
              backgroundColor: "#DCC4B8",
              color: "#4F4039",
              fontSize: "18px",
              fontWeight: 700,
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
            }}
          >
            {loading ? "Αποστολή..." : "Συνέχεια"}
          </button>
        </div>
      </div>
    </main>
  );
}
