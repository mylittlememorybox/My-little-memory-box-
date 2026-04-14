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
  maxWidth: "1050px",
  margin: "0 auto",
};

const card: CSSProperties = {
  backgroundColor: "rgba(255, 248, 243, 0.95)",
  borderRadius: "30px",
  padding: "38px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
  marginBottom: "26px",
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

const textareaStyle: CSSProperties = {
  ...inputStyle,
  minHeight: "120px",
  resize: "vertical",
};

const labelStyle: CSSProperties = {
  fontSize: "16px",
  fontWeight: 600,
  color: "#6B564C",
  display: "block",
};

export default function MemoryDetailsPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        <div style={{ textAlign: "center", marginBottom: "28px" }}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={240}
              height={240}
              style={{
                objectFit: "contain",
                cursor: "pointer",
              }}
              priority
            />
          </Link>
        </div>

        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <h1
            className={elegantFont.className}
            style={{
              fontSize: "42px",
              color: "#7D6457",
              marginBottom: "12px",
            }}
          >
            Η δημιουργία της ανάμνησής σου
          </h1>

          <p
            style={{
              fontSize: "18px",
              lineHeight: "1.85",
              color: "#7A6A62",
              maxWidth: "760px",
              margin: "0 auto",
            }}
          >
            Συμπλήρωσε τις πιο σημαντικές στιγμές σας, για να δημιουργηθεί
            ένα προσωποποιημένο παραμύθι γεμάτο αλήθεια, αγάπη και αναμνήσεις.
          </p>
        </div>

        <form>
          <div style={card}>
            <h2
              className={elegantFont.className}
              style={{ fontSize: "34px", color: "#7D6457", marginBottom: "20px" }}
            >
              Οι πρώτες σου στιγμές
            </h2>

            <label style={labelStyle}>Η πρώτη φορά που σε κράτησα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Ήσουν μια σταλίτσα...</label>
            <input type="text" style={inputStyle} />

            <label style={labelStyle}>Ζύγιζες μόνο</label>
            <input type="text" style={inputStyle} />

            <label style={labelStyle}>Είχες ύψος</label>
            <input type="text" style={inputStyle} />

            <label style={labelStyle}>Επιστρέψαμε από το μαιευτήριο</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Οι πρώτες στιγμές σου στο σπίτι μας ήταν</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η πρώτη φορά που χαμογέλασες</label>
            <textarea style={textareaStyle} />
          </div>

          <div style={card}>
            <h2
              className={elegantFont.className}
              style={{ fontSize: "34px", color: "#7D6457", marginBottom: "20px" }}
            >
              Οι πρώτες σου ανακαλύψεις
            </h2>

            <label style={labelStyle}>Το πρώτο σου δοντάκι (και το πρώτο μου ξενύχτι)</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Λάτρευες να σε νανουρίζω έτσι</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η πρώτη φορά που μπουσούλησες</label>
            <textarea style={textareaStyle} />
          </div>

          <div style={card}>
            <h2
              className={elegantFont.className}
              style={{ fontSize: "34px", color: "#7D6457", marginBottom: "20px" }}
            >
              Τα πρώτα σου βήματα
            </h2>

            <label style={labelStyle}>Η πρώτη φορά που σηκώθηκες όρθιο</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η πρώτη σου τούμπα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η πρώτη φορά που έτρεξες προς το μέρος μου</label>
            <textarea style={textareaStyle} />
          </div>

          <div style={card}>
            <h2
              className={elegantFont.className}
              style={{ fontSize: "34px", color: "#7D6457", marginBottom: "20px" }}
            >
              Οι μέρες που δεν ήταν εύκολες
            </h2>

            <label style={labelStyle}>Μια μέρα που ένιωσα ότι δεν τα κατάφερνα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Μια στιγμή που λύγισα (αλλά δεν το έδειξα)</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Κάτι που με δυσκόλεψε περισσότερο απ’ όσο περίμενα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Και παρ’ όλα αυτά... συνέχισα γιατί</label>
            <textarea style={textareaStyle} />
          </div>

          <div style={card}>
            <h2
              className={elegantFont.className}
              style={{ fontSize: "34px", color: "#7D6457", marginBottom: "20px" }}
            >
              Οι στιγμές που με έκανες να νιώθω τα πάντα
            </h2>

            <label style={labelStyle}>Η στιγμή που ένιωσα περήφανη για σένα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Κάτι μικρό που για μένα ήταν τεράστιο</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Μια αγκαλιά που δεν ήθελα να τελειώσει</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η στιγμή που σκέφτηκα “αυτό είναι η ευτυχία”</label>
            <textarea style={textareaStyle} />
          </div>

          <div style={card}>
            <h2
              className={elegantFont.className}
              style={{ fontSize: "34px", color: "#7D6457", marginBottom: "20px" }}
            >
              Τα πρώτα σου βήματα προς τον κόσμο
            </h2>

            <label style={labelStyle}>Η πρώτη φορά που έπαιξες με άλλα παιδάκια</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η πρώτη σου “φιλία” όπως την είδα εγώ</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Κάτι που σε ενθουσίασε πολύ</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Κάτι που σε φόβισε</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η στιγμή που κατάλαβα ότι μεγαλώνεις</label>
            <textarea style={textareaStyle} />
          </div>

          <div style={card}>
            <h2
              className={elegantFont.className}
              style={{ fontSize: "34px", color: "#7D6457", marginBottom: "20px" }}
            >
              Η προσωπικότητά σου από τα μάτια της μαμάς
            </h2>

            <label style={labelStyle}>Αυτό που σε κάνει να γελάς</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Αυτό που σε θυμώνει</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Αυτό που σε ηρεμεί</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Το πιο όμορφο κομμάτι του χαρακτήρα σου</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Κάτι που σε κάνει μοναδικό πλάσμα</label>
            <textarea style={textareaStyle} />
          </div>

          <div style={card}>
            <h2
              className={elegantFont.className}
              style={{ fontSize: "34px", color: "#7D6457", marginBottom: "20px" }}
            >
              Έτοιμη να συνεχίσεις;
            </h2>

            <p
              style={{
                fontSize: "17px",
                lineHeight: "1.8",
                color: "#7A6A62",
                marginBottom: "24px",
              }}
            >
              Στο επόμενο στάδιο θα προστεθούν φωτογραφίες, βίντεο και επιπλέον
              στοιχεία για να γίνει το παραμύθι ακόμη πιο προσωπικό.
            </p>

            <button
              type="button"
              style={{
                width: "100%",
                padding: "16px 24px",
                borderRadius: "20px",
                border: "none",
                backgroundColor: "#EAD7CF",
                color: "#5C4A42",
                fontSize: "18px",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              Συνέχεια στο επόμενο στάδιο
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
