"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function MemoryDetails() {
  const [page, setPage] = useState(0);
  const [flip, setFlip] = useState(false);
  const [values, setValues] = useState<any>({});

  useEffect(() => {
    const saved = localStorage.getItem("memoryData");
    if (saved) setValues(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("memoryData", JSON.stringify(values));
  }, [values]);

  const change = (field: string) => (e: any) => {
    setValues({ ...values, [field]: e.target.value });
  };

  const go = (next: number) => {
    if (next < 0 || next > 20) return;
    setFlip(true);
    setTimeout(() => {
      setPage(next);
      setFlip(false);
      window.scrollTo({ top: 0 });
    }, 320);
  };

  return (
    <main style={bg}>
      <style>{`
        @keyframes flipPage {
          0% { transform: rotateY(0deg); opacity:1; }
          50% { transform: rotateY(-18deg); opacity:.6; }
          100% { transform: rotateY(0deg); opacity:1; }
        }
      `}</style>

      {/* LOGO */}
      <Link href="/" style={logoWrap}>
        <img src="/logo.png" style={logo} />
      </Link>

      <div style={book}>
        <div
          style={{
            ...paper,
            animation: flip ? "flipPage .3s ease" : "none",
          }}
        >

          {/* COVER */}
          {page === 0 && (
            <div style={cover}>
              <img src="/logo.png" style={{ width: 120 }} />

              <h1 style={handTitle}>
                Memory box με τα πρώτα χρόνια ζωής
              </h1>

              <input
                style={input}
                placeholder="Το όνομα του παιδιού"
                value={values.childName || ""}
                onChange={change("childName")}
              />

              <button style={btn} onClick={() => go(1)}>
                Άνοιγμα βιβλίου
              </button>
            </div>
          )}

          {/* PAGE 1 */}
          {page === 1 && (
            <Section title="Ήσουν μια σταλίτσα...">
              <Field label="Η πρώτη φορά που σε κράτησα αγκαλιά">
                <textarea style={textarea} onChange={change("firstHold")} />
              </Field>

              <Field label="Ζύγιζες μόνο">
                <input style={input} onChange={change("weight")} />
              </Field>

              <Field label="Είχες ύψος">
                <input style={input} onChange={change("height")} />
              </Field>

              <Upload label="Φωτογραφίες & βίντεο" />
            </Section>
          )}

          {/* PAGE 2 */}
          {page === 2 && (
            <Section title="Ο κόσμος σου">
              <Field label="Οι γονείς σου">
                <textarea style={textarea} onChange={change("parents")} />
              </Field>

              <Field label="Οι αξίες που θέλουμε να σου δώσουμε">
                <textarea style={textarea} onChange={change("familyValues")} />
              </Field>
            </Section>
          )}

          {/* PAGE 3 */}
          {page === 3 && (
            <Section title="Οι πρώτες ανακαλύψεις">
              <Field label="Το πρώτο σου δοντάκι">
                <textarea style={textarea} onChange={change("firstTooth")} />
              </Field>

              <Upload label="Φωτογραφίες" />
            </Section>
          )}

          {/* PAGE 4 */}
          {page === 4 && (
            <Section title="Τα πρώτα σου βήματα">
              <Field label="Η πρώτη φορά που στάθηκες">
                <textarea style={textarea} onChange={change("stoodUp")} />
              </Field>

              <Field label="Η πρώτη σου πτώση">
                <textarea style={textarea} onChange={change("fall")} />
              </Field>
            </Section>
          )}

          {/* NAV */}
          <div style={nav}>
            <button
              disabled={page === 0}
              onClick={() => go(page - 1)}
              style={navBtn}
            >
              ←
            </button>

            <button
              disabled={page === 4}
              onClick={() => go(page + 1)}
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

/* COMPONENTS */

function Section({ title, children }: any) {
  return (
    <div>
      <h2 style={titleStyle}>{title}</h2>
      {children}
    </div>
  );
}

function Field({ label, children }: any) {
  return (
    <div style={{ marginBottom: 12 }}>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function Upload({ label }: any) {
  return (
    <div style={upload}>
      <span>{label}</span>
      <input type="file" multiple />
    </div>
  );
}

/* STYLES */

const bg = {
  background: "#f6efe8",
  minHeight: "100vh",
  padding: 10,
};

const logoWrap = {
  display: "flex",
  justifyContent: "center",
  marginBottom: 10,
};

const logo = {
  width: 110,
};

const book = {
  maxWidth: 380,
  margin: "0 auto",
  background: "#b58e78",
  borderRadius: 18,
  padding: 6,
};

const paper = {
  background: "#fffdf8",
  borderRadius: 14,
  padding: 14,
  minHeight: 520,
};

const cover = {
  textAlign: "center",
};

const handTitle = {
  fontFamily: "cursive",
  fontSize: 20,
  marginTop: 10,
};

const input = {
  width: "100%",
  padding: 12,
  borderRadius: 10,
  marginTop: 8,
};

const textarea = {
  ...input,
  minHeight: 80,
};

const btn = {
  marginTop: 20,
  padding: 12,
  borderRadius: 10,
  background: "#7d6457",
  color: "#fff",
  width: "100%",
};

const nav = {
  display: "flex",
  justifyContent: "space-between",
  marginTop: 20,
};

const navBtn = {
  padding: 10,
  borderRadius: 10,
};

const titleStyle = {
  fontSize: 20,
  marginBottom: 10,
};

const labelStyle = {
  fontWeight: "bold",
  fontSize: 14,
};

const upload = {
  border: "1px dashed #ccc",
  padding: 10,
  borderRadius: 10,
  marginTop: 10,
};
