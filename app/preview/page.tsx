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
          <TwoCols
            left={
              <>
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
                  Ήρεμες, είχες ανάγκη την αγκαλιά της μαμάς μέχρι να προσαρμοστείς
                </InfoLine>
                <InfoLine label="Η πρώτη φορά που χαμογέλασες">
                  Ήταν στους 2 μήνες (ξετρελαθήκαμε)
                </InfoLine>
              </>
            }
            right={
              <Photo
                src="/preview/newborn.jpg.JPG"
                alt="Νεογέννητο"
                height={320}
              />
            }
          />
        </Section>

        <Section title="Ο κόσμος σου">
          <TwoCols
            left={
              <>
                <InfoLine label="Οι γονείς σου">Μαριάννα και Γιάννης</InfoLine>
                <InfoLine label="Οι παππούδες σου">
                  Από τον μπαμπά γιαγιά Ρίτσα και παππούς Μάκης, ενώ από τη μαμά
                  γιαγιά Μαρία και παππούς Χάρης
                </InfoLine>
                <InfoLine label="Η νονά σου">Ανδριάνα</InfoLine>
                <InfoLine label="Οι φίλοι που έγιναν οικογένεια">
                  Χριστίνα φίλη μαμάς, Γεωργία φίλη μαμάς, Σπύρος φίλος μπαμπά και
                  Ορέστης φίλος μπαμπά
                </InfoLine>
              </>
            }
            right={
              <Stack>
                <Photo
                  src="/preview/family.jpg.JPG"
                  alt="Οικογένεια"
                  height={150}
                />
                <Photo
                  src="/preview/grandparents.jpg.JPG"
                  alt="Παππούδες"
                  height={150}
                />
              </Stack>
            }
          />
        </Section>

        <Section title="Οι πρώτες σου ανακαλύψεις">
          <TwoCols
            left={
              <>
                <InfoLine label="Το πρώτο σου δοντάκι">
                  Ήταν στους 3 μήνες, τα δύο πρώτα δοντάκια τα κάτω
                </InfoLine>
                <InfoLine label="Λάτρευες να σε νανουρίζουμε έτσι">
                  Αγκαλίτσα και να σου τραγουδάω «νάνι νάνι το μωράκι μου»
                </InfoLine>
                <InfoLine label="Η πρώτη φορά που μπουσούλησες">
                  Ήταν γύρω στους 7 μήνες, ξαφνικά
                </InfoLine>
              </>
            }
            right={
              <Stack>
                <Photo
                  src="/preview/smile.jpg.JPG"
                  alt="Χαμόγελο"
                  height={150}
                />
                <Photo
                  src="/preview/crawl.jpg.JPG"
                  alt="Μπουσούλημα"
                  height={150}
                />
              </Stack>
            }
          />
        </Section>

        <Section title="Τα πρώτα σου βήματα">
          <TwoCols
            left={
              <>
                <InfoLine label="Η πρώτη φορά που σηκώθηκες όρθια">
                  Με φόρα, σαν να ήξερες ήδη πού θες να πας
                </InfoLine>
                <InfoLine label="Η πρώτη σου τούμπα">
                  Μικρή και γλυκιά, με ένα ξαφνιασμένο βλέμμα και μετά γελάκια
                </InfoLine>
                <InfoLine label="Η πρώτη φορά που έτρεξες προς το μέρος μου">
                  Με τα χεράκια ανοιχτά και ένα τεράστιο χαμόγελο
                </InfoLine>
              </>
            }
            right={
              <Photo
                src="/preview/steps.jpg.JPG"
                alt="Πρώτα βήματα"
                height={320}
              />
            }
          />
        </Section>

        <Section title="Οι μέρες που δεν ήταν εύκολες">
          <InfoLine label="Μια μέρα που ένιωσα ότι δεν τα κατάφερνα">
            Ήταν μια κουραστική μέρα χωρίς πολύ ύπνο, μα η αγκαλιά σου τα γλύκαινε όλα
          </InfoLine>
          <InfoLine label="Μια στιγμή που λύγισα">
            Όταν προσπαθούσα να μαντέψω τι χρειαζόσουν και ήθελα μόνο να είσαι καλά
          </InfoLine>
          <InfoLine label="Κάτι που με δυσκόλεψε περισσότερο απ’ όσο περίμενα">
            Το να σε βλέπω να προσαρμόζεσαι στον κόσμο βήμα βήμα
          </InfoLine>
          <InfoLine label="Και παρ’ όλα αυτά συνέχισα γιατί">
            Γιατί η αγάπη για σένα ήταν πιο μεγάλη από κάθε δυσκολία
          </InfoLine>
        </Section>

        <Section title="Οι στιγμές που με έκανες να νιώθω τα πάντα">
          <TwoCols
            left={
              <>
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
              </>
            }
            right={
              <Photo
                src="/preview/happy moment.jpg.JPG"
                alt="Στιγμές ευτυχίας"
                height={320}
              />
            }
          />
        </Section>

        <Section title="Για τα γενέθλιά σου">
          <TwoCols
            left={
              <>
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
              </>
            }
            right={
              <Photo
                src="/preview/birthday.jpg.JPG"
                alt="Γενέθλια"
                height={320}
              />
            }
          />
        </Section>

        <Section title="Τα πρώτα σου βήματα προς τον κόσμο">
          <TwoCols
            left={
              <>
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
              </>
            }
            right={
              <Photo
                src="/preview/social.jpg.JPG"
                alt="Κοινωνικές στιγμές"
                height={320}
              />
            }
          />
        </Section>

        <Section title="Η πρώτη σου μέρα στο σχολείο">
          <TwoCols
            left={
              <>
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
              </>
            }
            right={
              <Photo
                src="/preview/school.jpg.JPG"
                alt="Πρώτη μέρα σχολείου"
                height={320}
              />
            }
          />
        </Section>

        <Section title="Μια σκέψη για σένα">
          <p style={longText}>
            Να θυμάσαι πάντα πως ήσουν, είσαι και θα είσαι ένα παιδί πολύ αγαπημένο.
            Από την πρώτη στιγμή που ήρθες κοντά μας, έφερες μαζί σου φως,
            τρυφερότητα και μια καινούρια μορφή χαράς που δεν ξέραμε πως υπάρχει.
          </p>
        </Section>

        <Section title="Ένα γράμμα για εσένα">
          <p style={longText}>
            Μικρή μου Ελπίδα, εύχομαι να προχωράς στη ζωή σου με απαλότητα και
            θάρρος. Να μη φοβηθείς ποτέ να αγαπήσεις, να ονειρευτείς, να προσπαθήσεις
            ξανά. Κι όποτε χρειαστείς ένα μέρος να ξεκουραστείς, να θυμάσαι πως η
            αγκαλιά μας θα είναι πάντα εκεί.
          </p>
        </Section>

        <Section title="Το παραμύθι σου">
          <div style={storybookIntro}>
            <div style={storybookBadge}>Δείγμα από το ηλεκτρονικό παραμύθι σας</div>
            <h3 style={storybookTitle}>Η Ελπίδα και το κόκκινο μπαλόνι</h3>
          </div>

          <Photo
            src="/preview/crown.jpg.JPG"
            alt="Εξώφυλλο παραμυθιού"
            height={320}
          />

          <StoryBlock
            src="/preview/story1.jpg.PNG"
            text="Μια φορά κι έναν καιρό, ήταν ένα κοριτσάκι που το έλεγαν Ελπίδα. Η Ελπίδα είχε μάτια που έλαμπαν σαν μικρές σταγόνες ήλιου και ένα χαμόγελο που έκανε όλο το σπίτι να φωτίζεται. Από μωρό ακόμα, αγαπούσε την αγκαλιά της μαμάς και το τραγούδι που την νανούριζε τα βράδια."
          />

          <StoryBlock
            src="/preview/story2.jpg.PNG"
            text='Ένα πρωί, η Ελπίδα είδε ένα ροζ μπαλόνι να χορεύει κοντά στο παράθυρο. «Μαμά, κοίτα!» είπε με ενθουσιασμό. Το μπαλόνι όμως ανέβηκε πιο ψηλά και στάθηκε εκεί σαν να την καλούσε σε μια μικρή περιπέτεια. Ο μπαμπάς χαμογέλασε. «Νομίζω πως κάποιος ψάχνει μια μικρή εξερευνήτρια», είπε.'
          />

          <StoryBlock
            src="/preview/story3.jpg.PNG"
            text="Η μαμά, ο μπαμπάς, η νονά Ανδριάνα, οι παππούδες και οι αγαπημένοι φίλοι που είχαν γίνει οικογένεια μαζεύτηκαν γύρω της. «Θα το βρούμε μαζί», της είπαν. Και πράγματι, με γέλια, μικρά βηματάκια και πολλή αγάπη, η Ελπίδα έφτασε το μπαλόνι της."
          />

          <StoryBlock
            src="/preview/story4.jpg.PNG"
            text="Εκείνο το βράδυ, η Ελπίδα αποκοιμήθηκε στην αγαπημένη της αγκαλιά, ακούγοντας σιγανά το «νάνι νάνι το μωράκι μου». Και κάπως έτσι κατάλαβε πως κάθε μεγάλη περιπέτεια ξεκινά από κάτι πολύ μικρό: μια αγκαλιά, ένα χαμόγελο και την αγάπη όλων όσων είναι δίπλα σου."
          />

          <StoryBlock
            src="/preview/story5.jpg.PNG"
            text="Και έτσι, η μικρή Ελπίδα κατάλαβε πως οι πιο όμορφες στιγμές δεν είναι αυτές που φτάνουν μακριά, αλλά αυτές που ζεις με όσους αγαπάς. Και το κόκκινο μπαλόνι, εκεί ψηλά, έμοιαζε πια σαν μια μικρή υπόσχεση πως η αγάπη θα βρίσκει πάντα τον δρόμο της πίσω στην καρδιά."
          />
        </Section>

        <div style={ctaWrap}>
          <a href="/buy" style={cta}>
            Ξεκίνα τώρα
          </a>
        </div>
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

function TwoCols({
  left,
  right,
}: {
  left: ReactNode;
  right: ReactNode;
}) {
  return <div style={twoCols}><div>{left}</div><div>{right}</div></div>;
}

function Stack({ children }: { children: ReactNode }) {
  return <div style={stack}>{children}</div>;
}

function StoryBlock({
  src,
  text,
}: {
  src: string;
  text: string;
}) {
  return (
    <div style={storyPage}>
      <Photo src={src} alt="Σελίδα παραμυθιού" height={220} />
      <p style={storyText}>{text}</p>
    </div>
  );
}

function Photo({
  src,
  alt,
  height,
}: {
  src: string;
  alt: string;
  height: number;
}) {
  return (
    <div style={{ ...imageWrap, height }}>
      <img
        src={src}
        alt={alt}
        style={imgStyle}
        onError={(e) => {
          e.currentTarget.style.display = "none";
          const next = e.currentTarget.nextElementSibling as HTMLElement | null;
          if (next) next.style.display = "flex";
        }}
      />
      <div style={fallbackBox}>
        <span style={fallbackText}>{alt}</span>
      </div>
    </div>
  );
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
  height: "140px",
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
  color: "#5c4a43",
};

const card: CSSProperties = {
  background: "#ffffff",
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
  color: "#5c4a43",
};

const twoCols: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1.1fr 0.9fr",
  gap: "18px",
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
  position: "relative",
};

const imgStyle: CSSProperties = {
  width: "100%",
  height: "100%",
  display: "block",
  objectFit: "cover",
};

const fallbackBox: CSSProperties = {
  display: "none",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  minHeight: "180px",
  background: "#f3ebe6",
};

const fallbackText: CSSProperties = {
  fontSize: "18px",
  color: "#7a655b",
  fontWeight: 600,
};

const longText: CSSProperties = {
  fontSize: "20px",
  lineHeight: 1.85,
  margin: 0,
  color: "#5c4a43",
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
  color: "#5c4a43",
};

const ctaWrap: CSSProperties = {
  textAlign: "center",
  marginTop: "28px",
  marginBottom: "10px",
};

const cta: CSSProperties = {
  background: "#d9b8a7",
  padding: "16px 30px",
  borderRadius: "14px",
  textDecoration: "none",
  fontWeight: 700,
  color: "#5c4a43",
  display: "inline-block",
  fontSize: "20px",
};
