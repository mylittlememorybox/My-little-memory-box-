
import Link from "next/link";
import type { CSSProperties } from "react";

const wrap: CSSProperties = {
  minHeight: "100vh",
  backgroundColor: "#F6EFE8",
  padding: "60px 24px",
  color: "#5E4B42",
};

const card: CSSProperties = {
  maxWidth: "700px",
  margin: "0 auto",
  backgroundColor: "#fff",
  padding: "32px",
  borderRadius: "20px",
};

export default function OrderPage() {
  return (
    <main style={wrap}>
      <div style={card}>
        <h1 style={{ fontSize: "32px", marginBottom: "16px" }}>
          Δημιουργία λογαριασμού
        </h1>

        <p style={{ marginBottom: "20px", lineHeight: "1.7" }}>
          Δημιούργησε τον λογαριασμό σου για να ξεκινήσει η δημιουργία του
          προσωποποιημένου παραμυθιού και του Memory Box.
        </p>

        <h3>Τι περιλαμβάνει:</h3>
        <ul style={{ marginBottom: "20px" }}>
          <li>Δημιουργία προσωποποιημένου παραμυθιού</li>
          <li>Πρόσβαση στη σελίδα σου για 30 ημέρες</li>
          <li>Δυνατότητα export/download</li>
        </ul>

        <h3>Σημαντικό:</h3>
        <p style={{ marginBottom: "20px", lineHeight: "1.7" }}>
          Η σελίδα σου θα είναι διαθέσιμη για <b>30 ημέρες</b> από τη στιγμή
          που θα ολοκληρωθεί το παραμύθι. Μετά το διάστημα αυτό θα διαγράφεται.
        </p>

        <label style={{ display: "block", marginBottom: "10px" }}>
          Email
        </label>
        <input
          type="email"
          placeholder="example@email.com"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "16px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <label style={{ display: "block", marginBottom: "10px" }}>
          Κωδικός
        </label>
        <input
          type="password"
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "16px",
            borderRadius: "10px",
            border: "1px solid #ccc",
          }}
        />

        <label style={{ display: "block", marginBottom: "16px" }}>
          <input type="checkbox" /> Συμφωνώ με την επεξεργασία των προσωπικών
          δεδομένων και τη δημιουργία του παραμυθιού.
        </label>

        <button
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: "14px",
            border: "none",
            backgroundColor: "#EAD7CF",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Δημιουργία λογαριασμού
        </button>

        <div style={{ marginTop: "20px" }}>
          <Link href="/">← Επιστροφή</Link>
        </div>
      </div>
    </main>
  );
}
