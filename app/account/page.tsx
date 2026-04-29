"use client";
import Link from "next/link";

export default function AccountPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#F6EFE8",
        display: "flex",
        color: "#5E4B42",
      }}
    >
      <aside
        style={{
          width: "260px",
          backgroundColor: "#FFF8F3",
          padding: "28px 20px",
          boxShadow: "4px 0 18px rgba(0,0,0,0.04)",
        }}
      >
        <Link href="/">
          <img
            src="/logo.png"
            alt="My Little Memory Box"
            style={{
              width: "190px",
              display: "block",
              margin: "0 auto 34px",
            }}
          />
        </Link>

        <nav style={{ display: "grid", gap: "14px" }}>
          <Link href="/memory-details" style={linkStyle}>
            My Memory Box
          </Link>

          <Link href="/story-details" style={linkStyle}>
            Προσωποποιημένο παραμύθι
          </Link>

          <Link href="/" style={logoutStyle}>
            Log out
          </Link>
        </nav>
      </aside>

      <section
        style={{
          flex: 1,
          padding: "50px 28px",
        }}
      >
        <div
          style={{
            maxWidth: "760px",
            backgroundColor: "rgba(255,248,243,0.96)",
            borderRadius: "28px",
            padding: "34px 26px",
            boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
          }}
        >
          <h1 style={{ fontSize: "36px", color: "#7D6457" }}>
            Ο λογαριασμός μου
          </h1>

          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "#7A6A62" }}>
            Από εδώ μπορείς να συνεχίσεις το Memory Box σου και μετά να δημιουργήσεις
            το προσωποποιημένο παραμύθι σου.
          </p>
        </div>
      </section>
    </main>
  );
}

const linkStyle = {
  display: "block",
  padding: "14px 16px",
  borderRadius: "16px",
  backgroundColor: "#F3E8E2",
  color: "#5E4B42",
  textDecoration: "none",
  fontWeight: 700,
};

const logoutStyle = {
  display: "block",
  padding: "14px 16px",
  borderRadius: "16px",
  backgroundColor: "#E8D2C8",
  color: "#5E4B42",
  textDecoration: "none",
  fontWeight: 700,
  marginTop: "20px",
};
