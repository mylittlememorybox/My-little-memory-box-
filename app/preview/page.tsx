"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

function TypeText({ text }: { text: string }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i));
      i++;
      if (i > text.length) clearInterval(interval);
    }, 20);
    return () => clearInterval(interval);
  }, [text]);

  return <span>{displayed}</span>;
}

export default function PreviewPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mode, setMode] = useState<"memory" | "story">("memory");

  return (
    <div style={styles.page}>
      {/* Sidebar */}
      <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {menuOpen && (
        <div style={styles.sidebar}>
          <p onClick={() => location.href = "/"}>Αρχική</p>
          <p>Δημιουργία Memory Box (29.99€ + ΦΠΑ)</p>
          <p onClick={() => location.href = "/login"}>Ο λογαριασμός μου</p>
        </div>
      )}

      {/* Logo */}
      <div style={styles.logo} onClick={() => location.href = "/"}>
        My Little Memory Box
      </div>

      {/* Switch */}
      <div style={styles.switch}>
        <button onClick={() => setMode("memory")}>Memory Box</button>
        <button onClick={() => setMode("story")}>Παραμύθι</button>
      </div>

      {/* CONTENT */}
      {mode === "memory" ? <MemoryPreview /> : <StoryPreview />}
    </div>
  );
}

function Section({
  title,
  text,
  image
}: {
  title: string;
  text: string;
  image: string;
}) {
  return (
    <div style={styles.section}>
      <div style={styles.image}>
        <Image src={image} alt="" width={300} height={200} />
      </div>

      <div style={styles.text}>
        <h2>{title}</h2>
        <p>
          <TypeText text={text} />
        </p>
      </div>
    </div>
  );
}

function MemoryPreview() {
  return (
    <div>
      <p style={styles.description}>
        Ένα μικρό δείγμα από τις 14 σελίδες του Memory Box…
      </p>

      <Section
        title="Οι πρώτες σου στιγμές"
        text="Η πρώτη φορά που σε κράτησα ήταν 12 Μαρτίου 2023… ήσουν τόσο μικρή αλλά ήδη όλος μου ο κόσμος."
        image="/preview/newborn.jpg.JPG"
      />

      <Section
        title="Το πρώτο σου δοντάκι"
        text="Το πρώτο σου δοντάκι εμφανίστηκε ένα πρωί… και εγώ δεν το πίστευα!"
        image="/preview/smile.jpg.JPG"
      />

      <Section
        title="Το μπουσούλημα"
        text="Ξεκίνησες να μπουσουλάς και από εκείνη τη στιγμή δεν σταμάτησες ποτέ."
        image="/preview/crown.jpg.JPG"
      />

      <Section
        title="Τα πρώτα βήματα"
        text="Τα πρώτα σου βήματα προς εμένα… και εγώ έκλαιγα από χαρά."
        image="/preview/steps.jpg.JPG"
      />

      <Section
        title="Ο κόσμος σου"
        text="Η μαμά Χριστίνα, ο μπαμπάς Σπύρος, οι παππούδες και όλοι όσοι σε αγαπούν… είναι ο κόσμος σου."
        image="/preview/family.jpg.JPG"
      />

      <Section
        title="Οι παππούδες σου"
        text="Ο παππούς Παναγιώτης και η γιαγιά Άννα… αλλά και ο παππούς Κώστας και η γιαγιά Στέλλα σε λατρεύουν."
        image="/preview/grandparents.jpg.JPG"
      />

      <Section
        title="Τα πρώτα σου βήματα στον κόσμο"
        text="Η πρώτη σου κοινωνική επαφή… και ήδη κλέβεις καρδιές."
        image="/preview/social.jpg.JPG"
      />

      <Section
        title="Τα γενέθλιά σου"
        text="Έσβησες την πρώτη σου τούρτα γεμάτη χαμόγελα και αγάπη."
        image="/preview/birthday.jpg.JPG"
      />

      <Section
        title="Το σχολείο"
        text="Η πρώτη σου μέρα στο σχολείο… ένα νέο κεφάλαιο ξεκινά."
        image="/preview/school.jpg.JPG"
      />
    </div>
  );
}

function StoryPreview() {
  return (
    <div>
      <h2>Το Δάσος των Χρωμάτων</h2>

      <p>
        Όνομα: <TypeText text="Ελπίδα" />
      </p>
      <p>
        Μαλλιά: <TypeText text="Ξανθά" />
      </p>
      <p>
        Μάτια: <TypeText text="Καφέ" />
      </p>
      <p>
        Αγαπημένο: <TypeText text="Κόκκινο μπαλόνι" />
      </p>

      <p style={{ marginTop: 20 }}>
        <TypeText text="Μια μέρα η Ελπίδα έπαιζε στον κήπο της…" />
      </p>

      <p>
        <TypeText text="Ξαφνικά το μπαλόνι πέταξε μακριά…" />
      </p>

      <p>
        <TypeText text="Το ακολούθησε και βρέθηκε σε ένα μαγικό δάσος…" />
      </p>

      <p>
        <TypeText text="Εκεί γνώρισε έναν μονόκερο…" />
      </p>

      <p>
        <TypeText text="Όταν φοβήθηκε… θυμήθηκε τα λόγια της μαμάς:" />
      </p>

      <p style={{ fontStyle: "italic" }}>
        <TypeText text="Είσαι ικανή για τα πάντα…" />
      </p>
    </div>
  );
}

const styles: any = {
  page: {
    fontFamily: "serif",
    padding: 20,
    background: "#f5f2ed"
  },
  hamburger: {
    position: "fixed",
    top: 20,
    left: 20,
    fontSize: 30,
    cursor: "pointer"
  },
  sidebar: {
    position: "fixed",
    left: 0,
    top: 0,
    width: 220,
    height: "100%",
    background: "#fff",
    padding: 20
  },
  logo: {
    textAlign: "center",
    fontSize: 28,
    marginBottom: 20,
    cursor: "pointer"
  },
  switch: {
    display: "flex",
    justifyContent: "center",
    gap: 10,
    marginBottom: 20
  },
  section: {
    display: "flex",
    gap: 20,
    marginBottom: 40,
    alignItems: "center"
  },
  image: {},
  text: {},
  description: {
    textAlign: "center",
    marginBottom: 30
  }
};
