import Image from "next/image";
import type { CSSProperties } from "react";
import { Playfair_Display } from "next/font/google";

const font = Playfair_Display({ subsets: ["latin"] });

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
          <p><strong>Όνομα:</strong> Γιώργος</p>
          <p><strong>Η πρώτη φορά που σε κράτησα:</strong> 2 Ιουνίου 2025</p>
          <p><strong>Ζύγιζες μόνο:</strong> 3,550 γρ</p>
          <p><strong>Είχες ύψος:</strong> 51 πόντους</p>
          <p><strong>Επιστρέψαμε από το μαιευτήριο:</strong> Πέντε μέρες μετά την γέννησή σου</p>
          <p><strong>Οι πρώτες σου στιγμές στο σπίτι ήταν:</strong> Ήρεμες, είχες ανάγκη την αγκαλιά της μαμάς μέχρι να προσαρμοστείς</p>
          <p><strong>Η πρώτη φορά που χαμογέλασες:</strong> Ήταν στους 2 μήνες (ξετρελαθήκαμε)</p>

          <Image
            src="https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80"
            alt=""
            width={400}
            height={250}
            style={img}
          />
        </Section>

        {/* 🌍 Ο ΚΟΣΜΟΣ ΣΟΥ */}
        <Section title="Ο κόσμος σου">
          <p><strong>Οι γονείς σου:</strong> Μαριάννα και Γιάννης</p>
          <p><strong>Οι παππούδες:</strong> Από τον μπαμπά γιαγιά Ρίτσα και παππούς Μάκης, από τη μαμά γιαγιά Μαρία και παππούς Χάρης</p>
          <p><strong>Η νονά σου:</strong> Ανδριάνα</p>
          <p><strong>Οι φίλοι που έγιναν οικογένεια:</strong> Χριστίνα, Γεωργία, Σπύρος και Ορέστης</p>

          <Image
            src="https://images.unsplash.com/photo-1544126592-807ade215a0b?auto=format&fit=crop&w=1200&q=80"
            alt=""
            width={400}
            height={250}
            style={img}
          />
        </Section>

        {/* 👶 ΑΝΑΚΑΛΥΨΕΙΣ */}
        <Section title="Οι πρώτες σου ανακαλύψεις">
          <p><strong>Το πρώτο σου δοντάκι:</strong> Στους 3 μήνες, τα δύο κάτω</p>
          <p><strong>Λάτρευες να σε νανουρίζουμε έτσι:</strong> Αγκαλίτσα και «νάνι νάνι το μωράκι μου»</p>
          <p><strong>Η πρώτη φορά που μπουσούλησες:</strong> Στους 7 μήνες</p>

          <Image
            src="https://images.unsplash.com/photo-1515488764276-beab7607c1e6?auto=format&fit=crop&w=1200&q=80"
            alt=""
            width={400}
            height={250}
            style={img}
          />
        </Section>

        {/* 👣 ΒΗΜΑΤΑ */}
        <Section title="Τα πρώτα σου βήματα">
          <p>Η πρώτη φορά που περπάτησες ήταν μια μικρή γιορτή.</p>

          <Image
            src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=80"
            alt=""
            width={400}
            height={250}
            style={img}
          />
        </Section>

        {/* 🎂 ΓΕΝΕΘΛΙΑ */}
        <Section title="Για τα γενέθλιά σου">
          <p>Σήμερα γίνεσαι 2 ετών.</p>
          <p>Έσβησες την τούρτα σου με όλους γύρω σου.</p>

          <Image
            src="https://images.unsplash.com/photo-1464349153735-7db50ed83c84?auto=format&fit=crop&w=1200&q=80"
            alt=""
            width={400}
            height={250}
            style={img}
          />
        </Section>

        {/* 🎨 ΨΗΦΙΑΚΟ ΕΞΩΦΥΛΛΟ */}
        <div style={cover}>
          <h2 className={font.className}>Το παραμύθι σου</h2>

          <Image
            src="https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80"
            alt=""
            width={250}
            height={250}
            style={{ borderRadius: 20 }}
          />

          <p>Ο Γιώργος και το Μπαλόνι που ήθελε τα σύννεφα</p>
        </div>

        {/* 📖 ΠΑΡΑΜΥΘΙ */}
        <div style={story}>
          <h2 className={font.className}>Το παραμύθι σου</h2>

          <p>
            Μια φορά κι έναν καιρό, ήταν ένα μικρό αγόρι που το έλεγαν Γιώργο.
            Από την πρώτη στιγμή που ήρθε στον κόσμο, γέμισε τα πάντα γύρω του με φως.
          </p>

          <p>
            Η μαμά του τον κρατούσε στην αγκαλιά και του τραγουδούσε:
            «Νάνι νάνι το μωράκι μου…»
          </p>

          <p>
            «Νομίζω πως αυτό είναι το αγαπημένο του τραγούδι», είπε ο μπαμπάς γελώντας.
          </p>

          <p>
            Όσο περνούσε ο καιρός, ο Γιώργος άρχισε να ανακαλύπτει τον κόσμο.
            Πρώτα ήρθε το χαμόγελο. Μετά τα δοντάκια. Και ύστερα…
          </p>

          <p>
            «Κοίτα! Μπουσουλάει!» φώναξε η μαμά.
          </p>

          <p>
            Και πράγματι. Ο Γιώργος ξεκίνησε το πρώτο του ταξίδι.
          </p>

          <p>
            Μια μέρα, είδε ένα κόκκινο μπαλόνι.
          </p>

          <p>
            «Μαμά… θέλω αυτό!» είπε.
          </p>

          <p>
            Το μπαλόνι πέταξε ψηλά και κόλλησε σε ένα δέντρο.
          </p>

          <p>
            «Θα το φτάσουμε μαζί», είπε ο μπαμπάς.
          </p>

          <p>
            Όλοι μαζεύτηκαν γύρω του. Οι γονείς, οι φίλοι, η οικογένεια.
          </p>

          <p>
            Με λίγη προσπάθεια, το μπαλόνι κατέβηκε ξανά στα χεράκια του.
          </p>

          <p>
            «Τα κατάφερες!» είπαν όλοι μαζί.
          </p>

          <p>
            Και εκείνη τη στιγμή, ο Γιώργος κατάλαβε κάτι πολύ σημαντικό:
          </p>

          <p>
            ότι κάθε περιπέτεια γίνεται πιο όμορφη όταν έχεις δίπλα σου αυτούς που σε αγαπούν.
          </p>

          <p>
            Και έτσι, το μικρό αγόρι συνέχισε το ταξίδι του…
            γεμάτο χαμόγελα, αγκαλιές και αγάπη.
          </p>
        </div>

      </div>
    </main>
  );
}

/* STYLE */

function Section({ title, children }: any) {
  return (
    <div style={card}>
      <h2 style={{ marginBottom: 10 }}>{title}</h2>
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
