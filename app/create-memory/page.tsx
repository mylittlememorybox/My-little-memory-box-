import Link from "next/link";
import Image from "next/image";
import type { CSSProperties } from "react";

const wrap: CSSProperties = {
  minHeight: "100vh",
  backgroundColor: "#F6EFE8",
  padding: "60px 20px",
  color: "#5E4B42",
};

const container: CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
};

const card: CSSProperties = {
  backgroundColor: "rgba(255,248,243,0.95)",
  borderRadius: "28px",
  padding: "36px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid #D8C5B9",
  marginBottom: "18px",
  fontSize: "16px",
};

export default function CreateMemoryPage() {
  return (
    <main style={wrap}>
      <div style={container}>
        
        {/* LOGO */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <Link href="/">
            <Image
              src="/logo.png"
              alt="logo"
              width={220}
              height={220}
              style={{ cursor: "pointer" }}
            />
          </Link>
        </div>

        <div style={card}>
          <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
            Δημιούργησε τη δική σου ανάμνηση
          </h1>

          <p style={{ textAlign: "center", marginBottom: "30px", lineHeight: "1.8" }}>
            Δημιούργησε τον λογαριασμό σου για να ξεκινήσει η εμπειρία του
            προσωποποιημένου Memory Box και του παραμυθιού σας.
          </p>

          {/* INFO */}
          <div style={{
            backgroundColor: "#F8EEE7",
            padding: "20px",
            borderRadius: "20px",
            marginBottom: "30px",
            lineHeight: "1.8"
          }}>
            <p>
              Με τη δημιουργία λογαριασμού θα μπορείς να διαχειρίζεσαι το
              παραμύθι σου, να βλέπεις την πρόοδο και να κατεβάζεις το τελικό αποτέλεσμα.
            </p>

            <p>
              Η προσωπική σου σελίδα θα παραμείνει ενεργή για <b>30 ημέρες</b> μετά
              την ολοκλήρωση του παραμυθιού, ώστε να μπορείς να κάνεις export ή download.
            </p>

            <p>
              Μετά το διάστημα αυτό, τα δεδομένα ενδέχεται να διαγραφούν.
            </p>
          </div>

          {/* FORM */}
          <input placeholder="Ονοματεπώνυμο" style={inputStyle} />
          <input placeholder="Email" style={inputStyle} />
          <input type="password" placeholder="Κωδικός" style={inputStyle} />
          <input type="password" placeholder="Επιβεβαίωση κωδικού" style={inputStyle} />
          <input placeholder="Όνομα παιδιού" style={inputStyle} />

          {/* CONSENT */}
          <div style={{ marginBottom: "20px", fontSize: "14px" }}>
            <label>
              <input type="checkbox" /> Συμφωνώ με την επεξεργασία των προσωπικών
              δεδομένων για τη δημιουργία της παραγγελίας.
            </label>
          </div>

          {/* BUTTON */}
          <button
            style={{
              width: "100%",
              padding: "16px",
              borderRadius: "20px",
              border: "none",
              backgroundColor: "#EAD7CF",
              fontSize: "16px",
              cursor: "pointer",
            }}
          >
            Συνέχεια
          </button>

          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <Link href="/">← Επιστροφή</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
