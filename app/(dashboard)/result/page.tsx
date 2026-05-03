"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [pages, setPages] = useState<string[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [image, setImage] = useState("");

  useEffect(() => {
    const savedStory = localStorage.getItem("story") || "";
    const savedImage = localStorage.getItem("image") || "";

    // 🔥 ΚΑΘΑΡΙΖΟΥΜΕ ΤΟ STORY ΑΠΟ JSON ΣΚΟΥΠΙΔΙΑ
    const cleanStory = savedStory.replace(/"image":\s*".*?"/g, "");

    // 🔥 ΧΩΡΙΖΟΥΜΕ ΣΕ ΣΕΛΙΔΕΣ
    const split = cleanStory
      .split("\n\n")
      .filter((p) => p.trim() !== "");

    setPages(split);
    setImage(savedImage);
  }, []);
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#F6EFE8",
        padding: "20px",
      }}
    >
      <div
        style={{
          maxWidth: "420px",
          margin: "0 auto",
          background: "#B9907A",
          borderRadius: "20px",
          padding: "8px",
        }}
      >
        <div
          style={{
            background: "#FFFDF8",
            borderRadius: "18px",
            padding: "16px",
            minHeight: "520px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* LOGO */}
          <img
            src="/logo.png"
            style={{
              width: "120px",
              margin: "0 auto 10px",
            }}
          />

          {/* ΕΙΚΟΝΑ */}
          {image && (
            <img
              src={image}
              style={{
                width: "100%",
                borderRadius: "14px",
                marginBottom: "14px",
              }}
            />
          )}

          {/* ΚΕΙΜΕΝΟ */}
          <div
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#6B564C",
              minHeight: "220px",
            }}
          >
            {pages[currentPage] || ""}
          </div>

          {/* NAVIGATION */}
          <div style={{ display: "flex", gap: "8px", marginTop: "12px" }}>
            <button
              onClick={() => setCurrentPage((p) => p - 1)}
              disabled={currentPage === 0}
              style={navBtn}
            >
              ←
            </button>

            <button
              onClick={() => setCurrentPage((p) => p + 1)}
              disabled={currentPage === pages.length - 1}
              style={navBtn}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

const navBtn = {
  flex: 1,
  padding: "12px",
  borderRadius: "12px",
  border: "none",
  background: "#E8D2C8",
  fontWeight: 700,
  cursor: "pointer",
};
