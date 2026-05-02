"use client";

import { useState } from "react";
import Link from "next/link";
import type { CSSProperties } from "react";

type Mode = "memory" | "story";

export default function PreviewPage() {
  const [mode, setMode] = useState<Mode>("memory");
  const [page, setPage] = useState(0);
  const [flip, setFlip] = useState(false);
  const [menu, setMenu] = useState(false);

  const TOTAL_MEMORY = 7;
  const TOTAL_STORY = 5;

  const total = mode === "memory" ? TOTAL_MEMORY : TOTAL_STORY;

  const go = (n: number) => {
    if (n < 0 || n > total) return;
    setFlip(true);
    setTimeout(() => {
      setPage(n);
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
      <button style={hamburger} onClick={() => setMenu(true)}>☰</button>

      {menu && (
        <div style={overlay} onClick={() => setMenu(false)}>
          <div style={drawer} onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setMenu(false)}>✕</button>

            <button style={menuBtn} onClick={() => setMode("memory")}>
              Preview MemoryBox
            </button>

            <button style={menuBtn} onClick={() => setMode("story")}>
              Preview Παραμύθι
            </button>

            <Link href="/">Αρχική</Link>
            <Link href="/signup">Εγγραφή</Link>
            <Link href="/login">Σύνδεση</Link>
          </div>
        </div>
      )}

      <div style={bookWrap}>
        <div style={{
          ...pageBox,
          animation: flip ? "flip .35s ease" : "none"
        }}>

          {/* MEMORY */}
          {mode === "memory" && (
            <>
              {page === 0 && (
                <div style={cover}>
                  <img src="/logo.png" style={logo} />
                  <h2 style={subtitle}>
                    memory box με τα πρώτα χρόνια ζωής
                  </h2>

                  <div style={nameBox}>
                    όνομα παιδιού:
                    <strong style={name}>ελπίδα</strong>
                  </div>
                </div>
              )}

              {page === 1 && (
                <Row
                  title="οι πρώτες στιγμές"
                  text="η πρώτη αγκαλιά, η πρώτη μέρα στο σπίτι και οι πρώτες αναμνήσεις σας μαζί"
                  img="/preview/newborn.jpg.JPG"
                />
              )}

              {page === 2 && (
                <>
                  <Row
                    title="πρώτο δόντι"
                    text="το πρώτο χαμόγελο με το πρώτο μικρό δοντάκι"
                    img="/preview/smile.jpg.JPG"
                  />
                  <Row
                    title="μπουσούλημα"
                    text="η πρώτη προσπάθεια να εξερευνήσει τον κόσμο"
                    img="/preview/crown.jpg.JPG"
                  />
                </>
              )}

              {page === 3 && (
                <Row
                  title="πρώτα βήματα"
                  text="τα πρώτα βήματα προς έναν ολόκληρο κόσμο"
                  img="/preview/steps.jpg.JPG"
                />
              )}

              {page === 4 && (
                <>
                  <Row
                    title="οι γονείς"
                    text="οι άνθρωποι που είναι πάντα δίπλα της"
                    img="/preview/family.jpg.JPG"
                  />
                  <Row
                    title="παππούς & γιαγιά"
                    text="αγάπη χωρίς όρια"
                    img="/preview/grandparents.jpg.JPG"
                  />
                </>
              )}

              {page === 5 && (
                <Row
                  title="τα γενέθλια σου"
                  text="μια μέρα γεμάτη χαρά και αγάπη"
                  img="/preview/birthday.jpg.JPG"
                />
              )}

              {page === 6 && (
                <Row
                  title="τα πρώτα βήματα στον κόσμο"
                  text="οι πρώτες εμπειρίες έξω στον κόσμο"
                  img="/preview/social.jpg.JPG"
                />
              )}

              {page === 7 && (
                <Row
                  title="η πρώτη μέρα στο σχολείο"
                  text="ένα νέο ξεκίνημα"
                  img="/preview/school.jpg.JPG"
                />
              )}
            </>
          )}

          {/* STORY */}
          {mode === "story" && (
            <>
              {page === 0 && (
                <div style={cover}>
                  <h1 style={storyTitle}>Το δάσος των χρωμάτων</h1>
                </div>
              )}

              {page === 1 && (
                <Story
                  img="/preview/story1.jpg.PNG"
                  text="Η Ελπίδα, με τα ξανθά μαλλιά και τα καστανά μάτια, ζούσε σε ένα μαγικό δάσος γεμάτο χρώματα."
                />
              )}

              {page === 2 && (
                <Story
                  img="/preview/story2.jpg.PNG"
                  text="Αγαπούσε το κόκκινο και είχε έναν φίλο, ένα μικρό κουνέλι."
                />
              )}

              {page === 3 && (
                <Story
                  img="/preview/story3.jpg.PNG"
                  text="Θυμήθηκε μια εκδρομή στη θάλασσα με τον παππού, τη γιαγιά, τη μαμά και τον μπαμπά."
                />
              )}

              {page === 4 && (
                <Story
                  img="/preview/story4.jpg.PNG"
                  text="«Είσαι ικανή για όλα. Θα είμαι πάντα εδώ.» της είπε η μαμά."
                />
              )}

              {page === 5 && (
                <Story
                  img="/preview/story5.jpg.PNG"
                  text="Και έτσι η Ελπίδα φώτισε όλο το δάσος με το αγαπημένο της κόκκινο."
                />
              )}
            </>
          )}
        </div>

        <div style={nav}>
          <button onClick={() => go(page - 1)}>←</button>
          <span>{page}/{total}</span>
          <button onClick={() => go(page + 1)}>→</button>
        </div>
      </div>
    </main>
  );
}

/* COMPONENTS */

function Row({ title, text, img }: any) {
  return (
    <div style={row}>
      <div style={textBox}>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
      <img src={img} style={image} />
    </div>
  );
}

function Story({ text, img }: any) {
  return (
    <div style={row}>
      <p style={{ flex: 1 }}>{text}</p>
      <img src={img} style={image} />
    </div>
  );
}

/* STYLES */

const pageStyle: CSSProperties = { padding: 12 };

const hamburger: CSSProperties = {
  position: "fixed",
  top: 10,
  left: 10
};

const overlay: CSSProperties = {
  position: "fixed",
  inset: 0,
  background: "rgba(0,0,0,.3)"
};

const drawer: CSSProperties = {
  width: 200,
  background: "white",
  height: "100%",
  padding: 20,
  display: "flex",
  flexDirection: "column",
  gap: 10
};

const menuBtn: CSSProperties = {
  padding: 10,
  background: "#ddd",
  border: "none"
};

const bookWrap: CSSProperties = {
  maxWidth: 380,
  margin: "70px auto"
};

const pageBox: CSSProperties = {
  background: "#fff",
  padding: 20,
  borderRadius: 20
};

const cover: CSSProperties = { textAlign: "center" };

const logo: CSSProperties = { width: "50%" };

const subtitle: CSSProperties = { marginTop: 10 };

const nameBox: CSSProperties = {
  border: "1px solid #ccc",
  padding: 10,
  marginTop: 20
};

const name: CSSProperties = { fontSize: 24 };

const row: CSSProperties = {
  display: "flex",
  gap: 10,
  marginBottom: 20
};

const textBox: CSSProperties = { flex: 1 };

const image: CSSProperties = {
  width: 120,
  borderRadius: 10
};

const nav: CSSProperties = {
  display: "flex",
  justifyContent: "space-between"
};

const storyTitle: CSSProperties = {
  fontSize: 28
};
