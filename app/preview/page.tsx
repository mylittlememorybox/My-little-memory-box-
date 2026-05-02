"use client";

import { useState } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";

export default function PreviewPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [flip, setFlip] = useState(false);

  const TOTAL = 7;

  const go = (next: number) => {
    if (next < 0 || next > TOTAL) return;
    setFlip(true);
    setTimeout(() => {
      setPage(next);
      setFlip(false);
    }, 350);
  };

  return (
    <main style={pageStyle}>
      <style>{`
        @keyframes flip {
          0% { transform: perspective(1200px) rotateY(0); }
          50% { transform: perspective(1200px) rotateY(-60deg); }
          100% { transform: perspective(1200px) rotateY(0); }
        }
      `}</style>

      {/* ☰ MENU */}
      <button style={hamburger} onClick={() => setMenuOpen(true)}>☰</button>

      {menuOpen && (
        <div style={overlay} onClick={() => setMenuOpen(false)}>
          <div style={drawer} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setMenuOpen(false)}>✕</button>
            <Link href="/">Αρχική</Link>
            <Link href="/signup">Εγγραφή</Link>
            <Link href="/login">Σύνδεση</Link>
          </div>
        </div>
      )}

      {/* BOOK */}
      <div style={bookWrap}>
        <div style={{
          ...pageBox,
          animation: flip ? "flip .35s ease" : "none"
        }}>

          {/* COVER */}
          {page === 0 && (
            <div style={cover}>
              <img src="/logo.png" style={logo} />

              <h2 style={subtitle}>
                preview «τα πρώτα σου χρόνια ζωής»
              </h2>

              <div style={nameBox}>
                <span>όνομα παιδιού:</span>
                <strong style={name}>ελπίδα</strong>
              </div>
            </div>
          )}

          {/* 1 */}
          {page === 1 && (
            <Row title="οι πρώτες στιγμές" img="/preview/newborn.jpg.JPG" />
          )}

          {/* 2 */}
          {page === 2 && (
            <>
              <Row title="πρώτο δόντι" img="/preview/smile.jpg.JPG" />
              <Row title="μπουσούλημα" img="/preview/crown.jpg.JPG" />
            </>
          )}

          {/* 3 */}
          {page === 3 && (
            <Row title="πρώτα βήματα" img="/preview/steps.jpg.JPG" />
          )}

          {/* 4 */}
          {page === 4 && (
            <>
              <Row title="οι γονείς" img="/preview/family.jpg.JPG" />
              <Row title="παππούς & γιαγιά" img="/preview/grandparents.jpg.JPG" />
            </>
          )}

          {/* 5 */}
          {page === 5 && (
            <Row title="τα γενέθλια σου" img="/preview/birthday.jpg.JPG" />
          )}

          {/* 6 */}
          {page === 6 && (
            <Row title="τα πρώτα βήματα στον κόσμο" img="/preview/social.jpg.JPG" />
          )}

          {/* 7 */}
          {page === 7 && (
            <Row title="η πρώτη μέρα στο σχολείο" img="/preview/school.jpg.JPG" />
          )}

        </div>

        {/* NAV */}
        <div style={nav}>
          <button onClick={() => go(page - 1)}>←</button>
          <span>{page} / {TOTAL}</span>
          <button onClick={() => go(page + 1)}>→</button>
        </div>
      </div>
    </main>
  );
}

/* ROW COMPONENT */
function Row({ title, img }: { title: string; img: string }) {
  return (
    <div style={row}>
      <div style={text}>{title}</div>
      <img src={img} style={image} />
    </div>
  );
}

/* STYLES */

const pageStyle: CSSProperties = {
  padding: 12,
  background: "#f5f2ef",
  minHeight: "100vh"
};

const hamburger: CSSProperties = {
  position: "fixed",
  top: 12,
  left: 12,
  fontSize: 22,
  background: "white",
  borderRadius: 8,
  padding: "4px 10px",
  border: "1px solid #ddd"
};

const overlay: CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,.35)"
};

const drawer: CSSProperties = {
  width: 220,
  height: "100%",
  background: "#fff",
  padding: 20,
  display: "flex",
  flexDirection: "column",
  gap: 12
};

const bookWrap: CSSProperties = {
  maxWidth: 380,
  margin: "70px auto"
};

const pageBox: CSSProperties = {
  background: "#fff",
  borderRadius: 24,
  padding: 20,
  boxShadow: "0 10px 30px rgba(0,0,0,.1)"
};

const cover: CSSProperties = {
  textAlign: "center"
};

const logo: CSSProperties = {
  width: "55%",
  maxWidth: 180
};

const subtitle: CSSProperties = {
  fontFamily: "Georgia, serif",
  fontStyle: "italic",
  fontSize: 20,
  color: "#7a5c4a",
  marginTop: 18
};

const nameBox: CSSProperties = {
  border: "1px solid #d8c2b0",
  padding: 12,
  marginTop: 24,
  borderRadius: 14,
  background: "#fffaf7"
};

const name: CSSProperties = {
  display: "block",
  fontSize: 26,
  fontFamily: "Georgia, serif",
  marginTop: 6,
  color: "#7a5c4a"
};

const row: CSSProperties = {
  display: "flex",
  gap: 12,
  alignItems: "center",
  marginBottom: 20
};

const text: CSSProperties = {
  flex: 1,
  fontSize: 15,
  color: "#4d3a2f"
};

const image: CSSProperties = {
  width: 120,
  borderRadius: 14,
  objectFit: "cover"
};

const nav: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 12,
  alignItems: "center"
};
