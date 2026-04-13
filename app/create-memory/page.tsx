import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";

const wrap: CSSProperties = {
  minHeight: "100vh",
  backgroundColor: "#F6EFE8",
  padding: "60px 24px",
  color: "#5E4B42",
};

const inner: CSSProperties = {
  maxWidth: "980px",
  margin: "0 auto",
};

const card: CSSProperties = {
  backgroundColor: "rgba(255, 248, 243, 0.94)",
  borderRadius: "30px",
  padding: "38px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
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
};

const labelStyle: CSSProperties = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#6B564C",
  display: "block",
};

const infoCard: CSSProperties = {
  backgroundColor: "#F8EEE7",
  borderRadius: "22px",
  padding: "22px",
  marginBottom: "28px",
  lineHeight: "1.85",
  color: "#705E55",
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
  return (
    <main style={wrap}>
      <div style={inner}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={240}
              height={240}
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
            style={{
              textAlign: "center",
              fontSize: "40px",
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

          <div style={infoCard}>
            <h2
              style={{
                fontSize: "24px",
                color: "#7B6256",
                marginBottom: "14px",
              }}
            >
              Πριν προχωρήσεις
            </h2>

            <p style={{ marginBottom: "12px" }}>
              Με τη δημιουργία λογαριασμού θα μπορείς να συμπληρώσεις τα
              στοιχεία της ιστορίας σας, να ανεβάσεις υλικό που χρειάζεται για
              τη δημιουργία του παραμυθιού και να παρακολουθείς την πορεία της
              παραγγελίας σου.
            </p>

            <p style={{ marginBottom: "12px" }}>
              Όταν ολοκληρωθεί το προσωποποιημένο παραμύθι σου, η προσωπική σου
              σελίδα θα παραμείνει ενεργή για <strong>30 ημέρες</strong>, ώστε να
              μπορείς να κάνεις export, να κατεβάσεις το υλικό σου ή να κρατήσεις
              αντίγραφο των τελικών αρχείων.
            </p>

            <p style={{ marginBottom: "12px" }}>
              Μετά το πέρας των 30 ημερών, η σελίδα αυτή μπορεί να απενεργοποιηθεί
              ή να διαγραφεί, στο πλαίσιο σωστής διαχείρισης και περιορισμένης
              αποθήκευσης προσωπικών δεδομένων.
            </p>

            <p>
              Ο λογαριασμός σου χρησιμοποιείται αποκλειστικά για τη δημιουργία,
              διαχείριση και παράδοση της παραγγελίας σου.
            </p>
          </div>

          <form style={{ maxWidth: "760px", margin: "0 auto" }}>
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
                marginBottom: "24px",
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
                  υποβάλλω για τη δημιουργία του προσωποποιημένου Memory Box
                  και του παραμυθιού μου.
                </label>
              </div>

              <div style={checkboxRow}>
                <input
                  id="consent3"
                  type="checkbox"
                  style={{ marginTop: "4px" }}
                />
                <label htmlFor="consent3" style={{ cursor: "pointer" }}>
                  Κατανοώ ότι η προσωπική μου σελίδα θα παραμείνει διαθέσιμη
                  για 30 ημέρες μετά την ολοκλήρωση του παραμυθιού, ώστε να
                  μπορώ να κάνω export ή download του υλικού μου.
                </label>
              </div>
            </div>

            <button
              type="submit"
              style={{
                width: "100%",
                padding: "16px 24px",
                borderRadius: "20px",
                border: "none",
                backgroundColor: "#EAD7CF",
                color: "#5C4A42",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Συνέχεια
            </button>

            <div
              style={{
                marginTop: "22px",
                textAlign: "center",
                fontSize: "14px",
                color: "#7A6A62",
              }}
            >
              Έχεις ήδη λογαριασμό;{" "}
              <Link href="/" style={{ color: "#7D6457" }}>
                Επιστροφή στην αρχική
              </Link>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
