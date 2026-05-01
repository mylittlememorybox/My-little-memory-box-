import Link from "next/link";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "260px",
        minHeight: "100vh",
        backgroundColor: "#FFF8F3",
        padding: "28px 20px",
        boxShadow: "4px 0 18px rgba(0,0,0,0.04)",
        flexShrink: 0,
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
  ...linkStyle,
  backgroundColor: "#E8D2C8",
  marginTop: "20px",
};
