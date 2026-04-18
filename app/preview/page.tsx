import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export default function PreviewPage() {
  return (
    <main style={page}>
      <div style={container}>

        {/* LOGO */}
        <div style={logoWrap}>
          <Link href="/">
            <img src="/logo.png" style={logo} />
          </Link>
        </div>

        {/* BANNER */}
        <div style={banner}>
          Δείγμα από τις 17 ψηφιακές σελίδες του Memory Box & του παραμυθιού σας
        </div>

        {/* SECTION */}
        <Section title="Οι πρώτες σου στιγμές">
          <div style={twoCols}>
            <div>
              <InfoLine label="Όνομα">Ελπίδα</InfoLine>
              <InfoLine label="Η πρώτη φορά που σε κράτησα">2 Ιουνίου 2025</InfoLine>
              <InfoLine label="Ζύγιζες μόνο">3,550 γρ</InfoLine>
              <InfoLine label="Είχες ύψος">51 πόντους</InfoLine>
              <InfoLine label="Επιστρέψαμε από το μαιευτήριο">
                Πέντε μέρες μετά τη γέννησή σου
              </InfoLine>
              <InfoLine label="Οι πρώτες σου στιγμές στο σπίτι ήταν">
                Ήρεμες, είχες ανάγκη την αγκαλιά της μαμάς
              </InfoLine>
              <InfoLine label="Η πρώτη φορά που χαμογέλασες">
                Στους 2 μήνες (ξετρελαθήκαμε)
              </InfoLine>
            </div>

            <Photo src="https://picsum.photos/seed/baby1/900/1200" />
          </div>
        </Section>

        <Section title="Ο κόσμος σου">
          <div style={twoCols}>
            <div>
              <InfoLine label="Οι γονείς σου">Μαριάννα & Γιάννης</InfoLine>
              <InfoLine label="Η νονά σου">Ανδριάνα</InfoLine>
              <InfoLine label="Οι φίλοι που έγιναν οικογένεια">
                Χριστίνα, Γεωργία, Σπύρος, Ορέστης
              </InfoLine>
            </div>

            <Photo src="https://picsum.photos/seed/baby2/900/1200" />
          </div>
        </Section>

        <Section title="Οι πρώτες σου ανακαλύψεις">
          <div style={twoCols}>
            <div>
              <InfoLine label="Το πρώτο σου δοντάκι">Στους 3 μήνες</InfoLine>
              <InfoLine label="Μπουσούλησες">Στους 7 μήνες</InfoLine>
              <InfoLine label="Νάνι νάνι">
                Αγκαλίτσα και τραγουδάκι
              </InfoLine>
            </div>

            <Photo src="https://picsum.photos/seed/baby3/900/1200" />
          </div>
        </Section>

        <Section title="Το παραμύθι σου">
          <p style={text}>
            Μια φορά κι έναν καιρό ήταν η μικρή Ελπίδα. Ένα κοριτσάκι με μάτια
            που έλαμπαν σαν μικρά αστέρια.
          </p>

          <p style={text}>
            «Μαμά, κοίτα!» είπε μια μέρα όταν είδε ένα ροζ μπαλόνι.
          </p>

          <p style={text}>
            Το μπαλόνι ανέβηκε ψηλά… και έτσι ξεκίνησε η πρώτη της περιπέτεια.
          </p>

          <Photo src="https://picsum.photos/seed/story/900/600" />
        </Section>

        {/* CTA */}
        <div style={ctaWrap}>
          <a href="/buy" style={cta}>
            Ξεκίνα τώρα
          </a>
        </div>

      </div>
    </main>
  );
}

/* COMPONENTS */

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div style={card}>
      <h2 style={titleStyle}>{title}</h2>
      {children}
    </div>
  );
}

function InfoLine({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p style={info}>
      <b>{label}: </b>{children}
    </p>
  );
}

function Photo({ src }: { src: string }) {
  return (
    <img
      src={src}
      style={{
        width: "100%",
        borderRadius: 12,
        marginTop: 10
      }}
    />
  );
}

/* STYLES */

const page: CSSProperties = {
  background: "#f7efe9",
  minHeight: "100vh",
  padding: 20
};

const container: CSSProperties = {
  maxWidth: 900,
  margin: "0 auto"
};

const logoWrap: CSSProperties = {
  textAlign: "center",
  marginBottom: 20
};

const logo: CSSProperties = {
  height: 120
};

const banner: CSSProperties = {
  background: "#e8d6cc",
  padding: 16,
  borderRadius: 14,
  textAlign: "center",
  marginBottom: 20,
  fontWeight: 600
};

const card: CSSProperties = {
  background: "#fff",
  padding: 20,
  borderRadius: 16,
  marginBottom: 20
};

const titleStyle: CSSProperties = {
  marginBottom: 10
};

const info: CSSProperties = {
  fontSize: 16,
  marginBottom: 8
};

const twoCols: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: 16
};

const text: CSSProperties = {
  marginBottom: 10,
  lineHeight: 1.6
};

const ctaWrap: CSSProperties = {
  textAlign: "center",
  marginTop: 30
};

const cta: CSSProperties = {
  background: "#d9b8a7",
  padding: "16px 30px",
  borderRadius: 14,
  textDecoration: "none",
  fontWeight: 700,
  color: "#5c4a43",
  display: "inline-block"
};
