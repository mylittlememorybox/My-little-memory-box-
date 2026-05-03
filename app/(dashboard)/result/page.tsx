"use client";

import { useEffect, useState } from "react";

export default function ResultPage() {
  const [story, setStory] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const savedStory = localStorage.getItem("story");
    const savedImages = localStorage.getItem("images");

    if (savedStory) setStory(savedStory);

    if (savedImages) {
      try {
        setImages(JSON.parse(savedImages));
      } catch {
        setImages([]);
      }
    }
  }, []);

  const storyParts = story
    ? story
        .split(/(?<=[.!;])\s+/)
        .reduce<string[]>((pages, sentence, index) => {
          const pageIndex = Math.floor(index / 3);
          pages[pageIndex] = pages[pageIndex]
            ? `${pages[pageIndex]} ${sentence}`
            : sentence;
          return pages;
        }, [])
    : [];

  const totalPages = Math.max(images.length, storyParts.length, 1);

  const currentImage = images[page];
  const currentText = storyParts[page] || story || "Δεν υπάρχει ακόμη παραμύθι.";

  const downloadStory = () => {
    const blob = new Blob([story], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "my-little-memory-box-story.txt";
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#F6EFE8",
        padding: "28px 14px",
        color: "#5E4B42",
      }}
    >
      <div
        style={{
          maxWidth: "430px",
          margin: "0 auto",
          backgroundColor: "#B9907A",
          borderRadius: "28px",
          padding: "10px",
          boxShadow: "0 16px 36px rgba(80,50,35,0.24)",
        }}
      >
        <div
          style={{
            backgroundColor: "#FFFDF8",
            borderRadius: "22px",
            padding: "18px",
            minHeight: "620px",
            boxShadow: "inset 8px 0 18px rgba(120,80,50,0.08)",
          }}
        >
          <img
            src="/logo.png"
            alt="My Little Memory Box"
            style={{
              width: "145px",
              display: "block",
              margin: "0 auto 14px",
            }}
          />

          <div
            style={{
              textAlign: "center",
              fontSize: "13px",
              fontWeight: 700,
              color: "#9B735F",
              marginBottom: "14px",
            }}
          >
            Σελίδα {page + 1} / {totalPages}
          </div>

          <h1
            style={{
              textAlign: "center",
              color: "#7D6457",
              fontSize: "27px",
              margin: "0 0 18px",
              fontFamily: "serif",
            }}
          >
            Το παραμύθι σου ✨
          </h1>

          {currentImage && (
            <img
              src={currentImage}
              alt={`Εικονογράφηση ${page + 1}`}
              style={{
                width: "100%",
                borderRadius: "22px",
                marginBottom: "18px",
                boxShadow: "0 8px 20px rgba(80,50,35,0.14)",
              }}
            />
          )}

          <div
            style={{
              backgroundColor: "#FFF9F6",
              border: "1px solid #E2D7D0",
              borderRadius: "18px",
              padding: "18px",
              minHeight: "190px",
              whiteSpace: "pre-wrap",
              lineHeight: "1.85",
              fontSize: "16px",
            }}
          >
            {currentText}
          </div>

          <div
            style={{
              display: "flex",
              gap: "10px",
              marginTop: "18px",
            }}
          >
            <button
              type="button"
              disabled={page === 0}
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              style={navButtonStyle}
            >
              ←
            </button>

            <button
              type="button"
              disabled={page >= totalPages - 1}
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              style={navButtonStyle}
            >
              →
            </button>
          </div>

          <button type="button" onClick={downloadStory} style={downloadButtonStyle}>
            Download παραμυθιού
          </button>
        </div>
      </div>
    </main>
  );
}

const navButtonStyle = {
  flex: 1,
  border: "none",
  borderRadius: "16px",
  padding: "15px",
  backgroundColor: "#E8D2C8",
  color: "#5E4B42",
  fontWeight: 800,
  fontSize: "22px",
  cursor: "pointer",
} as const;

const downloadButtonStyle = {
  width: "100%",
  marginTop: "16px",
  padding: "16px",
  borderRadius: "999px",
  border: "none",
  backgroundColor: "#DCC4B8",
  color: "#4F4039",
  fontSize: "17px",
  fontWeight: 800,
  cursor: "pointer",
} as const;
