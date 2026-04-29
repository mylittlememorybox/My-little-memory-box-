import Link from "next/link";

export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#F6EFE8",
        padding: "50px 20px",
        color: "#5E4B42",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          margin: "0 auto",
          backgroundColor: "rgba(255, 248, 243, 0.96)",
          borderRadius: "28px",
          padding: "32px 24px",
          boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
        }}
      >
        <Link href="/" style={{ display: "flex", justifyContent: "center" }}>
          <img
            src="/logo.png"
            alt="My Little Memory Box"
            style={{
              width: "220px",
              height: "auto",
              marginBottom: "26px",
              cursor: "pointer",
            }}
          />
        </Link>

        <h1
          style={{
            textAlign: "center",
            color: "#7D6457",
            fontSize: "34px",
            marginBottom: "12px",
          }}
        >
          Ο λογαριασμός μου
        </h1>

        <p
          style={{
            textAlign: "center",
            color: "#7A6A62",
            lineHeight: "1.7",
            marginBottom: "28px",
          }}
        >
          Συνδέσου για να δεις το προσωπικό σου Memory Box και τις αναμνήσεις σου.
        </p>

        <label style={labelStyle}>Email</label>
        <input
          type="email"
          placeholder="example@email.com"
          style={inputStyle}
        />

        <label style={labelStyle}>Κωδικός πρόσβασης</label>
        <input
          type="password"
          placeholder="Ο κωδικός σου"
          style={inputStyle}
        />

        <button
          type="button"
          style={{
            width: "100%",
            marginTop: "12px",
            padding: "16px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#DCC4B8",
            color: "#4F4039",
            fontSize: "18px",
            fontWeight: 700,
            cursor: "pointer",
          }}
        >
          Σύνδεση
        </button>

        <p
          style={{
            textAlign: "center",
            fontSize: "14px",
            color: "#7A6A62",
            marginTop: "20px",
          }}
        >
          Δεν έχεις λογαριασμό;{" "}
          <Link href="app/checkout" style={{ color: "#7D6457" }}>
            Δημιούργησε έναν
          </Link>
        </p>
      </div>
    </main>
  );
}

const labelStyle = {
  display: "block",
  marginBottom: "8px",
  fontSize: "15px",
  fontWeight: 600,
  color: "#6B564C",
};

const inputStyle = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: "14px",
  border: "1px solid #DED3CC",
  backgroundColor: "#FFFFFF",
  color: "#5E4B42",
  fontSize: "16px",
  marginBottom: "16px",
  boxSizing: "border-box" as const,
};
