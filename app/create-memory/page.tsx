import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";
import { Playfair_Display } from "next/font/google";

const elegantFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const wrap: CSSProperties = {
  minHeight: "100vh",
  backgroundColor: "#F6EFE8",
  padding: "60px 24px",
  color: "#5E4B42",
};

const inner: CSSProperties = {
  maxWidth: "1050px",
  margin: "0 auto",
};

const card: CSSProperties = {
  backgroundColor: "rgba(255, 248, 243, 0.95)",
  borderRadius: "30px",
  padding: "40px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
};

const grid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "32px",
  marginTop: "20px",
};

const sectionCard: CSSProperties = {
  backgroundColor: "#FBF4EE",
  borderRadius: "22px",
  padding: "22px",
  lineHeight: "1.8",
  color: "#705E55",
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "14px",
  border: "1px solid #D8C5B9",
  fontSize: "16px",
  marginTop: "8px",
  marginBottom: "18px",
  backgroundColor: "#fff",
  color: "#5E4B42",
  boxSizing: "border-box",
};

const labelStyle: CSSProperties = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#6B564C",
  display: "block",
};

const checkboxRow: CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  marginBottom: "18px",
  fontSize: "15px",
  lineHeight: "1.7",
  color: "#6F5E55",
};

export default function CreateMemoryPage() {
 const [consent1, setConsent1] = useState(false)
const [consent2, setConsent2] = useState(false)
const [consent3, setConsent3] = useState(false)
const [consent4, setConsent4] = useState(false)

const allConsentsAccepted = consent1 && consent2 && consent3 && consent4
  return (
    <main style={wrap}>
      <div style={inner}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={260}
              height={260}
              style={{
                objectFit: "contain",
                cursor: "pointer",
              }}
              priority
            />
          </Link>
        </div>

        <div style={card}>
          <h1
            className={elegantFont.className}
            style={{
              textAlign: "center",
              fontSize: "42px",
              color: "#7D6457",
              marginBottom: "14px",
            }}
          >
            Δημιουργία λογαριασμού
          </h1>

          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              lineHeight: "1.85",
              color: "#7A6A62",
              maxWidth: "760px",
              margin: "0 auto 34px",
            }}
          >
            Δημιούργησε τον λογαριασμό σου για να ξεκινήσει η εμπειρία του
            προσωποποιημένου Memory Box και του παραμυθιού σας.
          </p>

          <div style={grid}>
            <div style={sectionCard}>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#7B6256",
                  marginBottom: "14px",
                }}
              >
                Πώς θα λειτουργεί ο λογαριασμός σου
              </h2>

              <p style={{ marginBottom: "12px" }}>
                Μέσα από τον λογαριασμό σου θα μπορείς να συμπληρώσεις τις
                πληροφορίες που χρειάζονται για το παραμύθι, να οργανώσεις τις
                αναμνήσεις σου και να προχωρήσεις στα επόμενα βήματα της
                παραγγελίας.
              </p>

              <p style={{ marginBottom: "12px" }}>
                Η προσωπική σου σελίδα θα παραμένει ενεργή για{" "}
                <strong>30 ημέρες</strong> μετά την ολοκλήρωση του παραμυθιού,
                ώστε να μπορείς να κάνεις export ή να κατεβάσεις το τελικό σου
                υλικό.
              </p>

              <p>
                Μετά το πέρας των 30 ημερών, η σελίδα μπορεί να απενεργοποιηθεί
                ή να διαγραφεί στο πλαίσιο ασφαλούς και περιορισμένης φύλαξης
                προσωπικών δεδομένων.
              </p>
            </div>

            <div style={sectionCard}>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#7B6256",
                  marginBottom: "14px",
                }}
              >
                Ασφάλεια και συγκατάθεση
              </h2>

              <p style={{ marginBottom: "12px" }}>
                Τα στοιχεία που υποβάλλεις χρησιμοποιούνται αποκλειστικά για τη
                δημιουργία, διαχείριση και παράδοση του προσωποποιημένου Memory
                Box και του παραμυθιού σου.
              </p>

              <p style={{ marginBottom: "12px" }}>
                Το περιεχόμενο που θα ανεβάσεις, όπως φωτογραφίες, βίντεο και
                κείμενα, θα χρησιμοποιείται μόνο για τον σκοπό της παραγγελίας
                σου και δεν θα χρησιμοποιείται για άλλον σκοπό χωρίς τη ρητή
                συγκατάθεσή σου.
              </p>

              <p>
                Πριν προχωρήσεις, χρειάζεται να αποδεχθείς τους βασικούς όρους
                ασφαλείας και επεξεργασίας δεδομένων.
              </p>
            </div>
          </div>

          <div style={{ maxWidth: "760px", margin: "34px auto 0" }}>
            <label style={labelStyle}>Ονοματεπώνυμο</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Το ονοματεπώνυμό σου"
            />

            <label style={labelStyle}>Email</label>
            <input
              type="email"
              style={inputStyle}
              placeholder="example@email.com"
            />

            <label style={labelStyle}>Κωδικός πρόσβασης</label>
            <input
              type="password"
              style={inputStyle}
              placeholder="Δημιούργησε έναν κωδικό"
            />

            <label style={labelStyle}>Επιβεβαίωση κωδικού</label>
            <input
              type="password"
              style={inputStyle}
              placeholder="Επανάλαβε τον κωδικό σου"
            />

            <label style={labelStyle}>Όνομα παιδιού</label>
            <input
              type="text"
              style={inputStyle}
              placeholder="Το όνομα του παιδιού"
            />

            <div
              style={{
                backgroundColor: "#FBF4EE",
                borderRadius: "18px",
                padding: "20px",
                marginTop: "10px",
                marginBottom: "28px",
              }}
            >
              <div style={checkboxRow}>
                <input
                  id="consent1"
                  type="checkbox"
                  style={{ marginTop: "4px" }}
                />
                <label htmlFor="consent1" style={{ cursor: "pointer" }}>
                  Συμφωνώ με τη δημιουργία λογαριασμού για τη διαχείριση της
                  παραγγελίας μου και της προσωποποιημένης εμπειρίας μου.
                </label>
              </div>

              <div style={checkboxRow}>
                <input
                  id="consent2"
                  type="checkbox"
                  style={{ marginTop: "4px" }}
                />
                <label htmlFor="consent2" style={{ cursor: "pointer" }}>
                  Συμφωνώ με την επεξεργασία των προσωπικών δεδομένων που
                  υποβάλλω για τη δημιουργία του προσωποποιημένου Memory Box και
                  του παραμυθιού μου.
                </label>
              </div>

              <div style={checkboxRow}>
                <input
                  id="consent3"
                  type="checkbox"
                  style={{ marginTop: "4px" }}
                />
                <label htmlFor="consent3" style={{ cursor: "pointer" }}>
                  Κατανοώ ότι η προσωπική μου σελίδα θα παραμείνει διαθέσιμη για
                  30 ημέρες μετά την ολοκλήρωση του παραμυθιού, ώστε να μπορώ να
                  κάνω export ή download του υλικού μου.
                </label>
              </div>

              <div style={checkboxRow}>
                <input
                  id="consent4"
                  type="checkbox"
                  style={{ marginTop: "4px" }}
                />
                <label htmlFor="consent4" style={{ cursor: "pointer" }}>
                  Δηλώνω ότι έχω το δικαίωμα να υποβάλω το περιεχόμενο που
                  ανεβάζω και ότι κατανοώ πως η χρήση του γίνεται αποκλειστικά
                  για τη δημιουργία της παραγγελίας μου.
                </label>
              </div>
            </div>
            <button
  disabled={!consent1 || !consent2 || !consent3 || !consent4}
  onClick={() => window.location.href = "/memory-details"}
  style={{
    padding: "16px 28px",
    borderRadius: "999px",
    border: "none",
    backgroundColor:
      consent1 && consent2 && consent3 && consent4
        ? "#DCC4B8"
        : "#E9DED8",
    color: "#4F4039",
    fontSize: "18px",
    fontWeight: 700,
    cursor:
      consent1 && consent2 && consent3 && consent4
        ? "pointer"
        : "not-allowed",
    opacity:
      consent1 && consent2 && consent3 && consent4 ? 1 : 0.7,
  }}
>
  Συνέχεια
</button>

            <Link
              href="/memory-details"
              style={{
                width: "100%",
                display: "block",
                textAlign: "center",
                padding: "16px 24px",
                borderRadius: "20px",
                border: "none",
                backgroundColor: "#EAD7CF",
                color: "#5C4A42",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
                textDecoration: "none",
                boxSizing: "border-box",
              }}
            >
              Δημιουργία λογαριασμού
            </Link>

            <div
              style={{
                marginTop: "22px",
                textAlign: "center",
                fontSize: "14px",
                color: "#7A6A62",
              }}
            >
              Θέλεις να επιστρέψεις;{" "}
              <Link href="/" style={{ color: "#7D6457" }}>
                Αρχική σελίδα
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
