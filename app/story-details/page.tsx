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
      await fetch("https://hook.eu1.make.com/4vspo1e7o6bmqg3q8rha4vl5o293qz55", {
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

      window.location.href = "/memory-details";
    } catch (error) {
      console.error(error);
      alert("Κάτι πήγε στραβά 😢");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #E0D5CF",
    marginBottom: "16px",
    fontSize: "15px",
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
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>
        <h1 style={{ marginBottom: "30px", lineHeight: "1.4" }}>
          Συμπλήρωσε τα παρακάτω και χάρισε ένα πολύτιμο memory box στο παιδί σου
        </h1>

        {/* GRID */}
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

        <input
          style={inputStyle}
          placeholder="Αγαπημένα πράγματα"
          value={favoriteThings}
          onChange={(e) => setFavoriteThings(e.target.value)}
        />

        <textarea
          style={{ ...inputStyle, minHeight: "100px" }}
          placeholder="Μια όμορφη ανάμνηση"
          value={memory}
          onChange={(e) => setMemory(e.target.value)}
        />

        <textarea
          style={{ ...inputStyle, minHeight: "100px" }}
          placeholder="Μήνυμα από τη μαμά"
          value={momMessage}
          onChange={(e) => setMomMessage(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "16px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#DCC4B8",
            color: "#4F4039",
            fontSize: "18px",
            fontWeight: "600",
            cursor: "pointer",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Φόρτωση..." : "Συνέχεια"}
        </button>
      </div>
    </main>
  );
}
