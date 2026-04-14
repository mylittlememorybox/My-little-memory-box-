import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Playfair_Display } from "next/font/google";

const elegantFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pageWrap: CSSProperties = {
  minHeight: "100vh",
  background:
    "linear-gradient(180deg, #FCF6F1 0%, #F8EEE7 45%, #F5ECE4 100%)",
  padding: "28px 16px 60px",
  color: "#5E4B42",
};

const container: CSSProperties = {
  maxWidth: "1180px",
  margin: "0 auto",
};

const heroCard: CSSProperties = {
  background: "rgba(255,248,243,0.82)",
  border: "1px solid rgba(220,196,184,0.5)",
  borderRadius: "30px",
  padding: "24px 24px 20px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.04)",
  textAlign: "center",
  marginBottom: "18px",
};

const formShell: CSSProperties = {
  background: "rgba(255,248,243,0.92)",
  border: "1px solid rgba(220,196,184,0.45)",
  borderRadius: "32px",
  padding: "18px",
  boxShadow: "0 14px 36px rgba(0,0,0,0.05)",
};

const formHeader: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "14px",
  flexWrap: "wrap",
  padding: "8px 6px 16px",
};

const badge: CSSProperties = {
  display: "inline-block",
  padding: "8px 14px",
  borderRadius: "999px",
  backgroundColor: "#F1DED2",
  color: "#8A6E61",
  fontSize: "13px",
  fontWeight: 600,
};

const noteBox: CSSProperties = {
  backgroundColor: "#FBF4EE",
  borderRadius: "18px",
  padding: "14px 16px",
  color: "#77655B",
  fontSize: "14px",
  lineHeight: "1.6",
  border: "1px solid rgba(216,197,185,0.42)",
};

const iframeFrame: CSSProperties = {
  backgroundColor: "#fff",
  borderRadius: "24px",
  overflow: "hidden",
  border: "1px solid rgba(216,197,185,0.5)",
};

const footerNote: CSSProperties = {
  textAlign: "center",
  color: "#8A7F7A",
  fontSize: "13px",
  marginTop: "14px",
  lineHeight: "1.6",
};

export default function MemoryDetailsPage() {
  return (
    <main style={pageWrap}>
      <div style={container}>
        <section style={heroCard}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={200}
              height={200}
              style={{
                objectFit: "contain",
                cursor: "pointer",
                marginBottom: "6px",
              }}
              priority
            />
          </Link>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "10px",
            }}
          >
            <span style={badge}>Η δημιουργία της ανάμνησής σου</span>
            <span style={badge}>Memory Box</span>
            <span style={badge}>Παραμύθι</span>
          </div>

          <h1
            className={elegantFont.className}
            style={{
              fontSize: "38px",
              lineHeight: "1.15",
              color: "#7D6457",
              margin: "0 0 10px",
            }}
          >
            Συμπλήρωσε την ιστορία σας
          </h1>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "17px",
              lineHeight: "1.7",
              color: "#7A6A62",
            }}
          >
            Εδώ ξεκινά η πιο προσωπική πλευρά του Memory Box σου.
            Συμπλήρωσε τις στιγμές, τους ανθρώπους, τις σκέψεις και τις
            αναμνήσεις που θέλεις να γίνουν το δικό σας παραμύθι.
          </p>
        </section>

        <section style={formShell}>
          <div style={formHeader}>
            <div>
              <div
                className={elegantFont.className}
                style={{
                  fontSize: "28px",
                  color: "#7D6457",
                  marginBottom: "4px",
                }}
              >
                Η φόρμα της ιστορίας σας
              </div>

              <div
                style={{
                  color: "#87776F",
                  fontSize: "15px",
                  lineHeight: "1.6",
                }}
              >
                Συμπλήρωσε με τον δικό σου ρυθμό. Μπορείς να περάσεις
                αναμνήσεις, φωτογραφίες και στιγμές που θέλεις να μείνουν.
              </div>
            </div>

            <div style={{ minWidth: "250px", maxWidth: "350px", flex: "1 1 260px" }}>
              <div style={noteBox}>
                Το λογότυπο σε γυρίζει πάντα στην αρχική σελίδα. Μετά τη
                συμπλήρωση, τα στοιχεία σου οργανώνονται για το επόμενο στάδιο
                δημιουργίας του παραμυθιού.
              </div>
            </div>
          </div>

          <div style={iframeFrame}>
            <iframe
              src="https://forms.fillout.com/t/gs4nsBTGBGus"
              width="100%"
              height="1720"
              frameBorder="0"
              style={{
                display: "block",
                width: "100%",
                backgroundColor: "#fff",
              }}
              title="Memory Box Form"
            />
          </div>

          <div style={footerNote}>
            Αν δεν βλέπεις σωστά τη φόρμα, κάνε μια ανανέωση της σελίδας.
          </div>
        </section>
      </div>
    </main>
  );
}
