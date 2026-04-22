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
  maxWidth: "900px",
  margin: "0 auto",
};

const card: CSSProperties = {
  backgroundColor: "rgba(255, 248, 243, 0.95)",
  borderRadius: "30px",
  padding: "40px 24px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
};

const section: CSSProperties = {
  backgroundColor: "#FBF4EE",
  borderRadius: "20px",
  padding: "22px",
  marginBottom: "18px",
  lineHeight: "1.85",
  color: "#6F5E55",
};

export default function OrderTermsPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={200}
              height={200}
              style={{ objectFit: "contain" }}
              priority
            />
          </Link>
        </div>

        <div style={card}>
          <h1
            className={elegantFont.className}
            style={{
              textAlign: "center",
              fontSize: "40px",
              color: "#7D6457",
              marginBottom: "16px",
            }}
          >
            Όροι για τη δημιουργία της παραγγελίας
          </h1>

          <p
            style={{
              textAlign: "center",
              fontSize: "18px",
              color: "#7A6A62",
              lineHeight: "1.8",
              maxWidth: "760px",
              margin: "0 auto 30px",
            }}
          >
            Εδώ θα βρεις αναλυτικά όλες τις πληροφορίες για τη λειτουργία του
            λογαριασμού σου, την ασφάλεια των δεδομένων σου και τη χρήση του
            υλικού που ανεβάζεις.
          </p>

          <div style={section}>
            <h2 style={{ fontSize: "24px", marginBottom: "12px", color: "#7B6256" }}>
              Πώς λειτουργεί ο λογαριασμός σου
            </h2>
            <p>
              Μέσα από τον λογαριασμό σου θα μπορείς να συμπληρώσεις τις
              πληροφορίες που χρειάζονται για το παραμύθι, να οργανώσεις τις
              αναμνήσεις σου και να προχωρήσεις στα επόμενα βήματα της
              παραγγελίας.
            </p>
            <p>
              Η προσωπική σου σελίδα θα παραμένει διαθέσιμη για 30 ημέρες μετά
              την ολοκλήρωση του προσωποποιημένου παραμυθιού, ώστε να μπορείς να
              κάνεις export ή λήψη του υλικού σου.
            </p>
          </div>

          <div style={section}>
            <h2 style={{ fontSize: "24px", marginBottom: "12px", color: "#7B6256" }}>
              Ασφάλεια και χρήση στοιχείων
            </h2>
            <p>
              Τα στοιχεία που υποβάλλεις χρησιμοποιούνται αποκλειστικά για τη
              δημιουργία, διαχείριση και παράδοση του προσωποποιημένου Memory Box
              και του παραμυθιού σου.
            </p>
            <p>
              Το περιεχόμενο που θα ανεβάσεις, όπως φωτογραφίες, βίντεο και
              κείμενα, χρησιμοποιείται μόνο για τον σκοπό της παραγγελίας σου και
              δεν χρησιμοποιείται δημόσια ή για άλλον σκοπό χωρίς τη ρητή
              συγκατάθεσή σου.
            </p>
          </div>

          <div style={section}>
            <h2 style={{ fontSize: "24px", marginBottom: "12px", color: "#7B6256" }}>
              Διατήρηση και διαγραφή δεδομένων
            </h2>
            <p>
              Οι φωτογραφίες, τα βίντεο και τα υπόλοιπα στοιχεία που υποβάλλεις
              διατηρούνται για 30 ημέρες από την ολοκλήρωση του προσωποποιημένου
              παραμυθιού.
            </p>
            <p>
              Έχεις τη δυνατότητα να ζητήσεις διαγραφή των στοιχείων σου
              οποιαδήποτε στιγμή με αίτημα στο{" "}
              <strong>info@mylittlememorybox.com</strong>.
            </p>
          </div>

          <div style={{ textAlign: "center", marginTop: "30px" }}>
            <Link
              href="/create-memory"
              style={{
                display: "inline-block",
                padding: "14px 26px",
                borderRadius: "999px",
                backgroundColor: "#EAD7CF",
                color: "#5C4A42",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "17px",
              }}
            >
              Επιστροφή στη δημιουργία λογαριασμού
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
