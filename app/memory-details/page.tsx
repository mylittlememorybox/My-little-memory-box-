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
  padding: "42px 18px",
  color: "#5E4B42",
};

const inner: CSSProperties = {
  maxWidth: "1050px",
  margin: "0 auto",
};

const card: CSSProperties = {
  backgroundColor: "rgba(255, 248, 243, 0.95)",
  borderRadius: "26px",
  padding: "26px",
  boxShadow: "0 10px 28px rgba(0,0,0,0.05)",
  marginBottom: "16px",
};

const sectionTitle: CSSProperties = {
  fontSize: "29px",
  color: "#7D6457",
  marginBottom: "12px",
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
  marginBottom: "12px",
  backgroundColor: "#fff",
  color: "#5E4B42",
  boxSizing: "border-box",
};

const textareaStyle: CSSProperties = {
  ...inputStyle,
  minHeight: "88px",
  resize: "vertical",
};

const mediaGrid: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px",
  marginTop: "8px",
};

const mediaBox: CSSProperties = {
  backgroundColor: "#FBF4EE",
  border: "1px dashed #D8C5B9",
  borderRadius: "18px",
  padding: "14px",
};

const helperText: CSSProperties = {
  fontSize: "13px",
  color: "#8A7F7A",
  marginBottom: "8px",
  lineHeight: "1.5",
};

const topText: CSSProperties = {
  fontSize: "16px",
  lineHeight: "1.6",
  color: "#7A6A62",
  maxWidth: "780px",
  margin: "0 auto 18px",
  textAlign: "center",
};

function MediaUploadBox({
  title,
  description,
  accept,
}: {
  title: string;
  description?: string;
  accept: string;
}) {
  return (
    <div style={mediaBox}>
      <div style={labelStyle}>{title}</div>
      {description ? <div style={helperText}>{description}</div> : null}
      <input type="file" accept={accept} style={inputStyle} />
    </div>
  );
}

export default function MemoryDetailsPage() {
  return (
    <main style={wrap}>
      <div style={inner}>
        <div style={{ textAlign: "center", marginBottom: "14px" }}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={210}
              height={210}
              style={{ objectFit: "contain", cursor: "pointer" }}
              priority
            />
          </Link>
        </div>

        <div style={{ textAlign: "center", marginBottom: "18px" }}>
          <h1
            className={elegantFont.className}
            style={{
              fontSize: "38px",
              color: "#7D6457",
              marginBottom: "8px",
            }}
          >
            Η δημιουργία της ανάμνησής σου
          </h1>

          <p style={topText}>
            Συμπλήρωσε τις πιο σημαντικές στιγμές σας και πρόσθεσε φωτογραφίες
            και βίντεο στα σωστά σημεία, ώστε να δημιουργηθεί ένα
            προσωποποιημένο παραμύθι γεμάτο αλήθεια, αγάπη και μνήμη.
          </p>
        </div>

        <form>
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
              <MediaUploadBox
                title="Φωτογραφία από τις πρώτες μέρες"
                description="Μια βασική φωτογραφία από τις πρώτες στιγμές."
                accept="image/*"
              />
              <MediaUploadBox
                title="Φωτογραφία αγκαλιάς"
                description="Μια τρυφερή φωτογραφία δική σας."
                accept="image/*"
              />
              <MediaUploadBox
                title="Φωτογραφία από το σπίτι"
                description="Από τις πρώτες μέρες μετά την επιστροφή σας."
                accept="image/*"
              />
            </div>
          </div>

          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
              Ο κόσμος σου
            </h2>

            <label style={labelStyle}>Οι γονείς σου</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Οι θείοι και οι θείες</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>
              Οι παππούδες και οι γιαγιάδες και οι νονοί/ες σου
            </label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Οι φίλοι που έγιναν οικογένεια</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>
              Οι αξίες που θέλουμε να σου δώσουμε σαν γονείς
            </label>
            <textarea style={textareaStyle} />
          </div>

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
              <MediaUploadBox
                title="Φωτογραφία από τις πρώτες ανακαλύψεις"
                description="Μια φωτογραφία από αυτή την περίοδο."
                accept="image/*"
              />
              <MediaUploadBox
                title="Βίντεο από τις πρώτες ανακαλύψεις"
                description="Μπορεί να είναι μπουσούλημα, παιχνίδι ή μια γλυκιά στιγμή."
                accept="video/*"
              />
            </div>
          </div>

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
              <MediaUploadBox
                title="Φωτογραφία πρώτων βημάτων"
                accept="image/*"
              />
              <MediaUploadBox
                title="Βίντεο πρώτων βημάτων"
                accept="video/*"
              />
            </div>
          </div>

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
              <MediaUploadBox
                title="Φωτογραφία ιδιαίτερης στιγμής"
                accept="image/*"
              />
              <MediaUploadBox
                title="Βίντεο ιδιαίτερης στιγμής"
                accept="video/*"
              />
            </div>
          </div>

          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
              Για τα γενέθλιά σου
            </h2>

            <label style={labelStyle}>Σήμερα γίνεσαι ... ετών</label>
            <input type="text" style={inputStyle} />

            <label style={labelStyle}>
              Έσβησες την τούρτα σου με αυτούς τους αγαπημένους σου
            </label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Κάτι που έμαθες</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Μία στιγμή που δεν θα ξεχάσω από αυτή τη χρονιά</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η ευχή μου για σένα</label>
            <textarea style={textareaStyle} />

            <div style={mediaGrid}>
              <MediaUploadBox
                title="Φωτογραφίες γενεθλίων"
                description="Πρόσθεσε φωτογραφίες από το πάρτι ή την τούρτα."
                accept="image/*"
              />
              <MediaUploadBox
                title="Βίντεο γενεθλίων"
                description="Ένα βίντεο από το σβήσιμο της τούρτας ή τη γιορτή."
                accept="video/*"
              />
            </div>
          </div>

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
              <MediaUploadBox
                title="Φωτογραφία κοινωνικής στιγμής"
                description="Με φίλους, παιχνίδι ή κάποια όμορφη εμπειρία."
                accept="image/*"
              />
            </div>
          </div>

          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
              Η πρώτη σου μέρα στο σχολείο
            </h2>

            <label style={labelStyle}>Σήμερα πήγες για πρώτη φορά σχολείο...</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Και εγώ ένιωσα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Εσύ έδειχνες</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η στιγμή που σε άφησα</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Η σκέψη που δεν έφυγε από το μυαλό μου</label>
            <textarea style={textareaStyle} />

            <label style={labelStyle}>Όταν σε ξαναείδα</label>
            <textarea style={textareaStyle} />

            <div style={mediaGrid}>
              <MediaUploadBox
                title="Φωτογραφίες σχολείου"
                description="Πρόσθεσε φωτογραφίες από την πρώτη μέρα."
                accept="image/*"
              />
            </div>
          </div>

          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
              Μια σκέψη για σένα
            </h2>

            <label style={labelStyle}>Κείμενο / σκέψη που θέλεις να μπει σαν μεταβατική σελίδα</label>
            <textarea
              style={{ ...textareaStyle, minHeight: "120px" }}
            />
          </div>

          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
              Μια σελίδα με φωτογραφίες
            </h2>

            <div style={mediaGrid}>
              <MediaUploadBox
                title="Φωτογραφία 1"
                accept="image/*"
              />
              <MediaUploadBox
                title="Φωτογραφία 2"
                accept="image/*"
              />
              <MediaUploadBox
                title="Φωτογραφία 3"
                accept="image/*"
              />
              <MediaUploadBox
                title="Φωτογραφία 4"
                accept="image/*"
              />
              <MediaUploadBox
                title="Φωτογραφία 5"
                accept="image/*"
              />
            </div>
          </div>

          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
              Μια τελευταία σκέψη
            </h2>

            <label style={labelStyle}>Κείμενο μετάβασης πριν το γράμμα</label>
            <textarea
              style={{ ...textareaStyle, minHeight: "120px" }}
            />

            <div style={mediaGrid}>
              <MediaUploadBox
                title="Φωτογραφία για αυτή τη σελίδα"
                accept="image/*"
              />
            </div>
          </div>

          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
              Ένα γράμμα για εσένα
            </h2>

            <label style={labelStyle}>Το γράμμα που θέλεις να του / της μείνει</label>
            <textarea
              style={{ ...textareaStyle, minHeight: "220px" }}
            />
          </div>

          <div style={card}>
            <h2 className={elegantFont.className} style={sectionTitle}>
              Το τελικό κλείσιμο της ιστορίας
            </h2>

            <label style={labelStyle}>Το τελευταίο κείμενο / μήνυμα του παραμυθιού</label>
            <textarea
              style={{ ...textareaStyle, minHeight: "160px" }}
            />
          </div>

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
