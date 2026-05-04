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
  padding: "38px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
};

const grid: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  marginTop: "26px",
};

const infoBox: CSSProperties = {
  backgroundColor: "#FBF4EE",
  borderRadius: "22px",
  padding: "22px",
  lineHeight: "1.8",
  color: "#705E55",
};

export default function CheckoutPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={250}
              height={250}
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
            Ολοκλήρωση αγοράς
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
            Πριν ξεκινήσει η δημιουργία του παραμυθιού και του Memory Box σου,
            ολοκλήρωσε πρώτα την αγορά σου.
          </p>

          <div style={grid}>
            <div style={infoBox}>
              <h2
                style={{
                  fontSize: "24px",
                  color: "#7B6256",
                  marginBottom: "14px",
                }}
              >
                Τι περιλαμβάνει
              </h2>

              <p style={{ marginBottom: "10px" }}>
                • Πρόσβαση στη δημιουργία του προσωποποιημένου Memory Box
              </p>
              <p style={{ marginBottom: "10px" }}>
                • Δημιουργία προσωποποιημένου παραμυθιού
              </p>
              <p style={{ marginBottom: "10px" }}>
                • Συμπλήρωση αναμνήσεων, κειμένων και βασικών πληροφοριών
              </p>
              <p style={{ marginBottom: "10px" }}>
                • Δυνατότητα export / download μετά την ολοκλήρωση
              </p>
              <p>
                • Προσωπική σελίδα διαθέσιμη για 30 ημέρες μετά την δημιουργία του προσωποποιημένου παραμυθιού σας
              </p>
            </div>

            <div
              style={{
                backgroundColor: "#FFF",
                borderRadius: "22px",
                padding: "26px",
                boxShadow: "0 8px 22px rgba(0,0,0,0.04)",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "#8A7F7A",
                  marginBottom: "10px",
                }}
              >
                Πακέτο
              </div>

              <h2
                style={{
                  fontSize: "28px",
                  color: "#7B6256",
                  marginBottom: "12px",
                }}
              >
                Memory Box + Παραμύθι
              </h2>

              <div
                style={{
                  fontSize: "34px",
                  fontWeight: "700",
                  color: "#5E4B42",
                  marginBottom: "18px",
                }}
              >
                29.99€
              </div>

              <p
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: "#7A6A62",
                  marginBottom: "24px",
                }}
              >
                Με την επιτυχημένη πληρωμή θα προχωρήσεις στο επόμενο βήμα,
                όπου θα δημιουργήσεις λογαριασμό και θα ξεκινήσεις να
                συμπληρώνεις τις αναμνήσεις σας.
              </p>

              <a
                href="https://buy.stripe.com/aFa6oHcIj4I2cwtcRaeZ201"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "100%",
                  display: "block",
                  textAlign: "center",
                  padding: "16px 24px",
                  borderRadius: "20px",
                  backgroundColor: "#EAD7CF",
                  color: "#5C4A42",
                  fontSize: "18px",
                  fontWeight: "600",
                  textDecoration: "none",
                  boxSizing: "border-box",
                }}
              >
                Πληρωμή 29.99€ +ΦΠΑ
              </a>

              <p
                style={{
                  marginTop: "16px",
                  fontSize: "13px",
                  color: "#8A7F7A",
                  textAlign: "center",
                  lineHeight: "1.6",
                }}
              >
                Η πληρωμή ανοίγει σε ασφαλές περιβάλλον Stripe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
