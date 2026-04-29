import Image from "next/image";
import Link from "next/link";
import { Playfair_Display } from "next/font/google";

const elegantFont = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#FFF8F5",
        color: "#6E5A50",
      }}
    >
      <nav
  style={{
    position: "fixed",
    top: "20px",
    right: "20px",
    zIndex: 50,
    backgroundColor: "rgba(255, 248, 243, 0.96)",
    borderRadius: "999px",
    padding: "10px 16px",
    boxShadow: "0 8px 22px rgba(0,0,0,0.08)",
    display: "flex",
    gap: "16px",
    alignItems: "center",
  }}
>
  <a
    href="/"
    style={{
      color: "#6B564C",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: "15px",
    }}
  >
    Αρχική
  </a>

  <a
    href="/login"
    style={{
      color: "#6B564C",
      textDecoration: "none",
      fontWeight: 600,
      fontSize: "15px",
    }}
  >
    Λογαριασμός μου
  </a>
</nav>

      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "60px 24px 80px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <Link href="/" style={{ display: "inline-block" }}>
          <Image
            src="/logo.png"
            alt="My Little Memory Box"
            width={260}
            height={260}
            style={{
              objectFit: "contain",
              cursor: "pointer",
            }}
            priority
          />
        </Link>

        <h1
          className={elegantFont.className}
          style={{
            fontSize: "48px",
            lineHeight: "1.2",
            marginTop: "20px",
            color: "#8B6F5A",
            maxWidth: "800px",
          }}
        >
          Ένα μέρος για να κρατήσεις
          <br />
          όλες τις στιγμές που δεν θέλεις να ξεχαστούν ποτέ.
        </h1>

        <p
          style={{
            marginTop: "30px",
            fontSize: "22px",
            lineHeight: "1.8",
            maxWidth: "760px",
            color: "#8A7F7A",
            fontFamily: "serif",
          }}
        >
          Δημιούργησε το δικό σου Memory Box γεμάτο φωτογραφίες, βίντεο και λόγια αγάπης
          <br />
          και χάρισε στο παιδί σου ένα προσωποποιημένο παραμύθι
          <br />
          όπου πρωταγωνιστείτε εσύ και εκείνο.
        </p>

        <div
          style={{
            marginTop: "40px",
            display: "flex",
            gap: "16px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link
            href="/checkout"
            style={{
              padding: "15px 30px",
              borderRadius: "999px",
              backgroundColor: "#DCC4B8",
              color: "#4F4039",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 600,
            }}
          >
            Δημιούργησε τη δική σου ανάμνηση
          </Link>

          <Link
            href="/preview"
            style={{
              padding: "15px 30px",
              borderRadius: "999px",
              border: "1px solid #D8C2B8",
              color: "#6E5A50",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: 500,
              backgroundColor: "transparent",
            }}
          >
            Δες πώς λειτουργεί
          </Link>
        </div>
      </section>
    </main>
  );
}
