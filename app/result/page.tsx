"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [story, setStory] = useState("");
const [image, setImage] = useState("");
  useEffect(() => {
  const savedStory = localStorage.getItem("story");
  const savedImage = localStorage.getItem("image");

  if (savedStory && savedStory.trim() !== "") {
    setStory(savedStory);
  }

  if (savedImage && savedImage.trim() !== "") {
    setImage(savedImage);
  }
}, []);

  const downloadFile = (type: "story" | "box" | "both") => {
    let content = "";

    if (type === "story") {
      content = story;
    }

    if (type === "box") {
      content = "Memory Box";
    }

    if (type === "both") {
      content = `${story}\n\nMemory Box`;
    }

    const blob = new Blob([content], {
      type: "text/plain;charset=utf-8",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "my-little-memory-box.txt";
    a.click();

    URL.revokeObjectURL(url);
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
          maxWidth: "900px",
          margin: "0 auto",
          backgroundColor: "rgba(255, 248, 243, 0.96)",
          borderRadius: "28px",
          padding: "32px 22px",
          boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#7D6457",
            fontSize: "34px",
            marginBottom: "14px",
          }}
        >
          Το παραμύθι σου είναι έτοιμο ✨
        </h1>

        <p
          style={{
            textAlign: "center",
            fontSize: "17px",
            color: "#7A6A62",
            marginBottom: "28px",
          }}
        >
          Εδώ μπορείς να διαβάσεις το παραμύθι σου και να επιλέξεις τι θέλεις να
          κατεβάσεις.
        </p>

        <div
          style={{
            backgroundColor: "#FFF",
            border: "1px solid #E2D7D0",
            borderRadius: "20px",
            padding: "24px",
            minHeight: "220px",
            whiteSpace: "pre-wrap",
            lineHeight: "1.9",
            fontSize: "17px",
          }}
        >
          {image && (
  <img
    src={image}
    alt="Εικονογράφηση παραμυθιού"
    style={{
      width: "100%",
      maxWidth: "500px",
      display: "block",
      margin: "0 auto 20px",
      borderRadius: "20px",
    }}
  />
)}
          {story || "Δεν υπάρχει ακόμη παραμύθι για εμφάνιση."}
        </div>

        <div style={{ display: "grid", gap: "14px", marginTop: "26px" }}>
          <button style={buttonStyle} onClick={() => downloadFile("story")}>
            Download μόνο το παραμύθι
          </button>

          <button style={buttonStyle} onClick={() => downloadFile("box")}>
            Download μόνο το Memory Box
          </button>

          <button style={buttonStyle} onClick={() => downloadFile("both")}>
            Download και τα δύο
          </button>
        </div>
      </div>
    </main>
  );
}

const buttonStyle = {
  width: "100%",
  padding: "16px",
  borderRadius: "999px",
  border: "none",
  backgroundColor: "#DCC4B8",
  color: "#4F4039",
  fontSize: "18px",
  fontWeight: 700,
  cursor: "pointer",
} as const;
