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
  padding: "48px 20px",
  color: "#5E4B42",
};

const inner: CSSProperties = {
  maxWidth: "1050px",
  margin: "0 auto",
};

const card: CSSProperties = {
  backgroundColor: "rgba(255, 248, 243, 0.95)",
  borderRadius: "28px",
  padding: "28px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
  marginBottom: "18px",
};

const sectionTitle: CSSProperties = {
  fontSize: "30px",
  color: "#7D6457",
  marginBottom: "14px",
};

const labelStyle: CSSProperties = {
  fontSize: "15px",
  fontWeight: 600,
  color: "#6B564C",
  display: "block",
  marginBottom: "6px",
};

const inputStyle: CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "14px",
  border: "1px solid #D8C5B9",
  fontSize: "15px",
  marginBottom: "14px",
  backgroundColor: "#fff",
  color: "#5E4B42",
  boxSizing: "border-box",
};

const textareaStyle: CSSProperties = {
  ...inputStyle,
  minHeight: "90px",
  resize: "vertical",
};

const mediaGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "14px",
  marginTop: "10px",
};

const mediaBox: CSSProperties = {
  backgroundColor: "#FBF4EE",
  border: "1px dashed #D8C5B9",
  borderRadius: "18px",
  padding: "16px",
};

const helperText: CSSProperties = {
  fontSize: "13px",
  color: "#8A7F7A",
  marginBottom: "10px",
  lineHeight: "1.5",
};

const topText: CSSProperties = {
  fontSize: "17px",
  lineHeight: "1.65",
  color: "#7A6A62",
  maxWidth: "760px",
  margin: "0 auto 20px",
  textAlign: "center",
};

export default function MemoryDetailsPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        <div style={{ textAlign: "center", marginBottom: "18px" }}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={220}
              height={220}
              style={{ objectFit: "contain", cursor: "pointer" }}
              priority
            />
          </Link>
        </div>

        <div style={{ textAlign: "center", marginBottom: "22px" }}>
          <h1
            className={elegantFont.className}
            style={{
              fontSize: "40px",
              color: "#7D6457",
              marginBottom: "10px",
            }}
          >
            Η δημιουργία της ανάμνησής σου
          </h1>

          <p style={topText}>
            Συμπλήρωσε τις πιο σημαντικές στιγμές σας και πρόσθεσε φωτογραφίες
            και βίντεο στα σωστά σημεία, ώστε να δημιουργηθεί ένα προσωποποιημένο
            παραμύθι γεμάτο αλήθεια, αγάπη και μνήμη.
          </p>
        </div>

        <form>
          {/* 1 */}
          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
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

            <div style={mediaGrid}>
              <div style={mediaBox}>
                <div style={labelStyle}>Φωτογραφία από τις πρώτες μέρες</div>
                <div style={helperText}>Ανέβασε μία βασική φωτογραφία από τις πρώτες στιγμές.</div>
                <input type="file" accept="image/*" style={inputStyle} />
              </div>

              <div style={mediaBox}>
                <div style={labelStyle}>Φωτογραφία αγκαλιάς</div>
                <div style={helperText}>Μια τρυφερή φωτογραφία δική σας.</div>
                <input type="file" accept="image/*" style={inputStyle} />
              </div>

              <div style={mediaBox}>
                <div style={labelStyle}>Φωτογραφία από το σπίτι</div>
                <div style={helperText}>Από τις πρώτες μέρες μετά την επιστροφή σας.</div>
                <input type="file" accept="image/*" style={inputStyle} />
              </div>
            </div>
          </div>

          {/* 2 */}
          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
              Οι πρώτες σου ανακαλύψεις
            </h2>

            <label style={labelStyle}>Το πρώτο σου δοντάκι (και το πρώτο μου ξενύχτι)</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Λάτρευες να σε νανουρίζω έτσι</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η πρώτη φορά που μπουσούλησες</label>
            <textarea style={textareaStyle} />

            <div style={mediaGrid}>
              <div style={mediaBox}>
                <div style={labelStyle}>Κάδρο φωτογραφίας</div>
                <div style={helperText}>Μια φωτογραφία από αυτή την περίοδο.</div>
                <input type="file" accept="image/*" style={inputStyle} />
              </div>

              <div style={mediaBox}>
                <div style={labelStyle}>Βίντεο από τις πρώτες ανακαλύψεις</div>
                <div style={helperText}>Μπορεί να είναι μπουσούλημα, παιχνίδι ή μια γλυκιά στιγμή.</div>
                <input type="file" accept="video/*" style={inputStyle} />
              </div>
            </div>
          </div>

          {/* 3 */}
          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
              Τα πρώτα σου βήματα
            </h2>

            <label style={labelStyle}>Η πρώτη φορά που σηκώθηκες όρθιο</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η πρώτη σου τούμπα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η πρώτη φορά που έτρεξες προς το μέρος μου</label>
            <textarea style={textareaStyle} />

            <div style={mediaGrid}>
              <div style={mediaBox}>
                <div style={labelStyle}>Φωτογραφία πρώτων βημάτων</div>
                <input type="file" accept="image/*" style={inputStyle} />
              </div>

              <div style={mediaBox}>
                <div style={labelStyle}>Βίντεο πρώτων βημάτων</div>
                <input type="file" accept="video/*" style={inputStyle} />
              </div>
            </div>
          </div>

          {/* 4 */}
          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
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

          {/* 5 */}
          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
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

            <div style={mediaGrid}>
              <div style={mediaBox}>
                <div style={labelStyle}>Φωτογραφία ιδιαίτερης στιγμής</div>
                <input type="file" accept="image/*" style={inputStyle} />
              </div>

              <div style={mediaBox}>
                <div style={labelStyle}>Βίντεο ιδιαίτερης στιγμής</div>
                <input type="file" accept="video/*" style={inputStyle} />
              </div>
            </div>
          </div>

          {/* 6 */}
          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
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

            <div style={mediaGrid}>
              <div style={mediaBox}>
                <div style={labelStyle}>Φωτογραφία με άλλα παιδάκια / κοινωνική στιγμή</div>
                <input type="file" accept="image/*" style={inputStyle} />
              </div>
            </div>
          </div>

          {/* 7 */}
          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
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

          {/* FINAL */}
          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
              Έτοιμη να συνεχίσεις;
            </h2>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.6",
                color: "#7A6A62",
                marginBottom: "16px",
              }}
            >
              Στο επόμενο στάδιο μπορούμε να συνδέσουμε τη φόρμα με Make, ώστε
              όλα τα στοιχεία, οι φωτογραφίες και τα βίντεο να οργανώνονται
              αυτόματα.
            </p>

            <button
              type="button"
              style={{
                width: "100%",
                padding: "15px 22px",
                borderRadius: "18px",
                border: "none",
                backgroundColor: "#EAD7CF",
                color: "#5C4A42",
                fontSize: "17px",
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
