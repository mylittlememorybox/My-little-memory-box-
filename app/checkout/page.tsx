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

const box: CSSProperties = {
  backgroundColor: "#FBF4EE",
  borderRadius: "22px",
  padding: "22px",
  lineHeight: "1.8",
  color: "#705E55",
};

const stack: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "30px",
  marginTop: "30px",
};

export default function CheckoutPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        {/* LOGO */}
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={250}
              height={250}
              style={{ objectFit: "contain", cursor: "pointer" }}
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
              lineHeight: "1.8",
              color: "#7A6A62",
              marginBottom: "10px",
            }}
          >
            Πριν ξεκινήσει η δημιουργία της ανάμνησης, ολοκλήρωσε την αγορά σου 💛
          </p>

          {/* 🔥 ΕΔΩ ΜΠΑΙΝΟΥΝ ΤΑ ΚΟΥΤΙΑ ΚΑΘΕΤΑ */}
          <div style={stack}>
            
            {/* 📦 ΤΙ ΠΕΡΙΛΑΜΒΑΝΕΙ */}
            <div style={box}>
              <h2 style={{ fontSize: "24px", marginBottom: "14px" }}>
                Τι περιλαμβάνει
              </h2>

              <p>• Προσωποποιημένο Memory Box</p>
              <p>• Δημιουργία παραμυθιού</p>
              <p>• Συμπλήρωση αναμνήσεων</p>
              <p>• Download / export</p>
              <p>• Πρόσβαση για 30 ημέρες</p>
            </div>

            {/* 💰 ΚΟΥΤΑΚΙ ΤΙΜΗΣ */}
            <div
              style={{
                backgroundColor: "#FFF",
                borderRadius: "22px",
                padding: "26px",
                boxShadow: "0 8px 22px rgba(0,0,0,0.04)",
                textAlign: "center",
              }}
            >
              <h2 style={{ fontSize: "26px", marginBottom: "10px" }}>
                Memory Box + Παραμύθι
              </h2>

              <div
                style={{
                  fontSize: "40px",
                  fontWeight: "700",
                  marginBottom: "16px",
                }}
              >
                24.99€
              </div>

              <p style={{ marginBottom: "20px", color: "#7A6A62" }}>
                Ξεκίνα τώρα τη δημιουργία της δικής σου μοναδικής ανάμνησης ✨
              </p>

              <a
                href="https://buy.stripe.com/test_8x2dRa2aT4aWajM9W67g400"
                target="_blank"
                style={{
                  display: "inline-block",
                  padding: "16px 30px",
                  borderRadius: "25px",
                  backgroundColor: "#EAD7CF",
                  color: "#5C4A42",
                  fontWeight: "600",
                  textDecoration: "none",
                }}
              >
                Πληρωμή τώρα
              </a>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
