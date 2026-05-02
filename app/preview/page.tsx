"use client";

import { useState } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";

type PreviewMode = "memory" | "story";

export default function PreviewPage() {
  const [mode, setMode] = useState<PreviewMode>("memory");
  const [page, setPage] = useState(0);
  const [turning, setTurning] = useState(false);

  const memoryPages = [
    {
      title: "Preview MemoryBox",
      text: "Δείγμα του Memory Box με τις πρώτες αναμνήσεις, τις φωτογραφίες και τις στιγμές του παιδιού.",
    },
    {
      title: "Τα πρώτα στοιχεία",
      text: "Εδώ εμφανίζονται τα βασικά στοιχεία του παιδιού και οι πρώτες τρυφερές πληροφορίες.",
    },
    {
      title: "Οι πρώτες στιγμές",
      text: "Η πρώτη αγκαλιά, η επιστροφή στο σπίτι και οι μικρές στιγμές που μένουν για πάντα.",
    },
    {
      title: "Ο κόσμος σου",
      text: "Οι γονείς, οι παππούδες, οι γιαγιάδες, οι θείοι και οι άνθρωποι που έγιναν οικογένεια.",
    },
    {
      title: "Φωτογραφίες & βίντεο",
      text: "Εδώ θα φαίνονται οι φωτογραφίες και τα βίντεο που έχουν ανέβει για το Memory Box.",
    },
  ];

  const storyPages = [
    {
      title: "Preview custom Παραμύθι",
      text: "Το προσωποποιημένο παραμύθι εμφανίζεται σαν ξεχωριστό βιβλίο.",
    },
    {
      title: "Μια φορά κι έναν καιρό...",
      text: "Εδώ ξεκινά η ιστορία του παιδιού, με μαγικό και τρυφερό τρόπο.",
    },
    {
      title: "Το ταξίδι",
      text: "Το παιδί γίνεται ο ήρωας της ιστορίας και ζει τη δική του περιπέτεια.",
    },
    {
      title: "Το τέλος του παραμυθιού",
      text: "Το παραμύθι κλείνει με ένα γλυκό μήνυμα αγάπης.",
    },
  ];

  const pages = mode === "memory" ? memoryPages : storyPages;

  const goToPage = (nextPage: number) => {
    if (nextPage < 0 || nextPage >= pages.length) return;

    setTurning(true);

    setTimeout(() => {
      setPage(nextPage);
      setTurning(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 520);
  };

  const changeMode = (nextMode: PreviewMode) => {
    if (nextMode === mode) return;

    setTurning(true);

    setTimeout(() => {
      setMode(nextMode);
      setPage(0);
      setTurning(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 520);
  };

  return (
    <main style={pageStyle}>
      <style>{`
        @keyframes pageFlip3D {
          0% {
            transform: perspective(1300px) rotateY(0deg) translateX(0);
            filter: brightness(1);
          }
          25% {
            transform: perspective(1300px) rotateY(-28deg) translateX(-4px);
            filter: brightness(.97);
          }
          55% {
            transform: perspective(1300px) rotateY(-72deg) translateX(-10px);
            filter: brightness(.86);
          }
          78% {
            transform: perspective(1300px) rotateY(-28deg) translateX(-4px);
            filter: brightness(.95);
          }
          100% {
            transform: perspective(1300px) rotateY(0deg) translateX(0);
            filter: brightness(1);
          }
        }
      `}</style>

      <section style={appShellStyle}>
        <aside style={sidebarStyle}>
          <img src="/logo.png" alt="My Little Memory Box" style={sidebarLogoStyle} />

          <button
            type="button"
            style={mode === "memory" ? activeMenuButtonStyle : menuButtonStyle}
            onClick={() => changeMode("memory")}
          >
            Preview MemoryBox
          </button>

          <button
            type="button"
            style={mode === "story" ? activeMenuButtonStyle : menuButtonStyle}
            onClick={() => changeMode("story")}
          >
            Preview custom Παραμύθι
          </button>

          <div style={smallLinksStyle}>
            <Link href="/signup" style={sideLinkStyle}>
              Εγγραφή
            </Link>

            <Link href="/login" style={sideLinkStyle}>
              Σύνδεση
            </Link>

            <Link href="/" style={sideLinkStyle}>
              Επιστροφή στην αρχική
            </Link>
          </div>
        </aside>

        <div style={bookAreaStyle}>
          <div style={bookShellStyle}>
            <div
              style={{
                ...bookPageStyle,
                animation: turning ? "pageFlip3D .52s ease-in-out" : "none",
              }}
            >
              <button type="button" style={logoButtonStyle} onClick={() => goToPage(0)}>
                <img src="/logo.png" alt="My Little Memory Box" style={bookLogoStyle} />
              </button>

              <div style={pageCounterStyle}>
                Σελίδα {page + 1} / {pages.length}
              </div>

              {page === 0 ? (
                <div style={coverStyle}>
                  <h1 style={coverTitleStyle}>{pages[0].title}</h1>
                  <p style={coverTextStyle}>{pages[0].text}</p>
                </div>
              ) : (
                <div style={innerPageStyle}>
                  <div style={pageBadgeStyle}>
                    {mode === "memory" ? "MemoryBox" : "Παραμύθι"}
                  </div>

                  <h2 style={innerTitleStyle}>{pages[page].title}</h2>

                  <p style={innerTextStyle}>{pages[page].text}</p>

                  <div style={sampleBoxStyle}>
                    {mode === "memory"
                      ? "Εδώ θα μπει το δείγμα του Memory Box."
                      : "Εδώ θα μπει το δείγμα του custom παραμυθιού."}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div style={navStyle}>
            <button
              type="button"
              style={navButtonStyle}
              onClick={() => goToPage(page - 1)}
              disabled={page === 0}
            >
              Προηγούμενη
            </button>

            <button
              type="button"
              style={navButtonStyle}
              onClick={() => goToPage(page + 1)}
              disabled={page === pages.length - 1}
            >
              Επόμενη
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #FCF6F1 0%, #F8EEE7 100%)",
  padding: "10px",
  boxSizing: "border-box",
  color: "#5E4B42",
};

const appShellStyle: CSSProperties = {
  width: "100%",
  maxWidth: "430px",
  margin: "0 auto",
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const sidebarStyle: CSSProperties = {
  backgroundColor: "#FFFDF8",
  border: "1px solid #E8D8CF",
  borderRadius: "22px",
  padding: "12px",
  boxShadow: "0 10px 24px rgba(80,50,35,0.10)",
  display: "grid",
  gap: "8px",
  boxSizing: "border-box",
};

const sidebarLogoStyle: CSSProperties = {
  width: "105px",
  height: "auto",
  margin: "0 auto 4px",
};

const menuButtonStyle: CSSProperties = {
  width: "100%",
  border: "none",
  borderRadius: "15px",
  padding: "13px 12px",
  backgroundColor: "#F1DED2",
  color: "#6B564C",
  fontWeight: 800,
  fontSize: "14px",
  cursor: "pointer",
  textAlign: "center",
};

const activeMenuButtonStyle: CSSProperties = {
  ...menuButtonStyle,
  backgroundColor: "#B9907A",
  color: "#FFFFFF",
};

const smallLinksStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "7px",
  marginTop: "6px",
};

const sideLinkStyle: CSSProperties = {
  textDecoration: "none",
  color: "#6B564C",
  backgroundColor: "#FFF8F3",
  border: "1px solid #E8D8CF",
  borderRadius: "14px",
  padding: "11px 10px",
  fontWeight: 700,
  fontSize: "14px",
  textAlign: "center",
};

const bookAreaStyle: CSSProperties = {
  width: "100%",
};

const bookShellStyle: CSSProperties = {
  width: "100%",
  backgroundColor: "#B9907A",
  borderRadius: "24px",
  padding: "8px",
  boxShadow: "0 18px 38px rgba(80,50,35,0.24)",
  boxSizing: "border-box",
};

const bookPageStyle: CSSProperties = {
  minHeight: "570px",
  backgroundColor: "#FFFDF8",
  borderRadius: "18px",
  padding: "14px",
  boxSizing: "border-box",
  transformOrigin: "left center",
  backfaceVisibility: "hidden",
  willChange: "transform",
  boxShadow: "inset 10px 0 22px rgba(120,80,50,0.10)",
};

const logoButtonStyle: CSSProperties = {
  display: "block",
  margin: "0 auto 8px",
  border: "none",
  background: "transparent",
  padding: 0,
  cursor: "pointer",
};

const bookLogoStyle: CSSProperties = {
  width: "115px",
  height: "auto",
};

const pageCounterStyle: CSSProperties = {
  textAlign: "center",
  color: "#9B735F",
  fontSize: "12px",
  fontWeight: 800,
  marginBottom: "12px",
};

const coverStyle: CSSProperties = {
  minHeight: "430px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  padding: "12px",
};

const coverTitleStyle: CSSProperties = {
  fontFamily: "cursive",
  fontSize: "36px",
  lineHeight: 1.05,
  color: "#6F5A50",
  margin: "0 0 16px",
};

const coverTextStyle: CSSProperties = {
  fontSize: "15px",
  lineHeight: 1.65,
  color: "#7A6A62",
  margin: 0,
};

const innerPageStyle: CSSProperties = {
  backgroundColor: "rgba(255,248,243,0.96)",
  border: "1px solid rgba(216,197,185,0.45)",
  borderRadius: "18px",
  padding: "18px 14px",
  minHeight: "410px",
  boxSizing: "border-box",
};

const pageBadgeStyle: CSSProperties = {
  display: "inline-block",
  padding: "6px 11px",
  borderRadius: "999px",
  backgroundColor: "#F4E4DA",
  color: "#8B6F5A",
  fontSize: "12px",
  fontWeight: 800,
  marginBottom: "12px",
};

const innerTitleStyle: CSSProperties = {
  fontFamily: "serif",
  color: "#7D6457",
  fontSize: "25px",
  margin: "0 0 14px",
  lineHeight: 1.15,
};

const innerTextStyle: CSSProperties = {
  color: "#6B564C",
  fontSize: "15px",
  lineHeight: 1.65,
  margin: 0,
};

const sampleBoxStyle: CSSProperties = {
  marginTop: "18px",
  border: "1px dashed #D8C5B9",
  borderRadius: "16px",
  padding: "18px",
  textAlign: "center",
  color: "#9B735F",
  backgroundColor: "#FFF9F6",
  fontWeight: 800,
  fontSize: "14px",
};

const navStyle: CSSProperties = {
  display: "flex",
  gap: "8px",
  marginTop: "12px",
  position: "sticky",
  bottom: "8px",
};

const navButtonStyle: CSSProperties = {
  flex: 1,
  border: "none",
  borderRadius: "15px",
  padding: "13px 10px",
  backgroundColor: "#E8D2C8",
  color: "#5E4B42",
  fontWeight: 800,
  fontSize: "14px",
  cursor: "pointer",
};
