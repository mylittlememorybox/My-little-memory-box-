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
    const confirmed = window.confirm(
      "ΠΡΟΣΟΧΗ!\n\nΜετά τη δημιουργία του παραμυθιού σας έχετε 30 μέρες πρόσβαση για download Memory Box & Παραμύθι.\n\nΜετά τις 30 μέρες θα διαγράφονται αυτόματα."
    );

    if (!confirmed) return;

    setLoading(true);

    // 🔥 PROMPTS ΕΙΚΟΝΩΝ (ΤΟ ΣΗΜΑΝΤΙΚΟ)
    const illustrationPrompts = [
      `Pixar style 3D illustration of a little girl named ${childName}, with ${hairColor} hair and ${eyeColor} eyes, holding a ${favoriteColor} balloon, standing next to a ${favoriteAnimal}, in a colorful magical forest, warm cinematic lighting, no text`,

      `The same girl playing happily in her garden with the ${favoriteColor} balloon, sunny day, Pixar style, no text`,

      `The same girl watching the balloon fly away into the sky, emotional moment, cinematic lighting, no text`,

      `The same girl running toward a magical forest trying to catch the balloon, slightly scared but curious, no text`,

      `The girl sees a ${favoriteAnimal} and smiles with relief in front of the forest, magical atmosphere, no text`,

      `The girl walking inside a darker forest with the ${favoriteAnimal}, slightly scared, cinematic lighting, no text`,

      `The girl glowing with warm golden light (inspired by her mother's words: ${momMessage}), forest lights up again, magical moment, no text`,

      `The girl catching the ${favoriteColor} balloon near a colorful tree inside the forest, ${favoriteAnimal} next to her, happy scene, no text`,

      `The girl lying in her garden holding the balloon, waking up like from a dream, peaceful ending, no text`,
    ];

    try {
      const result = await fetch("/api/generate-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // 🔥 ΑΥΤΑ ΠΑΝΕ ΣΤΟ MAKE
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

          illustrationPrompts,

          illustrationStyle:
            "Pixar / Disney style 3D παιδική εικονογράφηση, cinematic lighting, soft shadows, magical atmosphere, ίδιο παιδί σε όλες τις εικόνες, χωρίς γράμματα μέσα στις εικόνες",
        }),
      });

      const data = await result.json();

      if (!data.story || data.story.trim() === "") {
        alert("Δεν δημιουργήθηκε παραμύθι 😢");
        return;
      }

      localStorage.setItem("story", data.story || "");
      localStorage.setItem("image", data.image || "");

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
        padding: "20px 14px",
        color: "#5E4B42",
      }}
    >
      <div
        style={{
          maxWidth: "500px",
          margin: "0 auto",
          backgroundColor: "rgba(255, 248, 243, 0.96)",
          borderRadius: "28px",
          padding: "24px 18px",
          boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "24px",
          }}
        >
          <img
            src="/logo.png"
            alt="My Little Memory Box"
            style={{
              width: "180px",
              maxWidth: "70vw",
            }}
          />
        </a>

        <h1
          style={{
            fontSize: "24px",
            color: "#7D6457",
            marginBottom: "20px",
            textAlign: "center",
          }}
        >
          Συμπλήρωσε τα στοιχεία ✨
        </h1>

        <div style={{ display: "grid", gap: "12px" }}>
          <input style={inputStyle} placeholder="Όνομα παιδιού" value={childName} onChange={(e) => setChildName(e.target.value)} />
          <input style={inputStyle} placeholder="Ηλικία" value={age} onChange={(e) => setAge(e.target.value)} />
          <input style={inputStyle} placeholder="Χρώμα μαλλιών" value={hairColor} onChange={(e) => setHairColor(e.target.value)} />
          <input style={inputStyle} placeholder="Χρώμα ματιών" value={eyeColor} onChange={(e) => setEyeColor(e.target.value)} />
          <input style={inputStyle} placeholder="Αγαπημένο ζωάκι" value={favoriteAnimal} onChange={(e) => setFavoriteAnimal(e.target.value)} />
          <input style={inputStyle} placeholder="Αγαπημένο χρώμα" value={favoriteColor} onChange={(e) => setFavoriteColor(e.target.value)} />
        </div>

        <textarea
          style={{ ...inputStyle, marginTop: "12px" }}
          placeholder="Αγαπημένα πράγματα"
          value={favoriteThings}
          onChange={(e) => setFavoriteThings(e.target.value)}
        />

        <textarea
          style={{ ...inputStyle, marginTop: "12px" }}
          placeholder="Όμορφη ανάμνηση"
          value={memory}
          onChange={(e) => setMemory(e.target.value)}
        />

        <textarea
          style={{ ...inputStyle, marginTop: "12px" }}
          placeholder="Μήνυμα από τη μαμά"
          value={momMessage}
          onChange={(e) => setMomMessage(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          style={{
            width: "100%",
            marginTop: "20px",
            padding: "16px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#DCC4B8",
            fontSize: "18px",
            fontWeight: 700,
          }}
        >
          {loading ? "Δημιουργείται..." : "Δημιουργία παραμυθιού"}
        </button>
      </div>
    </main>
  );
}
