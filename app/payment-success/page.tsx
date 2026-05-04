"use client";

export default function PaymentSuccessPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#F6EFE8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        color: "#5E4B42",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          width: "100%",
          backgroundColor: "#FFF8F3",
          borderRadius: "28px",
          padding: "28px 22px",
          textAlign: "center",
          boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
        }}
      >
        <img
          src="/logo.png"
          alt="My Little Memory Box"
          style={{ width: "180px", maxWidth: "70vw", marginBottom: "22px" }}
        />

        <h1 style={{ color: "#7D6457", fontSize: "26px", marginBottom: "14px" }}>
          Η πληρωμή ολοκληρώθηκε ✨
        </h1>

        <p style={{ fontSize: "17px", lineHeight: "1.7", marginBottom: "24px" }}>
          Ευχαριστούμε πολύ! Τώρα μπορείς να συνεχίσεις στη δημιουργία του Memory Box και του Παραμυθιού σου.
        </p>

        <a
          href="/memory-details"
          style={{
            display: "block",
            width: "100%",
            padding: "16px",
            borderRadius: "999px",
            backgroundColor: "#DCC4B8",
            color: "#4F4039",
            fontSize: "18px",
            fontWeight: 700,
            textDecoration: "none",
            boxSizing: "border-box",
          }}
        >
          Συνέχεια στη δημιουργία
        </a>
      </div>
    </main>
  );
}
