"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [story, setStory] = useState("");

  useEffect(() => {
    const saved = localStorage.getItem("story");

    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setStory(parsed.story || "");
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const downloadFile = (type: "story" | "box" | "both") => {
    let content = "";

    if (type === "story") {
      content = story;
    } else if (type === "box") {
      content = "Memory Box";
    } else {
      content = `${story}\n\nMemory Box`;
    }

    const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "mylittlememorybox.txt";
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
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
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
            Το παραμύθι σου είναι έτοιμο ✨
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
            Εδώ μπορείς να διαβάσεις το παραμύθι σου και να επιλέξεις τι θέλεις
            να κατεβάσεις.
          </p>

          <div
            style={{
              backgroundColor: "#FFF",
              border: "1px solid #E2D7D0",
              borderRadius: "20px",
              padding: "24px",
              whiteSpace: "pre-wrap",
              lineHeight: "1.9",
              fontSize: "17px",
              color: "#5E4B42",
              minHeight: "220px",
            }}
          >
            {story || "Δεν υπάρχει ακόμη παραμύθι για εμφάνιση."}
          </div>

          <div
            style={{
              display: "grid",
              gap: "14px",
              marginTop: "26px",
            }}
          >
            <button
              type="button"
              onClick={() => downloadFile("story")}
              style={buttonStyle}
            >
              Download μόνο το παραμύθι
            </button>

            <button
              type="button"
              onClick={() => downloadFile("box")}
              style={buttonStyle}
            >
              Download μόνο το Memory Box
            </button>

            <button
              type="button"
              onClick={() => downloadFile("both")}
              style={buttonStyle}
            >
              Download και τα δύο
            </button>
          </div>
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
