"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, type CSSProperties } from "react";
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
  lineHeight: "1.8",
  color: "#6F5E55",
};

export default function CreateMemoryPage() {
  const [consent1, setConsent1] = useState(false);
  const [consent2, setConsent2] = useState(false);
  const [consent3, setConsent3] = useState(false);
  const [consent4, setConsent4] = useState(false);

  const allConsentsAccepted =
    consent1 && consent2 && consent3 && consent4;

  return (
    <main style={wrap}>
      <div style={inner}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={220}
              height={220}
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
            Δημιούργησε τον λογαριασμό σου και χάρισε στο παιδί σου το δικό του
            προσωπικό Memory Box και ένα μοναδικό, προσωποποιημένο παραμύθι.
          </p>

          <div
            style={{
              backgroundColor: "#FBF4EE",
              borderRadius: "22px",
              padding: "24px",
              marginBottom: "30px",
            }}
          >
            <h2
              style={{
                fontSize: "24px",
                color: "#7B6256",
                marginBottom: "12px",
              }}
            >
              Πριν συνεχίσεις
            </h2>

            <p
              style={{
                fontSize: "15px",
                color: "#7B6A61",
                marginBottom: "20px",
                lineHeight: "1.7",
              }}
            >
              Για να ολοκληρωθεί σωστά η δημιουργία του παραμυθιού και του
              προσωπικού σου Memory Box, χρειάζεται να επιβεβαιώσεις τα παρακάτω:
            </p>

            <div style={checkboxRow}>
              <input
                id="consent1"
                type="checkbox"
                checked={consent1}
                onChange={(e) => setConsent1(e.target.checked)}
                style={{ marginTop: "4px", width: "18px", height: "18px" }}
              />
              <label htmlFor="consent1" style={{ cursor: "pointer" }}>
                Δηλώνω ότι είμαι ο νόμιμος κηδεμόνας του παιδιού και έχω το
                δικαίωμα να υποβάλω τα στοιχεία, τις φωτογραφίες και τα βίντεο
                που το αφορούν.
              </label>
            </div>

            <div style={checkboxRow}>
              <input
                id="consent2"
                type="checkbox"
                checked={consent2}
                onChange={(e) => setConsent2(e.target.checked)}
                style={{ marginTop: "4px", width: "18px", height: "18px" }}
              />
              <label htmlFor="consent2" style={{ cursor: "pointer" }}>
                Συναινώ στη χρήση των φωτογραφιών, των βίντεο και των στοιχείων
                που υποβάλλω αποκλειστικά για τη δημιουργία του προσωποποιημένου
                παραμυθιού και του Memory Box.
              </label>
            </div>

            <div style={checkboxRow}>
              <input
                id="consent3"
                type="checkbox"
                checked={consent3}
                onChange={(e) => setConsent3(e.target.checked)}
                style={{ marginTop: "4px", width: "18px", height: "18px" }}
              />
              <label htmlFor="consent3" style={{ cursor: "pointer" }}>
                Κατανοώ ότι οι φωτογραφίες, τα βίντεο και τα υπόλοιπα στοιχεία
                θα διατηρούνται για 30 ημέρες από την ολοκλήρωση του
                προσωποποιημένου παραμυθιού.
              </label>
            </div>

            <div style={checkboxRow}>
              <input
                id="consent4"
                type="checkbox"
                checked={consent4}
                onChange={(e) => setConsent4(e.target.checked)}
                style={{ marginTop: "4px", width: "18px", height: "18px" }}
              />
              <label htmlFor="consent4" style={{ cursor: "pointer" }}>
                Δηλώνω ότι έχω το δικαίωμα να ανεβάζω το περιεχόμενο και ότι
                κατανοώ τους{" "}
                <Link
                  href="/order-terms"
                  style={{
                    color: "#A06F58",
                    textDecoration: "underline",
                    fontWeight: 600,
                  }}
                >
                  όρους για τη δημιουργία της παραγγελίας
                </Link>
                .
              </label>
            </div>
          </div>

          <div style={{ maxWidth: "760px", margin: "0 auto" }}>
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

            <button
              type="button"
              disabled={!allConsentsAccepted}
              onClick={() => {
                if (allConsentsAccepted) {
                  window.location.href = "/story-details";
                }
              }}
              style={{
                width: "100%",
                padding: "16px 28px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: allConsentsAccepted ? "#DCC4B8" : "#E9DED8",
                color: "#4F4039",
                fontSize: "18px",
                fontWeight: 700,
                cursor: allConsentsAccepted ? "pointer" : "not-allowed",
                opacity: allConsentsAccepted ? 1 : 0.7,
                boxSizing: "border-box",
                marginTop: "10px",
              }}
            >
              Δημιουργία λογαριασμού
            </button>

            {!allConsentsAccepted && (
              <p
                style={{
                  marginTop: "12px",
                  textAlign: "center",
                  fontSize: "14px",
                  color: "#8B6F63",
                }}
              >
                Για να συνεχίσεις, χρειάζεται να αποδεχτείς όλα τα παραπάνω.
              </p>
            )}

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
