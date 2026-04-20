import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export default function PreviewPage() {
  return (
    <main style={page}>
      <div style={container}>
        <div style={logoWrap}>
          <Link href="/" style={logoLink}>
            <img src="/logo.png" alt="My Little Memory Box" style={logo} />
          </Link>
        </div>

        <div style={banner}>
          Δείγμα από τις 17 ψηφιακές σελίδες του Memory Box & του παραμυθιού σας
        </div>

        <Section title="Οι πρώτες σου στιγμές">
          <TwoCols
            left={
              <>
                <InfoLine label="Όνομα">Ελπίδα</InfoLine>
                <InfoLine label="Η πρώτη φορά που σε κράτησα">
                  2 Ιουνίου 2025
                </InfoLine>
                <InfoLine label="Ζύγιζες μόνο">3,550 γρ</InfoLine>
                <InfoLine label="Είχες ύψος">51 πόντους</InfoLine>
                <InfoLine label="Επιστρέψαμε από το μαιευτήριο">
                  Πέντε μέρες μετά τη γέννησή σου
                </InfoLine>
                <InfoLine label="Οι πρώτες σου στιγμές στο σπίτι ήταν">
                  Ήρεμες, είχες ανάγκη την αγκαλιά της μαμάς μέχρι να προσαρμοστείς
                </InfoLine>
                <InfoLine label="Η πρώτη φορά που χαμογέλασες">
                  Ήταν στους 2 μήνες (ξετρελαθήκαμε)
                </InfoLine>
              </>
            }
            right={<Photo src="/preview/newborn.jpg.JPG?v=5" alt="Νεογέννητο" height={320} />}
          />
        </Section>

        <Section title="Οι πρώτες σου ανακαλύψεις">
          <TwoCols
            left={
              <>
                <InfoLine label="Το πρώτο σου δοντάκι">
                  Ήταν στους 3 μήνες
                </InfoLine>
                <InfoLine label="Η πρώτη φορά που μπουσούλησες">
                  Ήταν γύρω στους 7 μήνες
                </InfoLine>
              </>
            }
            right={
              <Stack>
                <Photo src="/preview/smile.jpg.JPG?v=5" alt="Χαμόγελο" height={150} />
                <Photo src="/preview/crown.jpg.JPG?v=5" alt="Μπουσούλημα" height={150} />
              </Stack>
            }
          />
        </Section>

        <Section title="Τα πρώτα σου βήματα προς τον κόσμο">
          <TwoCols
            left={
              <>
                <InfoLine label="Η πρώτη φορά που έπαιξες με άλλα παιδάκια">
                  Με ενθουσιασμό και περιέργεια
                </InfoLine>
              </>
            }
            right={
              <Photo src="/preview/social.jpg.jpg?v=5" alt="Παιχνίδι με παιδάκια" height={320} />
            }
          />
        </Section>

        <Section title="Το παραμύθι σου">
          <div style={storybookIntro}>
            <div style={storybookBadge}>
              Δείγμα από το ηλεκτρονικό παραμύθι σας
            </div>
            <h3 style={storybookTitle}>
              Η Ελπίδα και το κόκκινο μπαλόνι
            </h3>
          </div>

          <StoryBlock
            src="/preview/story1.jpg.PNG?v=5"
            text="Μια φορά κι έναν καιρό..."
          />
          <StoryBlock
            src="/preview/story2.jpg.PNG?v=5"
            text="Ένα πρωί..."
          />
        </Section>

        <div style={ctaWrap}>
          <a href="/buy" style={cta}>
            Δημιούργησε το δικό σου Memory Box
          </a>
        </div>
      </div>
    </main>
  );
}

/* COMPONENTS */
function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={card}>
      <h2 style={sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function InfoLine({ label, children }: { label: string; children: ReactNode }) {
  return (
    <p style={infoLine}>
      <strong>{label}: </strong>
      {children}
    </p>
  );
}

function TwoCols({ left, right }: { left: ReactNode; right: ReactNode }) {
  return <div style={twoCols}><div>{left}</div><div>{right}</div></div>;
}

function Stack({ children }: { children: ReactNode }) {
  return <div style={stack}>{children}</div>;
}

function StoryBlock({ src, text }: { src: string; text: string }) {
  return (
    <div style={storyPage}>
      <Photo src={src} alt="Σελίδα παραμυθιού" height={220} />
      <p style={storyText}>{text}</p>
    </div>
  );
}

function Photo({ src, alt, height }: { src: string; alt: string; height: number }) {
  return (
    <div style={{ ...imageWrap, height }}>
      <img src={src} alt={alt} style={imgStyle} />
    </div>
  );
}

/* STYLES */
const page: CSSProperties = {
  minHeight: "100vh",
  background: "#f7efe9",
  padding: "20px",
  color: "#5c4a43",
  fontFamily: "Arial, sans-serif",
};

const container: CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
};

const logoWrap: CSSProperties = {
  textAlign: "center",
  marginBottom: "18px",
};

const logoLink: CSSProperties = {
  display: "inline-block",
};

const logo: CSSProperties = {
  height: "140px",
};

const banner: CSSProperties = {
  background: "#e8d6cc",
  padding: "18px",
  borderRadius: "18px",
  textAlign: "center",
  marginBottom: "20px",
  fontWeight: 700,
};

const card: CSSProperties = {
  background: "#fff",
  padding: "22px",
  borderRadius: "20px",
  marginBottom: "20px",
};

const sectionTitle: CSSProperties = {
  fontSize: "26px",
};

const infoLine: CSSProperties = {
  fontSize: "20px",
};

const twoCols: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "16px",
};

const stack: CSSProperties = {
  display: "grid",
  gap: "10px",
};

const imageWrap: CSSProperties = {
  borderRadius: "16px",
  overflow: "hidden",
};

const imgStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const storybookIntro: CSSProperties = {
  marginBottom: "12px",
};

const storybookBadge: CSSProperties = {
  fontSize: "14px",
};

const storybookTitle: CSSProperties = {
  fontSize: "28px",
};

const storyPage: CSSProperties = {
  marginTop: "14px",
};

const storyText: CSSProperties = {
  fontSize: "18px",
};

const ctaWrap: CSSProperties = {
  textAlign: "center",
  marginTop: "30px",
};

const cta: CSSProperties = {
  background: "#d9b8a7",
  padding: "16px 28px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: 700,
};
