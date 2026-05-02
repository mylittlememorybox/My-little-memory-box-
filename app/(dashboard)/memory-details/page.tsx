"use client";

import { useEffect, useState, ChangeEvent, FormEvent } from "react";
import Link from "next/link";

const WEBHOOK = "https://hook.eu1.make.com/4vspo1e7o6bmqg3q8rha4vl5o293qz55";

type FormValues = {
  childName: string;
  birthDate: string;
  weight: string;
  height: string;
  firstHold: string;
  fromHospital: string;
  firstHomeMoments: string;
  firstSmile: string;
  parents: string;
  familyValues: string;
  firstTooth: string;
  sleepRitual: string;
  crawlingFirstTime: string;
  firstSteps: string;
  firstWords: string;
  funnyMoments: string;
  birthday: string;
  school: string;
  finalThoughts: string;
};

const initialValues: FormValues = {
  childName: "",
  birthDate: "",
  weight: "",
  height: "",
  firstHold: "",
  fromHospital: "",
  firstHomeMoments: "",
  firstSmile: "",
  parents: "",
  familyValues: "",
  firstTooth: "",
  sleepRitual: "",
  crawlingFirstTime: "",
  firstSteps: "",
  firstWords: "",
  funnyMoments: "",
  birthday: "",
  school: "",
  finalThoughts: "",
};

const pages = [
  "Τα πρώτα στοιχεία",
  "Οι πρώτες αναμνήσεις",
  "Η οικογένεια",
  "Η ανάπτυξη",
  "Αστείες στιγμές",
  "Γενέθλια & σχολείο",
  "Τελικές σκέψεις",
];

export default function MemoryDetailsPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [pageIndex, setPageIndex] = useState(0);
  const [flip, setFlip] = useState(false);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    const saved = localStorage.getItem("memoryData");
    if (saved) setValues(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("memoryData", JSON.stringify(values));
  }, [values]);

  const change =
    (field: keyof FormValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const goToPage = (next: number) => {
    if (next < 0 || next >= pages.length) return;
    setFlip(true);
    setTimeout(() => {
      setPageIndex(next);
      setFlip(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 260);
  };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("memoryData", JSON.stringify(values));

    try {
      setStatus("sending");

      await fetch(WEBHOOK, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main style={page}>
      <style>{`
        @keyframes pageFlip {
          0% { transform: rotateY(0deg); opacity: 1; }
          50% { transform: rotateY(-12deg); opacity: .72; }
          100% { transform: rotateY(0deg); opacity: 1; }
        }
      `}</style>

      <Link href="/" style={logoWrap}>
        <img src="/logo.png" alt="My Little Memory Box" style={logo} />
      </Link>

      <form onSubmit={submit} style={bookShell}>
        <div style={bookCover}>
          <div style={bookHeader}>
            <span style={badge}>Σελίδα {pageIndex + 1} / {pages.length}</span>
            <h1 style={title}>{pages[pageIndex]}</h1>
          </div>

          <div
            style={{
              ...bookPage,
              animation: flip ? "pageFlip .28s ease" : "none",
            }}
          >
            {pageIndex === 0 && (
              <>
                <Field label="Το όνομα του παιδιού">
                  <input style={input} value={values.childName} onChange={change("childName")} />
                </Field>
                <Field label="Ημερομηνία γέννησης">
                  <input style={input} value={values.birthDate} onChange={change("birthDate")} />
                </Field>
                <Field label="Βάρος">
                  <input style={input} value={values.weight} onChange={change("weight")} />
                </Field>
                <Field label="Ύψος">
                  <input style={input} value={values.height} onChange={change("height")} />
                </Field>
              </>
            )}

            {pageIndex === 1 && (
              <>
                <Field label="Πρώτη αγκαλιά">
                  <textarea style={textarea} value={values.firstHold} onChange={change("firstHold")} />
                </Field>
                <Field label="Επιστροφή από το μαιευτήριο">
                  <textarea style={textarea} value={values.fromHospital} onChange={change("fromHospital")} />
                </Field>
                <Field label="Πρώτες στιγμές στο σπίτι">
                  <textarea style={textarea} value={values.firstHomeMoments} onChange={change("firstHomeMoments")} />
                </Field>
                <Field label="Πρώτο χαμόγελο">
                  <textarea style={textarea} value={values.firstSmile} onChange={change("firstSmile")} />
                </Field>
              </>
            )}

            {pageIndex === 2 && (
              <>
                <Field label="Γονείς και αγαπημένα πρόσωπα">
                  <textarea style={textarea} value={values.parents} onChange={change("parents")} />
                </Field>
                <Field label="Αξίες οικογένειας">
                  <textarea style={textarea} value={values.familyValues} onChange={change("familyValues")} />
                </Field>
              </>
            )}

            {pageIndex === 3 && (
              <>
                <Field label="Πρώτο δοντάκι">
                  <textarea style={textarea} value={values.firstTooth} onChange={change("firstTooth")} />
                </Field>
                <Field label="Ύπνος / ρουτίνα">
                  <textarea style={textarea} value={values.sleepRitual} onChange={change("sleepRitual")} />
                </Field>
                <Field label="Πρώτη φορά που μπουσούλησε">
                  <textarea style={textarea} value={values.crawlingFirstTime} onChange={change("crawlingFirstTime")} />
                </Field>
                <Field label="Πρώτα βήματα">
                  <textarea style={textarea} value={values.firstSteps} onChange={change("firstSteps")} />
                </Field>
              </>
            )}

            {pageIndex === 4 && (
              <>
                <Field label="Πρώτες λέξεις">
                  <textarea style={textarea} value={values.firstWords} onChange={change("firstWords")} />
                </Field>
                <Field label="Αστείες στιγμές">
                  <textarea style={textarea} value={values.funnyMoments} onChange={change("funnyMoments")} />
                </Field>
              </>
            )}

            {pageIndex === 5 && (
              <>
                <Field label="Γενέθλια">
                  <textarea style={textarea} value={values.birthday} onChange={change("birthday")} />
                </Field>
                <Field label="Παιδικός σταθμός / σχολείο">
                  <textarea style={textarea} value={values.school} onChange={change("school")} />
                </Field>
              </>
            )}

            {pageIndex === 6 && (
              <>
                <Field label="Τελικές σκέψεις / μήνυμα αγάπης">
                  <textarea style={textareaLarge} value={values.finalThoughts} onChange={change("finalThoughts")} />
                </Field>

                {status === "success" && <p style={success}>Η φόρμα αποθηκεύτηκε και στάλθηκε με επιτυχία 💛</p>}
                {status === "error" && <p style={error}>Κάτι πήγε στραβά. Δοκίμασε ξανά.</p>}
              </>
            )}
          </div>

          <div style={buttons}>
            <button type="button" style={secondaryButton} onClick={() => goToPage(pageIndex - 1)}>
              Προηγούμενη
            </button>

            {pageIndex < pages.length - 1 ? (
              <button type="button" style={primaryButton} onClick={() => goToPage(pageIndex + 1)}>
                Επόμενη σελίδα
              </button>
            ) : (
              <button type="submit" style={primaryButton} disabled={status === "sending"}>
                {status === "sending" ? "Αποστολή..." : "Υποβολή"}
              </button>
            )}
          </div>
        </div>
      </form>
    </main>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={field}>
      <span style={labelStyle}>{label}</span>
      {children}
    </label>
  );
}

const page = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #F7EFE8 0%, #EEDFD4 100%)",
  padding: "18px 14px 40px",
  color: "#5E4B42",
};

const logoWrap = {
  display: "flex",
  justifyContent: "center",
  marginBottom: "14px",
};

const logo = {
  width: "150px",
  height: "auto",
  cursor: "pointer",
};

const bookShell = {
  width: "100%",
  maxWidth: "560px",
  margin: "0 auto",
};

const bookCover = {
  background: "#B9907A",
  borderRadius: "28px",
  padding: "12
