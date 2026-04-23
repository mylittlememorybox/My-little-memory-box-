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

  return (
    <main style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ marginBottom: "20px" }}>
        Συμπλήρωσε τα παρακάτω και χάρισε ένα πολύτιμο memory box στο παιδί σου
      </h1>

      <input placeholder="Όνομα παιδιού" value={childName} onChange={(e) => setChildName(e.target.value)} />
      <input placeholder="Ηλικία" value={age} onChange={(e) => setAge(e.target.value)} />
      <input placeholder="Χρώμα μαλλιών" value={hairColor} onChange={(e) => setHairColor(e.target.value)} />
      <input placeholder="Χρώμα ματιών" value={eyeColor} onChange={(e) => setEyeColor(e.target.value)} />
      <input placeholder="Αγαπημένο ζωάκι" value={favoriteAnimal} onChange={(e) => setFavoriteAnimal(e.target.value)} />
      <input placeholder="Αγαπημένο χρώμα" value={favoriteColor} onChange={(e) => setFavoriteColor(e.target.value)} />
      <input placeholder="Αγαπημένα πράγματα" value={favoriteThings} onChange={(e) => setFavoriteThings(e.target.value)} />

      <textarea placeholder="Μια όμορφη ανάμνηση" value={memory} onChange={(e) => setMemory(e.target.value)} />
      <textarea placeholder="Μήνυμα από τη μαμά" value={momMessage} onChange={(e) => setMomMessage(e.target.value)} />

      <button
        onClick={handleSubmit}
        disabled={loading}
        style={{
          marginTop: "20px",
          padding: "12px 20px",
          backgroundColor: "#DCC4B8",
          border: "none",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        {loading ? "Φόρτωση..." : "Συνέχεια"}
      </button>
    </main>
  );
}
