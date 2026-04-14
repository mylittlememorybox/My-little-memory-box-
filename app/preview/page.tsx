import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import { Playfair_Display } from "next/font/google";

const elegantFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pageWrap: CSSProperties = {
  maxWidth: "1100px",
  margin: "0 auto",
  padding: "70px 24px",
  minHeight: "100vh",
};

const card: CSSProperties = {
  backgroundColor: "rgba(255, 248, 243, 0.88)",
  borderRadius: "28px",
  padding: "32px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
};

const titleStyle: CSSProperties = {
  fontSize: "36px",
  color: "#7D6457",
  marginBottom: "24px",
};

const labelStyle: CSSProperties = {
  fontSize: "18px",
  color: "#654F45",
  marginBottom: "8px",
};

const textStyle: CSSProperties = {
  fontSize: "20px",
  lineHeight: "1.9",
  color: "#77655B",
};

const mediaBox: CSSProperties = {
  backgroundColor: "#EADFD5",
  borderRadius: "28px",
  minHeight: "260px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  color: "#9A7F71",
  fontSize: "17px",
  padding: "20px",
  boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
};

function DottedLines({
  count = 2,
  width = "100%",
}: {
  count?: number;
  width?: string;
}) {
  return (
    <div style={{ width }}>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            borderBottom: "2px dotted #A88E7F",
            marginTop: "10px",
            marginBottom: "18px",
            width: "100%",
          }}
        />
      ))}
    </div>
  );
}

function InfoLabel({
  label,
  lines = 2,
  width = "100%",
}: {
  label: string;
  lines?: number;
  width?: string;
}) {
  return (
    <div style={{ marginBottom: "22px" }}>
      <div style={labelStyle}>{label}</div>
      <DottedLines count={lines} width={width} />
    </div>
  );
}

export default function PreviewPage() {
  return (
    <main
      style={{
        backgroundColor: "#F6EFE8",
        color: "#5E4B42",
      }}
    >
      <section
        style={{
          ...pageWrap,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Link href="/" style={{ display: "inline-block" }}>
          <Image
            src="/logo.png"
            alt="My Little Memory Box"
            width={250}
            height={250}
            style={{
              objectFit: "contain",
              marginBottom: "18px",
              cursor: "pointer",
            }}
            priority
          />
        </Link>

        <h1
          className={elegantFont.className}
          style={{
            fontSize: "46px",
            lineHeight: "1.25",
            color: "#8B6F5A",
            marginBottom: "28px",
            maxWidth: "900px",
          }}
        >
          Δες πώς θα μοιάζει το δικό σου Memory Box
        </h1>

        <p
          style={{
            fontSize: "24px",
            lineHeight: "1.95",
            color: "#7A6A62",
            maxWidth: "780px",
            fontFamily: "serif",
          }}
        >
          και χάρισε στο παιδί σου ένα προσωποποιημένο παραμύθι
          <br />
          με ήρωες εσένα και εκείνο.
        </p>
      </section>

      <section style={{ ...pageWrap, display: "flex", alignItems: "center" }}>
        <div
          style={{
            ...card,
            width: "100%",
            textAlign: "center",
            padding: "60px 34px",
          }}
        >
          <h2
            className={elegantFont.className}
            style={{
              fontSize: "44px",
              color: "#7D6457",
              lineHeight: "1.35",
              marginBottom: "28px",
            }}
          >
            Για εσένα,
            <br />
            όταν μεγαλώσεις!
          </h2>

          <p
            style={{
              ...textStyle,
              fontSize: "24px",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            Αν διαβάζεις αυτό, σημαίνει ότι μεγάλωσες.
            <br />
            Και ίσως δεν θυμάσαι αυτές τις μικρές στιγμές...
            <br />
            Αλλά εγώ τις κράτησα για σένα.
          </p>
        </div>
      </section>

      <section
        style={{
          ...pageWrap,
          display: "grid",
          gridTemplateColumns: "1.2fr 0.8fr",
          gap: "32px",
          alignItems: "start",
        }}
      >
        <div style={card}>
          <h2 className={elegantFont.className} style={titleStyle}>
            Οι πρώτες σου στιγμές
          </h2>

          <InfoLabel label="Η πρώτη φορά που σε κράτησα:" lines={4} />
          <InfoLabel label="Ήσουν μια σταλίτσα..." lines={1} width="260px" />
          <InfoLabel label="Ζύγιζες μόνο:" lines={1} width="220px" />
          <InfoLabel label="Είχες ύψος:" lines={1} width="220px" />
          <InfoLabel label="Επιστρέψαμε από το μαιευτήριο:" lines={2} />
          <InfoLabel label="Οι πρώτες στιγμές σου στο σπίτι μας ήταν:" lines={3} />
          <InfoLabel label="Η πρώτη φορά που χαμογέλασες:" lines={2} />
        </div>

        <div style={{ display: "grid", gap: "24px" }}>
          <div style={mediaBox}>Φωτογραφία από τις πρώτες μέρες</div>
          <div style={mediaBox}>Φωτογραφία αγκαλιάς</div>
          <div style={mediaBox}>Φωτογραφία από το σπίτι</div>
        </div>
      </section>

      <section
        style={{
          ...pageWrap,
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: "32px",
          alignItems: "start",
        }}
      >
        <div style={card}>
          <h2 className={elegantFont.className} style={titleStyle}>
            Οι πρώτες σου ανακαλύψεις
          </h2>

          <InfoLabel
            label="Το πρώτο σου δοντάκι (και το πρώτο μου ξενύχτι):"
            lines={2}
          />
          <InfoLabel label="Λάτρευες να σε νανουρίζω έτσι:" lines={3} />
          <InfoLabel label="Η πρώτη φορά που μπουσούλησες:" lines={2} />
        </div>

        <div style={{ display: "grid", gap: "24px" }}>
          <div style={mediaBox}>Κάδρο φωτογραφίας</div>
          <div style={{ ...mediaBox, minHeight: "280px" }}>
            Βίντεο από τις πρώτες ανακαλύψεις
          </div>
        </div>
      </section>

      <section style={{ ...pageWrap, display: "flex", alignItems: "center" }}>
        <div
          style={{
            ...card,
            width: "100%",
            textAlign: "center",
            padding: "60px 34px",
          }}
        >
          <h2
            className={elegantFont.className}
            style={{
              fontSize: "42px",
              color: "#7D6457",
              lineHeight: "1.35",
              marginBottom: "28px",
            }}
          >
            Μεγαλώνεις τόσο γρήγορα...
          </h2>

          <p
            style={{
              ...textStyle,
              fontSize: "25px",
              maxWidth: "780px",
              margin: "0 auto",
            }}
          >
            και εγώ προσπαθώ να κρατήσω
            <br />
            λίγο από κάθε “πρώτη φορά”.
            <br />
            <br />
            (και λίγο από την ψυχραιμία μου 😅)
          </p>
        </div>
      </section>

      <section
        style={{
          ...pageWrap,
          display: "grid",
          gridTemplateColumns: "0.9fr 1.1fr",
          gap: "32px",
          alignItems: "stretch",
        }}
      >
        <div style={mediaBox}>
          Προεπισκόπηση
          <br />
          του προσωποποιημένου
          <br />
          παραμυθιού
        </div>

        <div style={card}>
          <h2
            className={elegantFont.className}
            style={{
              fontSize: "38px",
              color: "#86695C",
              marginBottom: "20px",
            }}
          >
            Το παραμύθι σας
          </h2>

          <p style={textStyle}>
            Μέσα από τις δικές σου αναμνήσεις, τις λέξεις σου, τα μικρά
            περιστατικά, τις τρυφερές στιγμές και τις φωτογραφίες που θα
            επιλέξεις, θα δημιουργηθεί ένα προσωποποιημένο παραμύθι
            με ήρωες εσένα και το παιδί σου.
          </p>

          <p style={{ ...textStyle, marginTop: "18px" }}>
            Δεν θα είναι ένα γενικό παραμύθι.
            Θα είναι η δική σας ιστορία,
            γραμμένη με τρυφερότητα και ύφος κατάλληλο
            για μικρό παιδί.
          </p>
        </div>
      </section>

      <section style={pageWrap}>
        <div style={card}>
          <h2
            className={elegantFont.className}
            style={{
              fontSize: "40px",
              color: "#86695C",
              marginBottom: "24px",
              textAlign: "center",
            }}
          >
            Τι θα περιλαμβάνει το Memory Box σου
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
              gap: "18px",
              marginTop: "20px",
            }}
          >
            <div style={smallCard}>
              <div style={emojiStyle}>📖</div>
              <div style={smallTitle}>Προσωποποιημένο παραμύθι</div>
              <div style={smallText}>
                Δημιουργημένο από τις δικές σου στιγμές και απαντήσεις.
              </div>
            </div>

            <div style={smallCard}>
              <div style={emojiStyle}>📸</div>
              <div style={smallTitle}>Σελίδες με φωτογραφίες</div>
              <div style={smallText}>
                Τοποθετημένες στα σωστά σημεία της ιστορίας σας.
              </div>
            </div>

            <div style={smallCard}>
              <div style={emojiStyle}>🎥</div>
              <div style={smallTitle}>Μικρά βίντεο αναμνήσεων</div>
              <div style={smallText}>
                Για να μένουν ζωντανές οι πιο αληθινές στιγμές.
              </div>
            </div>

            <div style={smallCard}>
              <div style={emojiStyle}>💛</div>
              <div style={smallTitle}>Ένα δώρο για πάντα</div>
              <div style={smallText}>
                Μια εμπειρία που θα μπορεί να μείνει στο παιδί σου.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        style={{
          minHeight: "70vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "40px 24px 100px",
        }}
      >
        <div style={{ textAlign: "center", maxWidth: "820px" }}>
          <h2
            className={elegantFont.className}
            style={{
              fontSize: "44px",
              color: "#8B6F5A",
              marginBottom: "24px",
            }}
          >
            Τώρα ξέρεις πώς θα μοιάζει
          </h2>

          <p
            style={{
              fontSize: "24px",
              lineHeight: "1.85",
              color: "#7A6A62",
              marginBottom: "36px",
            }}
          >
            Κάθε σελίδα θα γεμίσει με τις δικές σας στιγμές,
            τις φωτογραφίες σας, τις λέξεις σου
            και όλα όσα θέλεις μια μέρα να θυμάται το παιδί σου.
          </p>

          <Link
            href="/checkout"
            style={{
              display: "inline-block",
              padding: "18px 40px",
              borderRadius: "30px",
              border: "none",
              backgroundColor: "#EAD7CF",
              color: "#5C4A42",
              fontSize: "18px",
              cursor: "pointer",
              fontWeight: "600",
              textDecoration: "none",
            }}
          >
            Αγόρασέ το
          </Link>
        </div>
      </section>
    </main>
  );
}

const smallCard: CSSProperties = {
  backgroundColor: "#F7ECE3",
  borderRadius: "20px",
  padding: "22px",
  textAlign: "center",
};

const emojiStyle: CSSProperties = {
  fontSize: "30px",
  marginBottom: "12px",
};

const smallTitle: CSSProperties = {
  fontSize: "20px",
  color: "#7A5F53",
  marginBottom: "10px",
  fontWeight: "600",
};

const smallText: CSSProperties = {
  fontSize: "16px",
  color: "#7D6E67",
  lineHeight: "1.7",
};
