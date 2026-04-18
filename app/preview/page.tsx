import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";
import Image from "next/image";
import { Playfair_Display } from "next/font/google";

const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function PreviewPage() {
  return (
    <main style={page}>
      <div style={container}>
        <div style={topBar}>
          <Link href="/" style={backLink}>
            ← Επιστροφή
          </Link>
        </div>

        <div style={heroCard}>
          <div style={heroBadge}>Preview Δείγμα</div>
          <h1 className={font.className} style={heroTitle}>
            Δείγμα από τις 17 ψηφιακές σελίδες του Memory Box & του παραμυθιού σας
          </h1>
          <p style={heroText}>
            Το preview που βλέπετε είναι ένα ολοκληρωμένο ψηφιακό δείγμα με
            συμπληρωμένες σελίδες, δείγματα φωτογραφιών και εικονογραφημένο
            παραμύθι.
          </p>
        </div>

        <SectionTitle
          eyebrow="1. Δείγμα από τις σελίδες του Memory Box"
          title="Οι αναμνήσεις ενός ίδιου μωρού, σε ένα ενιαίο δείγμα"
        />

        <div style={gridTwo}>
          <PreviewCard title="Οι πρώτες σου στιγμές">
            <div style={twoColContent}>
              <div>
                <InfoLine label="Όνομα">Γιώργος</InfoLine>
                <InfoLine label="Η πρώτη φορά που σε κράτησα">
                  2 Ιουνίου 2025
                </InfoLine>
                <InfoLine label="Ζύγιζες μόνο">3,550 γρ</InfoLine>
                <InfoLine label="Είχες ύψος">51 πόντους</InfoLine>
                <InfoLine label="Επιστρέψαμε από το μαιευτήριο">
                  Πέντε μέρες μετά την γέννησή σου
                </InfoLine>
                <InfoLine label="Οι πρώτες σου στιγμές στο σπίτι ήταν">
                  Ήρεμες, είχες ανάγκη την αγκαλιά της μαμάς μέχρι να
                  προσαρμοστείς
                </InfoLine>
                <InfoLine label="Η πρώτη φορά που χαμογέλασες">
                  Ήταν στους 2 μήνες (ξετρελαθήκαμε)
                </InfoLine>
              </div>

              <div style={imageStack}>
                <LocalImage
                  src="/preview/baby-newborn.png"
                  alt="Νεογέννητο μωρό"
                  height={250}
                />
              </div>
            </div>
          </PreviewCard>

          <PreviewCard title="Ο κόσμος σου">
            <div style={infoBlock}>
              <InfoLine label="Οι γονείς σου">Μαριάννα και Γιάννης</InfoLine>
              <InfoLine label="Οι παππούδες σου">
                Από τον μπαμπά, γιαγιά Ρίτσα και παππούς Μάκης. Από τη μαμά,
                γιαγιά Μαρία και παππούς Χάρης.
              </InfoLine>
              <InfoLine label="Η νονά σου">Ανδριάνα</InfoLine>
              <InfoLine label="Οι φίλοι που έγιναν οικογένεια">
                Χριστίνα, Γεωργία, Σπύρος και Ορέστης.
              </InfoLine>
            </div>

            <div style={photoGrid3}>
              <LocalImage
                src="/preview/baby-family.png"
                alt="Μωρό με γονείς"
                height={180}
              />
              <LocalImage
                src="/preview/baby-grandparents.png"
                alt="Μωρό με παππούδες"
                height={180}
              />
              <LocalImage
                src="/preview/baby-friends.png"
                alt="Μωρό με φίλους"
                height={180}
              />
            </div>
          </PreviewCard>
        </div>

        <div style={gridTwo}>
          <PreviewCard title="Οι πρώτες σου ανακαλύψεις">
            <div style={infoBlock}>
              <InfoLine label="Το πρώτο σου δοντάκι">
                Ήταν στους τρεις μήνες, τα δύο πρώτα δοντάκια τα κάτω
              </InfoLine>
              <InfoLine label="Λάτρευες να σε νανουρίζουμε έτσι">
                Αγκαλίτσα και να σου τραγουδάω «νάνι νάνι το μωράκι μου»
              </InfoLine>
              <InfoLine label="Η πρώτη φορά που μπουσούλησες">
                Ήταν γύρω στους 7 μήνες, ξαφνικά
              </InfoLine>
            </div>

            <div style={photoGrid2}>
              <LocalImage
                src="/preview/baby-smile.png"
                alt="Το πρώτο χαμόγελο"
                height={210}
              />
              <LocalImage
                src="/preview/baby-crawl.png"
                alt="Το πρώτο μπουσούλημα"
                height={210}
              />
            </div>
          </PreviewCard>

          <PreviewCard title="Τα πρώτα σου βήματα & τα γενέθλιά σου">
            <div style={infoBlock}>
              <InfoLine label="Μια μικρή νίκη που θυμόμαστε">
                Η πρώτη φορά που στάθηκες μόνος σου μάς φάνηκε σαν θαύμα.
              </InfoLine>
              <InfoLine label="Σήμερα γίνεσαι">2 ετών</InfoLine>
              <InfoLine label="Η ευχή μας για σένα">
                Να μεγαλώνεις με υγεία, χαρά, τρυφερότητα και φως.
              </InfoLine>
            </div>

            <div style={photoGrid2}>
              <LocalImage
                src="/preview/baby-steps.png"
                alt="Πρώτα βήματα"
                height={220}
              />
              <LocalImage
                src="/preview/baby-birthday.png"
                alt="Γενέθλια"
                height={220}
              />
            </div>
          </PreviewCard>
        </div>

        <SectionTitle
          eyebrow="2. Δείγμα από το ηλεκτρονικό παραμύθι σας"
          title="Εικονογραφημένο ψηφιακό παραμύθι με πρωταγωνιστή το παιδί"
        />

        <div style={digitalNote}>
          Το παρακάτω είναι δείγμα από το τελικό ηλεκτρονικό παραμύθι.
        </div>

        <div style={storyCoverCard}>
          <div style={storyCoverText}>
            <div style={storyTag}>Ψηφιακό εξώφυλλο παραμυθιού</div>
            <h2 className={font.className} style={storyCoverTitle}>
              Ο Γιώργος και το Μπαλόνι που Ήθελε τα Σύννεφα
            </h2>
            <p style={storyCoverParagraph}>
              Ένα εικονογραφημένο ψηφιακό παραμύθι με πρωταγωνιστή τον μικρό
              Γιώργο.
            </p>
          </div>

          <div style={storyCoverImageWrap}>
            <LocalImage
              src="/preview/story-cover-pixar.png"
              alt="Ψηφιακό εξώφυλλο παραμυθιού"
              height={420}
            />
          </div>
        </div>

        <div style={storyPage}>
          <div style={storyPageImage}>
            <LocalImage
              src="/preview/story-page-1-pixar.png"
              alt="Πρώτη σελίδα παραμυθιού"
              height={360}
            />
          </div>

          <div style={storyPageText}>
            <h3 className={font.className} style={storyPageTitle}>
              Σελίδα 1
            </h3>
            <p style={storyParagraph}>
              Ο Γιώργος ήταν ένα μικρό αγόρι με μεγάλα φωτεινά μάτια και μια
              καρδιά γεμάτη απορίες. Από τότε που ήρθε στον κόσμο, όλοι έλεγαν
              πως έφερε μαζί του μια γλυκιά ησυχία.
            </p>
            <p style={storyParagraph}>
              Στην αρχή, ο Γιώργος αγαπούσε πιο πολύ απ’ όλα την αγκαλιά της
              μαμάς του.
            </p>
          </div>
        </div>

        <div style={storyPage}>
          <div style={storyPageText}>
            <h3 className={font.className} style={storyPageTitle}>
              Σελίδα 2
            </h3>
            <p style={storyParagraph}>
              Όταν ο Γιώργος ήταν δύο μηνών, χάρισε το πρώτο του χαμόγελο.
            </p>
            <p style={storyParagraph}>
              Από εκείνη τη μέρα, ο μικρός ήρωας του σπιτιού άρχισε να
              ανακαλύπτει τον κόσμο του.
            </p>
          </div>

          <div style={storyPageImage}>
            <LocalImage
              src="/preview/story-page-2-pixar.png"
              alt="Δεύτερη σελίδα παραμυθιού"
              height={360}
            />
          </div>
        </div>

        <div style={storyPage}>
          <div style={storyPageImage}>
            <LocalImage
              src="/preview/story-page-3-pixar.png"
              alt="Τρίτη σελίδα παραμυθιού"
              height={360}
            />
          </div>

          <div style={storyPageText}>
            <h3 className={font.className} style={storyPageTitle}>
              Σελίδα 3
            </h3>
            <p style={storyParagraph}>
              Ένα απόγευμα, ο Γιώργος βρήκε ένα κόκκινο μπαλόνι δίπλα στο
              παράθυρο. Και έτσι άρχισε μια μικρή, χαρούμενη περιπέτεια.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function SectionTitle({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div style={sectionTitleWrap}>
      <div style={eyebrowStyle}>{eyebrow}</div>
      <h2 className={font.className} style={sectionMainTitle}>
        {title}
      </h2>
    </div>
  );
}

function PreviewCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section style={card}>
      <h3 className={font.className} style={cardTitle}>
        {title}
      </h3>
      {children}
    </section>
  );
}

function InfoLine({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <p style={infoLine}>
      <span style={infoLabel}>{label}: </span>
      <span>{children}</span>
    </p>
  );
}

function LocalImage({
  src,
  alt,
  height,
}: {
  src: string;
  alt: string;
  height: number;
}) {
  return (
    <div style={{ ...imageFrame, height }}>
      <Image
        src={src}
        alt={alt}
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

const page: CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #FCF6F1 0%, #F7EEE7 46%, #F5ECE4 100%)",
  padding: "32px 16px 80px",
  color: "#5E4B42",
};

const container: CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
};

const topBar: CSSProperties = {
  display: "flex",
  justifyContent: "flex-start",
  marginBottom: "18px",
};

const backLink: CSSProperties = {
  textDecoration: "none",
  color: "#7A6257",
  fontWeight: 600,
  backgroundColor: "rgba(255,255,255,0.85)",
  padding: "10px 14px",
  borderRadius: "12px",
  border: "1px solid rgba(216,197,185,0.35)",
};

const heroCard: CSSProperties = {
  backgroundColor: "#EFE0D7",
  borderRadius: "28px",
  padding: "26px",
  boxShadow: "0 12px 34px rgba(0,0,0,0.05)",
  border: "1px solid rgba(216,197,185,0.35)",
  marginBottom: "26px",
  textAlign: "center",
};

const heroBadge: CSSProperties = {
  display: "inline-block",
  padding: "8px 14px",
  borderRadius: "999px",
  backgroundColor: "#E5D0C4",
  color: "#7B5F52",
  fontSize: "13px",
  fontWeight: 700,
  marginBottom: "12px",
};

const heroTitle: CSSProperties = {
  fontSize: "40px",
  lineHeight: 1.15,
  color: "#6F5A50",
  margin: "0 0 12px",
};

const heroText: CSSProperties = {
  maxWidth: "860px",
  margin: "0 auto",
  fontSize: "17px",
  lineHeight: "1.75",
  color: "#6B5A53",
};

const sectionTitleWrap: CSSProperties = {
  margin: "28px 0 18px",
};

const eyebrowStyle: CSSProperties = {
  color: "#8E6E60",
  fontSize: "14px",
  fontWeight: 700,
  marginBottom: "8px",
};

const sectionMainTitle: CSSProperties = {
  fontSize: "30px",
  lineHeight: 1.2,
  color: "#6F5A50",
  margin: 0,
};

const gridTwo: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "18px",
  marginBottom: "18px",
};

const card: CSSProperties = {
  backgroundColor: "#FFFDFB",
  borderRadius: "26px",
  padding: "22px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
  border: "1px solid rgba(216,197,185,0.35)",
  color: "#5E4B42",
};

const cardTitle: CSSProperties = {
  fontSize: "28px",
  color: "#7D6457",
  margin: "0 0 16px",
};

const twoColContent: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1.15fr 0.85fr",
  gap: "16px",
};

const imageStack: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const infoBlock: CSSProperties = {
  marginBottom: "14px",
};

const infoLine: CSSProperties = {
  fontSize: "16px",
  lineHeight: "1.7",
  margin: "0 0 10px",
  color: "#645148",
};

const infoLabel: CSSProperties = {
  fontWeight: 700,
  color: "#7B5E52",
};

const photoGrid3: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
};

const photoGrid2: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "12px",
};

const imageFrame: CSSProperties = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  borderRadius: "18px",
  border: "1px solid rgba(216,197,185,0.35)",
  boxShadow: "0 8px 22px rgba(0,0,0,0.06)",
  backgroundColor: "#fff",
};

const digitalNote: CSSProperties = {
  backgroundColor: "#FFF8F4",
  border: "1px dashed #D8C5B9",
  borderRadius: "18px",
  padding: "16px 18px",
  marginBottom: "18px",
  lineHeight: "1.7",
  color: "#6E5A51",
};

const storyCoverCard: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 0.95fr",
  gap: "20px",
  backgroundColor: "#FFFDFB",
  borderRadius: "26px",
  padding: "22px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
  border: "1px solid rgba(216,197,185,0.35)",
  marginBottom: "18px",
  alignItems: "center",
};

const storyCoverText: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const storyTag: CSSProperties = {
  display: "inline-block",
  width: "fit-content",
  padding: "7px 12px",
  borderRadius: "999px",
  backgroundColor: "#F3E2D7",
  color: "#8B6F5A",
  fontSize: "13px",
  fontWeight: 700,
};

const storyCoverTitle: CSSProperties = {
  margin: 0,
  fontSize: "34px",
  lineHeight: 1.15,
  color: "#6F5A50",
};

const storyCoverParagraph: CSSProperties = {
  margin: 0,
  fontSize: "17px",
  lineHeight: "1.8",
  color: "#76665F",
};

const storyCoverImageWrap: CSSProperties = {
  width: "100%",
};

const storyPage: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "0.9fr 1.1fr",
  gap: "20px",
  backgroundColor: "#FFFDFB",
  borderRadius: "26px",
  padding: "22px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
  border: "1px solid rgba(216,197,185,0.35)",
  marginBottom: "18px",
  alignItems: "start",
  color: "#5E4B42",
};

const storyPageImage: CSSProperties = {
  width: "100%",
};

const storyPageText: CSSProperties = {
  width: "100%",
};

const storyPageTitle: CSSProperties = {
  margin: "0 0 14px",
  fontSize: "26px",
  color: "#7B6256",
};

const storyParagraph: CSSProperties = {
  margin: "0 0 12px",
  fontSize: "17px",
  lineHeight: "1.85",
  color: "#5F4D45",
};
  color: "#8E6E60",
  fontSize: "14px",
  fontWeight: 700,
  marginBottom: "8px",
};

const sectionMainTitle: CSSProperties = {
  fontSize: "30px",
  lineHeight: 1.2,
  color: "#6F5A50",
  margin: 0,
};

const gridTwo: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
  gap: "18px",
  marginBottom: "18px",
};

const card: CSSProperties = {
  backgroundColor: "#FFFDFB",
  borderRadius: "26px",
  padding: "22px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
  border: "1px solid rgba(216,197,185,0.35)",
  color: "#5E4B42",
};

const cardTitle: CSSProperties = {
  fontSize: "28px",
  color: "#7D6457",
  margin: "0 0 16px",
};

const twoColContent: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1.15fr 0.85fr",
  gap: "16px",
};

const imageStack: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
};

const infoBlock: CSSProperties = {
  marginBottom: "14px",
};

const infoLine: CSSProperties = {
  fontSize: "16px",
  lineHeight: "1.7",
  margin: "0 0 10px",
  color: "#645148",
};

const infoLabel: CSSProperties = {
  fontWeight: 700,
  color: "#7B5E52",
};

const photoGrid3: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "12px",
};

const photoGrid2: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "12px",
};

const imageFrame: CSSProperties = {
  width: "100%",
  overflow: "hidden",
  borderRadius: "18px",
  border: "1px solid rgba(216,197,185,0.35)",
  boxShadow: "0 8px 22px rgba(0,0,0,0.06)",
  backgroundColor: "#fff",
};

const rawImage: CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  display: "block",
};

const digitalNote: CSSProperties = {
  backgroundColor: "#FFF8F4",
  border: "1px dashed #D8C5B9",
  borderRadius: "18px",
  padding: "16px 18px",
  marginBottom: "18px",
  lineHeight: "1.7",
  color: "#6E5A51",
};

const storyCoverCard: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 0.95fr",
  gap: "20px",
  backgroundColor: "#FFFDFB",
  borderRadius: "26px",
  padding: "22px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
  border: "1px solid rgba(216,197,185,0.35)",
  marginBottom: "18px",
  alignItems: "center",
};

const storyCoverText: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "10px",
};

const storyTag: CSSProperties = {
  display: "inline-block",
  width: "fit-content",
  padding: "7px 12px",
  borderRadius: "999px",
  backgroundColor: "#F3E2D7",
  color: "#8B6F5A",
  fontSize: "13px",
  fontWeight: 700,
};

const storyCoverTitle: CSSProperties = {
  margin: 0,
  fontSize: "34px",
  lineHeight: 1.15,
  color: "#6F5A50",
};

const storyCoverParagraph: CSSProperties = {
  margin: 0,
  fontSize: "17px",
  lineHeight: "1.8",
  color: "#76665F",
};

const storyCoverImageWrap: CSSProperties = {
  width: "100%",
};

const storyPage: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "0.9fr 1.1fr",
  gap: "20px",
  backgroundColor: "#FFFDFB",
  borderRadius: "26px",
  padding: "22px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
  border: "1px solid rgba(216,197,185,0.35)",
  marginBottom: "18px",
  alignItems: "start",
  color: "#5E4B42",
};

const storyPageImage: CSSProperties = {
  width: "100%",
};

const storyPageText: CSSProperties = {
  width: "100%",
};

const storyPageTitle: CSSProperties = {
  margin: "0 0 14px",
  fontSize: "26px",
  color: "#7B6256",
};

const storyParagraph: CSSProperties = {
  margin: "0 0 12px",
  fontSize: "17px",
  lineHeight: "1.85",
  color: "#5F4D45",
};

const closingCard: CSSProperties = {
  backgroundColor: "#FFFDFB",
  borderRadius: "26px",
  padding: "24px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
  border: "1px solid rgba(216,197,185,0.35)",
  textAlign: "center",
};

const closingTitle: CSSProperties = {
  margin: "0 0 10px",
  fontSize: "28px",
  color: "#7D6457",
};

const closingText: CSSProperties = {
  margin: 0,
  fontSize: "17px",
  lineHeight: "1.8",
  color: "#74645D",
};
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
