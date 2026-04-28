"use client";

import { useState } from "react";

export default function StoryDetailsPage() {
  const [childName, setChildName] = useState("");
  const [age, setAge] = useState("");
  const [hairColor, setHairColor] = useState("");
  const [eyeColor, setEyeColor] = useState("");
  const [favoriteAnimal, setFavoriteAnimal] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const [favoriteThings, setFavoriteThings] = useState("");
  const [memory, setMemory] = useState("");
  const [momMessage, setMomMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const result = await fetch("/api/generate-story", {
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
          momMessage,
        }),
      });

      const storyText = await result.text();

if (!storyText || storyText.trim() === "") {
  alert("Το Make δεν επέστρεψε παραμύθι.");
  return;
}

localStorage.setItem("story", storyText);
localStorage.setItem("image", "");

window.location.href = "/result";   

      
    } catch (error) {
      console.error(error);
      alert("Κάτι πήγε στραβά 😢");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px 16px",
    borderRadius: "14px",
    border: "1px solid #DED3CC",
    backgroundColor: "#FFFFFF",
    color: "#5E4B42",
    fontSize: "16px",
    boxSizing: "border-box" as const,
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#F6EFE8",
        padding: "40px 20px",
        color: "#5E4B42",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          backgroundColor: "rgba(255, 248, 243, 0.96)",
          borderRadius: "28px",
          padding: "32px 22px",
          boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
        }}
      >
        <a
  href="/"
  style={{
    display: "flex",
    justifyContent: "center",
    marginBottom: "32px",
  }}
>
  <img
    src="/logo.png"
    alt="My Little Memory Box"
    style={{
      width: "220px",
      height: "auto",
      objectFit: "contain",
      cursor: "pointer",
    }}
  />
</a>
        <h1
          style={{
            fontSize: "30px",
            color: "#7D6457",
            marginBottom: "26px",
          }}
        >
          Συμπλήρωσε τα στοιχεία για το παραμύθι ✨
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}
        >
          <input style={inputStyle} placeholder="Όνομα παιδιού" value={childName} onChange={(e) => setChildName(e.target.value)} />
          <input style={inputStyle} placeholder="Ηλικία" value={age} onChange={(e) => setAge(e.target.value)} />
          <input style={inputStyle} placeholder="Χρώμα μαλλιών" value={hairColor} onChange={(e) => setHairColor(e.target.value)} />
          <input style={inputStyle} placeholder="Χρώμα ματιών" value={eyeColor} onChange={(e) => setEyeColor(e.target.value)} />
          <input style={inputStyle} placeholder="Αγαπημένο ζωάκι" value={favoriteAnimal} onChange={(e) => setFavoriteAnimal(e.target.value)} />
          <input style={inputStyle} placeholder="Αγαπημένο χρώμα" value={favoriteColor} onChange={(e) => setFavoriteColor(e.target.value)} />
        </div>

        <textarea
          style={{ ...inputStyle, marginTop: "16px", minHeight: "90px" }}
          placeholder="Αγαπημένα πράγματα"
          value={favoriteThings}
          onChange={(e) => setFavoriteThings(e.target.value)}
        />

        <textarea
          style={{ ...inputStyle, marginTop: "16px", minHeight: "90px" }}
          placeholder="Μια όμορφη ανάμνηση"
          value={memory}
          onChange={(e) => setMemory(e.target.value)}
        />

        <textarea
          style={{ ...inputStyle, marginTop: "16px", minHeight: "110px" }}
          placeholder="Μήνυμα από τη μαμά"
          value={momMessage}
          onChange={(e) => setMomMessage(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%",
            marginTop: "24px",
            padding: "18px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#DCC4B8",
            color: "#4F4039",
            fontSize: "20px",
            fontWeight: 700,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Φόρτωση..." : "Δημιουργία παραμυθιού"}
        </button>
      </div>
    </main>
  );
}
