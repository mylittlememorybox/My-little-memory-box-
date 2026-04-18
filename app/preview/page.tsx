import Image from "next/image";
import { CSSProperties } from "react";
import { Playfair_Display } from "next/font/google";

const font = Playfair_Display({ subsets: ["latin"] });

const babyImg = "https://images.unsplash.com/photo-1604917018610-3a3c5b3f0e0f";
const babySmile = "https://images.unsplash.com/photo-1519689680058-324335c77eba";
const babyWalk = "https://images.unsplash.com/photo-1522771930-78848d9293e8";

export default function PreviewPage() {
  return (
    <main style={page}>
      <div style={container}>

        {/* 🔝 BANNER */}
        <div style={banner}>
          Δείγμα από τις 17 ψηφιακές σελίδες του Memory Box & του παραμυθιού σας
        </div>

        {/* 🧸 ΠΡΩΤΕΣ ΣΤΙΓΜΕΣ */}
        <Section title="Οι πρώτες σου στιγμές">
          <p>Όνομα: Γιώργος</p>
          <p>Γεννήθηκες ένα ζεστό πρωινό Ιουνίου...</p>
          <Image src={babyImg} alt="" width={400} height={260} style={img}/>
        </Section>

        {/* 🌍 Ο ΚΟΣΜΟΣ ΣΟΥ */}
        <Section title="Ο κόσμος σου">
          <p>Οι γονείς σου ήταν πάντα δίπλα σου.</p>
          <p>Οι παππούδες σε καμάρωναν κάθε μέρα.</p>
        </Section>

        {/* 👣 ΠΡΩΤΑ ΒΗΜΑΤΑ */}
        <Section title="Τα πρώτα σου βήματα">
          <p>Η πρώτη φορά που περπάτησες ήταν μια μικρή γιορτή.</p>
          <Image src={babyWalk} alt="" width={400} height={260} style={img}/>
        </Section>

        {/* 🎂 ΓΕΝΕΘΛΙΑ */}
        <Section title="Για τα γενέθλιά σου">
          <p>Σήμερα γίνεσαι 2 ετών.</p>
          <p>Έσβησες την τούρτα σου με όλους γύρω σου.</p>
        </Section>

        {/* 🎨 ΨΗΦΙΑΚΟ ΕΞΩΦΥΛΛΟ */}
        <div style={cover}>
          <h2 className={font.className}>Το παραμύθι σου</h2>
          <Image src={babySmile} alt="" width={250} height={250} style={{borderRadius:20}}/>
          <p>Γιώργος ο μικρός εξερευνητής</p>
        </div>

        {/* 📖 ΠΑΡΑΜΥΘΙ */}
        <div style={story}>
          <h2 className={font.className}>Το παραμύθι σου</h2>

          <p>
            Μια φορά κι έναν καιρό, ήταν ένα μικρό αγόρι που το έλεγαν Γιώργο.
            Ο Γιώργος αγαπούσε να εξερευνά τον κόσμο γύρω του.
          </p>

          <p>
            Ένα πρωί, είδε ένα κόκκινο μπαλόνι να πετά ψηλά.
            «Μαμά, θέλω να το πιάσω!» είπε.
          </p>

          <p>
            «Πάμε μαζί», του απάντησε εκείνη χαμογελώντας.
          </p>

          <p>
            Ο μπαμπάς ήρθε κι αυτός, και όλοι μαζί ξεκίνησαν μια μικρή περιπέτεια.
          </p>

          <p>
            Το μπαλόνι ανέβηκε σε ένα δέντρο.
            Ο Γιώργος το κοίταξε και είπε:
            «Μπορώ!»
          </p>

          <p>
            Με τη βοήθεια της οικογένειάς του, το κατέβασε.
          </p>

          <p>
            «Τα κατάφερες!» είπαν όλοι μαζί.
          </p>

          <p>
            Και εκείνη τη στιγμή, ο Γιώργος κατάλαβε πως
            δεν ήταν μόνος του σε καμία περιπέτεια.
          </p>

          <p>
            Γιατί πάντα θα είχε κοντά του αυτούς που τον αγαπούν.
          </p>

          <p>
            Και έτσι, η μικρή αυτή περιπέτεια έγινε μια μεγάλη ανάμνηση.
          </p>
        </div>

      </div>
    </main>
  );
}

/* ================= STYLE ================= */

function Section({ title, children }: any) {
  return (
    <div style={card}>
      <h2 style={{marginBottom:10}}>{title}</h2>
      {children}
    </div>
  );
}

const page: CSSProperties = {
  background: "#f6eee8",
  minHeight: "100vh",
  padding: 20,
};

const container: CSSProperties = {
  maxWidth: 800,
  margin: "0 auto",
};

const banner: CSSProperties = {
  background: "#e9d7cd",
  padding: 12,
  borderRadius: 12,
  textAlign: "center",
  marginBottom: 20,
  fontWeight: 600,
};

const card: CSSProperties = {
  background: "white",
  padding: 20,
  borderRadius: 16,
  marginBottom: 16,
};

const img: CSSProperties = {
  borderRadius: 12,
  marginTop: 10,
};

const cover: CSSProperties = {
  textAlign: "center",
  background: "white",
  padding: 20,
  borderRadius: 16,
  marginBottom: 20,
};

const story: CSSProperties = {
  background: "white",
  padding: 20,
  borderRadius: 16,
  lineHeight: 1.8,
};
