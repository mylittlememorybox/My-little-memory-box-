"use client";

import { useState } from "react";
import Link from "next/link";

export default function PreviewPage() {
  const [mode, setMode] = useState<"memory" | "story">("memory");
  const [page, setPage] = useState(0);
  const [flip, setFlip] = useState(false);

  const TOTAL_PAGES = mode === "memory" ? 6 : 4;

  const goPage = (p: number) => {
    setFlip(true);
    setTimeout(() => {
      setPage(p);
      setFlip(false);
    }, 200);
  };

  return (
    <>
      {/* FLIP ANIMATION */}
      <style>{`
        @keyframes flipPage {
          0% { transform: rotateY(0deg); }
          50% { transform: rotateY(-60deg); }
          100% { transform: rotateY(0deg); }
        }
      `}</style>

      <div style={layout}>

        {/* SIDEBAR */}
        <div style={sidebar}>
          <h3 style={{ marginBottom: 20 }}>Preview</h3>

          <button onClick={() => setMode("memory")} style={menuBtn}>
            📖 MemoryBox
          </button>

          <button onClick={() => setMode("story")} style={menuBtn}>
            📚 Παραμύθι
          </button>

          <hr style={{ margin: "20px 0" }} />

          <Link href="/" style={linkStyle}>🏠 Αρχική</Link>
          <Link href="/auth/signup" style={linkStyle}>✍️ Εγγραφή</Link>
          <Link href="/auth/login" style={linkStyle}>🔑 Σύνδεση</Link>
        </div>

        {/* BOOK */}
        <div style={bookWrapper}>

          <div
            style={{
              ...book,
              animation: flip ? "flipPage 0.4s ease" : "none",
            }}
          >
            {/* COVER */}
            {page === 0 && (
              <div style={pageStyle}>
                <img src="/logo.png" style={{ width: 120 }} />
                <h2 style={title}>
                  memory box με τα πρώτα χρόνια της ζωή
                </h2>
              </div>
            )}

            {/* MEMORY PAGES */}
            {mode === "memory" && page === 1 && (
              <div style={pageStyle}>📌 Τα πρώτα στοιχεία</div>
            )}
            {mode === "memory" && page === 2 && (
              <div style={pageStyle}>📸 Αναμνήσεις</div>
            )}
            {mode === "memory" && page === 3 && (
              <div style={pageStyle}>👨‍👩‍👧 Οικογένεια</div>
            )}
            {mode === "memory" && page === 4 && (
              <div style={pageStyle}>🍼 Πρώτες στιγμές</div>
            )}
            {mode === "memory" && page === 5 && (
              <div style={pageStyle}>🎥 Media</div>
            )}

            {/* STORY BOOK */}
            {mode === "story" && page === 1 && (
              <div style={pageStyle}>🌙 Μια φορά κι έναν καιρό...</div>
            )}
            {mode === "story" && page === 2 && (
              <div style={pageStyle}>✨ Το παιδί μεγάλωνε...</div>
            )}
            {mode === "story" && page === 3 && (
              <div style={pageStyle}>❤️ Και έζησαν όμορφα...</div>
            )}
          </div>

          {/* NAV */}
          <div style={nav}>
            <button
              onClick={() => goPage(page - 1)}
              disabled={page === 0}
            >
              ←
            </button>

            <span>
              {page}/{TOTAL_PAGES}
            </span>

            <button
              onClick={() => goPage(page + 1)}
              disabled={page === TOTAL_PAGES}
            >
              →
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const layout = {
  display: "flex",
  height: "100vh",
};

const sidebar = {
  width: 200,
  background: "#fff",
  padding: 20,
  borderRight: "1px solid #eee",
};

const bookWrapper = {
  flex: 1,
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
};

const book = {
  width: "90%",
  maxWidth: 400,
  height: 500,
  background: "#fff8f0",
  borderRadius: 20,
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  padding: 20,
};

const pageStyle = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column" as const,
};

const nav = {
  marginTop: 20,
  display: "flex",
  gap: 20,
};

const menuBtn = {
  width: "100%",
  padding: 10,
  marginBottom: 10,
  border: "none",
  background: "#eee",
  borderRadius: 10,
};

const linkStyle = {
  display: "block",
  marginBottom: 10,
};

const title = {
  fontFamily: "cursive",
  marginTop: 20,
};
