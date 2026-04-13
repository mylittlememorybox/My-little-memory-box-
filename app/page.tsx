import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        padding: "60px",
        textAlign: "center",
        backgroundColor: "#FFF8F5",
        minHeight: "100vh",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        My Little Memory Box
      </h1>

      <p style={{ marginBottom: "30px" }}>
        Δημιούργησε τη δική σου μοναδική ανάμνηση 💛
      </p>

      <Link
        href="/create-memory"
        style={{
          display: "inline-block",
          padding: "16px 32px",
          borderRadius: "30px",
          backgroundColor: "#EAD7CF",
          color: "#5C4A42",
          textDecoration: "none",
          fontWeight: "600",
        }}
      >
        Δημιούργησε τη δική σου ανάμνηση
      </Link>
    </main>
  );
}
