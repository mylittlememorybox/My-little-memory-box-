import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";

export default function PreviewPage() {
  return (
    <main style={page}>
      <div style={container}>
        <div style={logoWrap}>
          <Link href="/" style={logoLink}>
            <img src="/logo.png" alt="My Little Memory Box" style={logo} />
          </Link>
        </div>

        <div style={banner}>
          Δείγμα από τις 17 ψηφιακές σελίδες του Memory Box & του παραμυθιού σας
        </div>

        <Section title="Οι πρώτες σου στιγμές">
          <div style={twoCols}>
            <div>
              <InfoLine label="Όνομα">Ελπίδα</InfoLine>
              <InfoLine label="Η πρώτη φορά που σε κράτησα">
                2 Ιουνίου 2025
              </InfoLine>
              <InfoLine label="Ζύγιζες μόνο">3,550 γρ</InfoLine>
              <InfoLine label="Είχες ύψος">51 πόντους</InfoLine>
              <InfoLine label="Επιστρέψαμε από το μαιευτήριο">
                Πέντε μέρες μετά τη γέννησή σου
              </InfoLine>
              <InfoLine label="Οι πρώτες σου στιγμές στο σπίτι ήταν">
                Ήρεμες, είχες ανάγκη την αγκαλιά της μαμάς μέχρι να
                προσαρμοστείς
              </InfoLine>
              <InfoLine label="Η πρώτη φορά που χαμογέλασες">
                Ήταν στους 2 μήνες (ξετρελαθήκαμε)
              </InfoLine>
            </div>

            <ThemedImage
              title="Νεογέννητο μωρό"
              subtitle="Πρώτες μέρες στο σπίτι"
              icon="👶"
              variant="newborn"
              height={320}
            />
          </div>
        </Section>

        <Section title="Ο κόσμος σου">
          <div style={twoCols}>
            <div>
              <InfoLine label="Οι γονείς σου">Μαριάννα και Γιάννης</InfoLine>
              <InfoLine label="Οι παππούδες σου">
                Από τον μπαμπά, γιαγιά Ρίτσα και παππούς Μάκης, ενώ από τη μαμά,
                γιαγιά Μαρία και παππούς Χάρης
              </InfoLine>
              <InfoLine label="Η νονά σου">Ανδριάνα</InfoLine>
              <InfoLine label="Οι φίλοι που έγιναν οικογένεια">
                Χριστίνα φίλη μαμάς, Γεωργία φίλη μαμάς, Σπύρος φίλος μπαμπά και
                Ορέστης φίλος μπαμπά
              </InfoLine>
            </div>

            <div style={stack}>
              <ThemedImage
                title="Μαμά & μπαμπάς"
                subtitle="Η μικρή σου οικογένεια"
                icon="👨‍👩‍👧"
                variant="family"
                height={150}
              />
              <ThemedImage
                title="Παππούδες"
                subtitle="Οι πιο τρυφερές αγκαλιές"
                icon="💞"
                variant="grandparents"
                height={150}
              />
            </div>
          </div>
        </Section>

        <Section title="Οι πρώτες σου ανακαλύψεις">
          <div style={twoCols}>
            <div>
              <InfoLine label="Το πρώτο σου δοντάκι">
                Ήταν στους 3 μήνες, τα δύο πρώτα δοντάκια τα κάτω
              </InfoLine>
              <InfoLine label="Λάτρευες να σε νανουρίζουμε έτσι">
                Αγκαλίτσα και να σου τραγουδάω «νάνι νάνι το μωράκι μου»
              </InfoLine>
              <InfoLine label="Η πρώτη φορά που μπουσούλησες">
                Ήταν γύρω στους 7 μήνες, ξαφνικά
              </InfoLine>
            </div>

            <div style={stack}>
              <ThemedImage
                title="Πρώτο χαμόγελο"
                subtitle="Μια στιγμή που δεν ξεχνιέται"
                icon="😊"
                variant="smile"
                height={150}
              />
              <ThemedImage
                title="Μπουσούλημα"
                subtitle="Η πρώτη μικρή αποστολή"
                icon="🧸"
                variant="crawl"
                height={150}
              />
            </div>
          </div>
        </Section>

        <Section title="Τα πρώτα σου βήματα">
          <div style={twoCols}>
            <div>
              <InfoLine label="Η πρώτη φορά που σηκώθηκες όρθια">
                Με φόρα, σαν να ήξερες ήδη πού θες να πας
              </InfoLine>
              <InfoLine label="Η πρώτη σου τούμπα">
                Μικρή και γλυκιά, με ένα ξαφνιασμένο βλέμμα και μετά γελάκια
              </InfoLine>
              <InfoLine label="Η πρώτη φορά που έτρεξες προς το μέρος μου">
                Με τα χεράκια ανοιχτά και ένα τεράστιο χαμόγελο
              </InfoLine>
            </div>

            <ThemedImage
              title="Πρώτα βήματα"
              subtitle="Μικρά βηματάκια, μεγάλη συγκίνηση"
              icon="👣"
              variant="steps"
              height={320}
            />
          </div>
        </Section>

        <Section title="Οι μέρες που δεν ήταν εύκολες">
          <div style={oneCol}>
            <InfoLine label="Μια μέρα που ένιωσα ότι δεν τα κατάφερνα">
              Ήταν μια κουραστική μέρα χωρίς πολύ ύπνο, μα η αγκαλιά σου τα
              γλύκαινε όλα
            </InfoLine>
            <InfoLine label="Μια στιγμή που λύγισα">
              Όταν προσπαθούσα να μαντέψω τι χρειαζόσουν και ήθελα μόνο να είσαι
              καλά
            </InfoLine>
            <InfoLine label="Κάτι που με δυσκόλεψε περισσότερο απ’ όσο περίμενα">
              Το να σε βλέπω να προσαρμόζεσαι στον κόσμο βήμα βήμα
            </InfoLine>
            <InfoLine label="Και παρ’ όλα αυτά συνέχισα γιατί">
              Γιατί η αγάπη για σένα ήταν πιο μεγάλη από κάθε δυσκολία
            </InfoLine>
          </div>
        </Section>

        <Section title="Οι στιγμές που με έκανες να νιώθω τα πάντα">
          <div style={twoCols}>
            <div>
              <InfoLine label="Η στιγμή που ένιωσα περήφανη για σένα">
                Όταν δοκίμασες κάτι καινούριο χωρίς φόβο
              </InfoLine>
              <InfoLine label="Κάτι μικρό που για μένα ήταν τεράστιο">
                Ένα βλέμμα αναγνώρισης και ένα γέλιο μόνο για μένα
              </InfoLine>
              <InfoLine label="Μια αγκαλιά που δεν ήθελα να τελειώσει">
                Μετά από μια μεγάλη μέρα, όταν ακούμπησες ήσυχα πάνω μου
              </InfoLine>
              <InfoLine label='Η στιγμή που σκέφτηκα "αυτό είναι η ευτυχία"'>
                Όταν ήμασταν όλοι μαζί και γελούσες χωρίς σταματημό
              </InfoLine>
            </div>

            <ThemedImage
              title="Στιγμές καρδιάς"
              subtitle="Αγκαλιές, γέλια και τρυφερότητα"
              icon="💛"
              variant="heart"
              height={320}
            />
          </div>
        </Section>

        <Section title="Για τα γενέθλιά σου">
          <div style={twoCols}>
            <div>
              <InfoLine label="Σήμερα γίνεσαι">2 ετών</InfoLine>
              <InfoLine label="Έσβησες την τούρτα σου με αυτούς τους αγαπημένους σου">
                Με τη μαμά, τον μπαμπά, τους παππούδες, τη νονά και όλους όσους
                σε αγαπούν
              </InfoLine>
              <InfoLine label="Κάτι που έμαθες">
                Να εξερευνάς με χαρά και να ζητάς αγκαλιά όταν τη χρειάζεσαι
              </InfoLine>
              <InfoLine label="Μια στιγμή που δεν θα ξεχάσω από αυτή τη χρονιά">
                Το πρώτο σου δυνατό γέλιο όταν σε χειροκροτούσαμε όλοι μαζί
              </InfoLine>
              <InfoLine label="Η ευχή μου για σένα">
                Να μεγαλώνεις με υγεία, χαρά, θάρρος και αγάπη
              </InfoLine>
            </div>

            <ThemedImage
              title="Γενέθλια"
              subtitle="Κεράκια, χαρά και αγαπημένοι άνθρωποι"
              icon="🎂"
              variant="birthday"
              height={320}
            />
          </div>
        </Section>

        <Section title="Τα πρώτα σου βήματα προς τον κόσμο">
          <div style={twoCols}>
            <div>
              <InfoLine label="Η πρώτη φορά που έπαιξες με άλλα παιδάκια">
                Με περιέργεια στην αρχή και μετά με ασταμάτητο ενθουσιασμό
              </InfoLine>
              <InfoLine label='Η πρώτη σου "φιλία" όπως την είδα εγώ'>
                Ήταν ένα παιχνίδι δίπλα δίπλα και πολλά μικρά γελάκια
              </InfoLine>
              <InfoLine label="Κάτι που σε ενθουσίασε πολύ">
                Τα χρώματα, τα μπαλόνια και οι καινούριοι ήχοι
              </InfoLine>
              <InfoLine label="Κάτι που σε φόβισε">
                Οι πολύ δυνατοί ήχοι όταν ήταν ξαφνικοί
              </InfoLine>
              <InfoLine label="Η στιγμή που κατάλαβα ότι μεγαλώνεις">
                Όταν κοίταζες γύρω σου με αυτοπεποίθηση, σαν μικρή εξερευνήτρια
              </InfoLine>
            </div>

            <ThemedImage
              title="Μικρές εξερευνήσεις"
              subtitle="Παιχνίδι, φίλοι και καινούριος κόσμος"
              icon="🌈"
              variant="social"
              height={320}
            />
          </div>
        </Section>

        <Section title="Η πρώτη σου μέρα στο σχολείο">
          <div style={twoCols}>
            <div>
              <InfoLine label="Σήμερα πήγες για πρώτη φορά σχολείο">
                Με περιέργεια, λίγο δισταγμό και μια γλυκιά αγκαλιά πριν μπεις
              </InfoLine>
              <InfoLine label="Και εγώ ένιωσα">
                Συγκίνηση, περηφάνια και λίγο σφίξιμο στην καρδιά
              </InfoLine>
              <InfoLine label="Εσύ έδειχνες">
                Μικρή, γλυκιά, παρατηρητική και πιο θαρραλέα απ’ όσο νόμιζες
              </InfoLine>
              <InfoLine label="Η στιγμή που σε άφησα">
                Ήταν ήσυχη, με ένα φιλί στο μέτωπο και ένα "θα έρθω μετά"
              </InfoLine>
              <InfoLine label="Η σκέψη που δεν έφυγε από το μυαλό μου">
                Πόσο γρήγορα μεγαλώνεις
              </InfoLine>
              <InfoLine label="Όταν σε ξαναείδα">
                Έτρεξες προς το μέρος μου και όλα ηρέμησαν
              </InfoLine>
            </div>

            <ThemedImage
              title="Πρώτη μέρα στο σχολείο"
              subtitle="Μικρό βήμα, μεγάλη στιγμή"
              icon="🎒"
              variant="school"
              height={320}
            />
          </div>
        </Section>

        <Section title="Μια σκέψη για σένα">
          <p style={longText}>
            Να θυμάσαι πάντα πως ήσουν, είσαι και θα είσαι ένα παιδί πολύ
            αγαπημένο. Από την πρώτη στιγμή που ήρθες κοντά μας, έφερες μαζί σου
            φως, τρυφερότητα και μια καινούρια μορφή χαράς που δεν ξέραμε πως
            υπάρχει.
          </p>
        </Section>

        <Section title="Ένα γράμμα για εσένα">
          <p style={longText}>
            Μικρή μου Ελπίδα, εύχομαι να προχωράς στη ζωή σου με απαλότητα και
            θάρρος. Να μη φοβηθείς ποτέ να αγαπήσεις, να ονειρευτείς, να
            προσπαθήσεις ξανά. Κι όποτε χρειαστείς ένα μέρος να ξεκουραστείς,
            να θυμάσαι πως η αγκαλιά μας θα είναι πάντα εκεί.
          </p>
        </Section>

        <Section title="Το παραμύθι σου">
          <div style={storybookIntro}>
            <div style={storybookBadge}>Δείγμα από το ηλεκτρονικό παραμύθι σας</div>
            <h3 style={storybookTitle}>Η Ελπίδα και το Μπαλόνι που Ήθελε τα Σύννεφα</h3>
          </div>

          <ThemedImage
            title="Εξώφυλλο παραμυθιού"
            subtitle="Pixar-inspired αισθητική"
            icon="✨"
            variant="storycover"
            height={320}
          />

          <div style={storyPage}>
            <ThemedImage
              title="Σελίδα 1"
              subtitle="Η μικρή εξερευνήτρια"
              icon="🌤️"
              variant="story1"
              height={250}
            />
            <p style={storyText}>
              Μια φορά κι έναν καιρό, ήταν ένα κοριτσάκι που το έλεγαν Ελπίδα.
              Η Ελπίδα είχε μάτια που έλαμπαν σαν μικρές σταγόνες ήλιου και ένα
              χαμόγελο που έκανε όλο το σπίτι να φωτίζεται. Από μωρό ακόμα,
              αγαπούσε την αγκαλιά της μαμάς και το τραγούδι που την νανούριζε
              τα βράδια.
            </p>
          </div>

          <div style={storyPage}>
            <ThemedImage
              title="Σελίδα 2"
              subtitle="Η πρώτη αποστολή"
              icon="🎈"
              variant="story2"
              height={250}
            />
            <p style={storyText}>
              Ένα πρωί, η Ελπίδα είδε ένα ροζ μπαλόνι να χορεύει κοντά στο
              παράθυρο. «Μαμά, κοίτα!» είπε με ενθουσιασμό. Το μπαλόνι όμως
              ανέβηκε πιο ψηλά και στάθηκε εκεί σαν να την καλούσε σε μια μικρή
              περιπέτεια. Ο μπαμπάς χαμογέλασε. «Νομίζω πως κάποιος ψάχνει μια
              μικρή εξερευνήτρια», είπε.
            </p>
          </div>

          <div style={storyPage}>
            <ThemedImage
              title="Σελίδα 3"
              subtitle="Όλοι μαζί"
              icon="💞"
              variant="story3"
              height={250}
            />
            <p style={storyText}>
              Η μαμά, ο μπαμπάς, η νονά Ανδριάνα, οι παππούδες και οι αγαπημένοι
              φίλοι που είχαν γίνει οικογένεια μαζεύτηκαν γύρω της. «Θα το
              βρούμε μαζί», της είπαν. Και πράγματι, με γέλια, μικρά βηματάκια
              και πολλή αγάπη, η Ελπίδα έφτασε το μπαλόνι της.
            </p>
          </div>

          <div style={storyPage}>
            <ThemedImage
              title="Σελίδα 4"
              subtitle="Το πιο γλυκό τέλος"
              icon="🌙"
              variant="story4"
              height={250}
            />
            <p style={storyText}>
              Εκείνο το βράδυ, η Ελπίδα αποκοιμήθηκε στην αγαπημένη της αγκαλιά,
              ακούγοντας σιγανά το «νάνι νάνι το μωράκι μου». Και κάπως έτσι
              κατάλαβε πως κάθε μεγάλη περιπέτεια ξεκινά από κάτι πολύ μικρό:
              μια αγκαλιά, ένα χαμόγελο και την αγάπη όλων όσων είναι δίπλα σου.
            </p>
          </div>
        </Section>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section style={card}>
      <h2 style={sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}

function InfoLine({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <p style={infoLine}>
      <strong>{label}: </strong>
      {children}
    </p>
  );
}

function ThemedImage({
  title,
  subtitle,
  icon,
  variant,
  height,
}: {
  title: string;
  subtitle: string;
  icon: string;
  variant: string;
  height: number;
}) {
  const src = makeIllustration({ title, subtitle, icon, variant, height });
  return (
    <div style={{ ...imageWrap, height }}>
      <img src={src} alt={title} style={imgStyle} />
    </div>
  );
}

function makeIllustration({
  title,
  subtitle,
  icon,
  variant,
  height,
}: {
  title: string;
  subtitle: string;
  icon: string;
  variant: string;
  height: number;
}) {
  const palettes: Record<string, { bg1: string; bg2: string; accent: string }> = {
    newborn: { bg1: "#F9EEE7", bg2: "#F2DCCF", accent: "#C89C8A" },
    family: { bg1: "#F7EFE9", bg2: "#E8D8CF", accent: "#B98574" },
    grandparents: { bg1: "#F9F2EA", bg2: "#EEDFD2", accent: "#BE9A7A" },
    smile: { bg1: "#FFF2F4", bg2: "#F8D8DE", accent: "#D88A9D" },
    crawl: { bg1: "#F6F1FF", bg2: "#E2D8FA", accent: "#9A85D8" },
    steps: { bg1: "#EEF7F1", bg2: "#D7ECD9", accent: "#7EB38A" },
    heart: { bg1: "#FFF3EC", bg2: "#F3D8C8", accent: "#D08F73" },
    birthday: { bg1: "#FFF7EA", bg2: "#F8E1B8", accent: "#D6A24A" },
    social: { bg1: "#EEF8FF", bg2: "#D8EBF8", accent: "#7CAECD" },
    school: { bg1: "#F8F3EC", bg2: "#EADFCF", accent: "#B79A66" },
    storycover: { bg1: "#FBEFEA", bg2: "#E7D4D1", accent: "#C9847B" },
    story1: { bg1: "#FFF5EE", bg2: "#F3DDD3", accent: "#D29A7B" },
    story2: { bg1: "#FFF2F7", bg2: "#F2D3E5", accent: "#D06BA1" },
    story3: { bg1: "#F2F8F1", bg2: "#DDEDD9", accent: "#7FA46E" },
    story4: { bg1: "#EEF0FF", bg2: "#D6D9F7", accent: "#7D82C8" },
  };

  const p = palettes[variant] || palettes.family;

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="1200" height="${height * 3}" viewBox="0 0 1200 ${height * 3}">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${p.bg1}"/>
        <stop offset="100%" stop-color="${p.bg2}"/>
      </linearGradient>
    </defs>
    <rect width="1200" height="${height * 3}" rx="48" fill="url(#g)"/>
    <circle cx="210" cy="180" r="90" fill="${p.accent}" opacity="0.18"/>
    <circle cx="980" cy="${height * 3 - 140}" r="120" fill="${p.accent}" opacity="0.14"/>
    <circle cx="920" cy="170" r="36" fill="#ffffff" opacity="0.55"/>
    <circle cx="980" cy="170" r="28" fill="#ffffff" opacity="0.55"/>
    <circle cx="1015" cy="170" r="22" fill="#ffffff" opacity="0.55"/>
    <text x="600" y="200" text-anchor="middle" font-size="98">${icon}</text>
    <text x="600" y="320" text-anchor="middle" font-size="58" font-family="Arial" fill="#6B564C" font-weight="700">${escapeXml(
      title
    )}</text>
    <text x="600" y="395" text-anchor="middle" font-size="34" font-family="Arial" fill="#7F6A60">${escapeXml(
      subtitle
    )}</text>
    <rect x="225" y="475" width="750" height="300" rx="34" fill="#ffffff" opacity="0.52"/>
    <circle cx="420" cy="565" r="60" fill="${p.accent}" opacity="0.30"/>
    <rect x="520" y="520" width="250" height="22" rx="11" fill="${p.accent}" opacity="0.25"/>
    <rect x="520" y="565" width="180" height="18" rx="9" fill="${p.accent}" opacity="0.20"/>
    <rect x="360" y="660" width="460" height="22" rx="11" fill="${p.accent}" opacity="0.18"/>
  </svg>`;

  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}

function escapeXml(text: string) {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");
}

const page: CSSProperties = {
  minHeight: "100vh",
  background: "#f7efe9",
  padding: "20px",
  color: "#5c4a43",
  fontFamily: "Arial, sans-serif",
};

const container: CSSProperties = {
  maxWidth: "900px",
  margin: "0 auto",
};

const logoWrap: CSSProperties = {
  textAlign: "center",
  marginBottom: "18px",
};

const logoLink: CSSProperties = {
  display: "inline-block",
};

const logo: CSSProperties = {
  height: "110px",
  width: "auto",
  objectFit: "contain",
};

const banner: CSSProperties = {
  background: "#e8d6cc",
  padding: "18px",
  borderRadius: "18px",
  textAlign: "center",
  marginBottom: "20px",
  fontWeight: 700,
  fontSize: "20px",
  lineHeight: 1.45,
};

const card: CSSProperties = {
  background: "#fff",
  padding: "22px",
  borderRadius: "20px",
  marginBottom: "20px",
  boxShadow: "0 8px 22px rgba(0,0,0,0.05)",
};

const sectionTitle: CSSProperties = {
  marginTop: 0,
  marginBottom: "16px",
  fontSize: "28px",
  color: "#6b564c",
};

const infoLine: CSSProperties = {
  fontSize: "21px",
  lineHeight: 1.7,
  margin: "0 0 10px",
};

const twoCols: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: "18px",
};

const oneCol: CSSProperties = {
  display: "block",
};

const stack: CSSProperties = {
  display: "grid",
  gap: "14px",
};

const imageWrap: CSSProperties = {
  width: "100%",
  borderRadius: "18px",
  overflow: "hidden",
  background: "#f3ebe6",
  border: "1px solid #ead8cf",
};

const imgStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
};

const longText: CSSProperties = {
  fontSize: "20px",
  lineHeight: 1.85,
  margin: 0,
};

const storybookIntro: CSSProperties = {
  marginBottom: "18px",
};

const storybookBadge: CSSProperties = {
  display: "inline-block",
  background: "#f1dfd4",
  color: "#7a5e54",
  padding: "8px 12px",
  borderRadius: "999px",
  fontSize: "14px",
  fontWeight: 700,
  marginBottom: "10px",
};

const storybookTitle: CSSProperties = {
  fontSize: "30px",
  margin: "0 0 8px",
  color: "#6b564c",
};

const storyPage: CSSProperties = {
  marginTop: "16px",
};

const storyText: CSSProperties = {
  fontSize: "20px",
  lineHeight: 1.85,
  marginTop: "12px",
  marginBottom: 0,
};
