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

    if (!result.ok) {
      throw new Error("Failed to generate story");
    }

    const storyText = await result.text();
alert("STORY: " + storyText);
    localStorage.setItem("story", storyText);

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

  const labelStyle = {
    display: "block",
    marginBottom: "8px",
    fontSize: "15px",
    fontWeight: 600,
    color: "#6B564C",
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
      <div style={{ maxWidth: "860px", margin: "0 auto" }}>
        <div
          style={{
            backgroundColor: "rgba(255, 248, 243, 0.96)",
            borderRadius: "28px",
            padding: "32px 22px",
            boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
          }}
        >
          <h1
            style={{
              fontSize: "34px",
              lineHeight: "1.35",
              textAlign: "center",
              color: "#7D6457",
              marginBottom: "16px",
            }}
          >
            Συμπλήρωσε τα παρακάτω και χάρισε ένα πολύτιμο Memory Box στο παιδί σου
          </h1>

          <p
            style={{
              textAlign: "center",
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#7A6A62",
              maxWidth: "700px",
              margin: "0 auto 30px",
            }}
          >
            Μοιράσου μαζί μας λίγες όμορφες στιγμές και δημιούργησε ένα μοναδικό
            Memory Box που θα κρατήσει τις πιο πολύτιμες αναμνήσεις για πάντα.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}
          >
            <div>
              <label style={labelStyle}>Όνομα παιδιού</label>
              <input
                style={inputStyle}
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="Π.χ. Ανδριάνα"
              />
            </div>

            <div>
              <label style={labelStyle}>Ηλικία</label>
              <input
                style={inputStyle}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Π.χ. 2 ετών"
              />
            </div>

            <div>
              <label style={labelStyle}>Χρώμα μαλλιών</label>
              <input
                style={inputStyle}
                value={hairColor}
                onChange={(e) => setHairColor(e.target.value)}
                placeholder="Π.χ. καστανά"
              />
            </div>

            <div>
              <label style={labelStyle}>Χρώμα ματιών</label>
              <input
                style={inputStyle}
                value={eyeColor}
                onChange={(e) => setEyeColor(e.target.value)}
                placeholder="Π.χ. μελί"
              />
            </div>

            <div>
              <label style={labelStyle}>Αγαπημένο ζωάκι</label>
              <input
                style={inputStyle}
                value={favoriteAnimal}
                onChange={(e) => setFavoriteAnimal(e.target.value)}
                placeholder="Π.χ. δελφίνι"
              />
            </div>

            <div>
              <label style={labelStyle}>Αγαπημένο χρώμα</label>
              <input
                style={inputStyle}
                value={favoriteColor}
                onChange={(e) => setFavoriteColor(e.target.value)}
                placeholder="Π.χ. ροζ"
              />
            </div>
          </div>

          <div style={{ marginTop: "16px" }}>
            <label style={labelStyle}>Αγαπημένα πράγματα</label>
            <input
              style={inputStyle}
              value={favoriteThings}
              onChange={(e) => setFavoriteThings(e.target.value)}
              placeholder="Π.χ. μπαλόνια, θάλασσα, χορός, αγκαλιές"
            />
          </div>

          <div style={{ marginTop: "16px" }}>
            <label style={labelStyle}>Μια όμορφη ανάμνηση</label>
            <textarea
              style={{
                ...inputStyle,
                minHeight: "110px",
                resize: "vertical" as const,
              }}
              value={memory}
              onChange={(e) => setMemory(e.target.value)}
              placeholder="Γράψε μια όμορφη στιγμή που θα ήθελες να κρατήσετε για πάντα."
            />
          </div>

          <div style={{ marginTop: "16px" }}>
            <label style={labelStyle}>Μήνυμα από τη μαμά</label>
            <textarea
              style={{
                ...inputStyle,
                minHeight: "110px",
                resize: "vertical" as const,
              }}
              value={momMessage}
              onChange={(e) => setMomMessage(e.target.value)}
              placeholder="Γράψε λίγα λόγια αγάπης για το παιδάκι σου."
            />
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            style={{
              marginTop: "24px",
              width: "100%",
              padding: "16px",
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
            {loading ? "Φόρτωση..." : "Συνέχεια"}
          </button>
        </div>
      </div>
    </main>
  );
}
