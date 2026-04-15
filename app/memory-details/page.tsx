"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import type {
  CSSProperties,
  ChangeEvent,
  FormEvent,
  ReactNode,
} from "react";
import { Playfair_Display } from "next/font/google";

const font = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const WEBHOOK =
  "https://hook.eu1.make.com/m11u18upfmhcla7dehehgfnogexemto6";

type FormValues = {
  firstHold: string;
  weight: string;
  height: string;
  fromHospital: string;
  firstHomeMoments: string;
  firstSmile: string;

  parents: string;
  unclesAunts: string;
  grandparentsGodparents: string;
  chosenFamilyFriends: string;
  familyValues: string;

  firstTooth: string;
  sleepRitual: string;
  crawlingFirstTime: string;

  stoodUpFirstTime: string;
  firstFall: string;
  ranToMe: string;

  hardDay: string;
  silentBreak: string;
  harderThanExpected: string;
  iContinuedBecause: string;

  proudMoment: string;
  smallButHuge: string;
  endlessHug: string;
  thisIsHappiness: string;

  birthdayAge: string;
  birthdayCakeWith: string;
  birthdayLearned: string;
  birthdayUnforgettableMoment: string;
  birthdayWish: string;

  firstPlayWithKids: string;
  firstFriendship: string;
  excitement: string;
  fear: string;
  iRealizedYouAreGrowing: string;

  firstSchoolDay: string;
  schoolHowIFelt: string;
  schoolHowYouLooked: string;
  schoolWhenILeftYou: string;
  schoolThoughtInMind: string;
  schoolWhenISawYouAgain: string;

  thoughtForYou: string;
  finalThought: string;
  letterForYou: string;
  finalClosing: string;
};

type FileGroups = {
  firstMomentsMedia: File[];
  discoveriesMedia: File[];
  firstStepsMedia: File[];
  emotionalMomentsMedia: File[];
  birthdayMedia: File[];
  socialMomentsMedia: File[];
  schoolMedia: File[];
  photoPageMedia: File[];
  finalThoughtMedia: File[];
};

const initialValues: FormValues = {
  firstHold: "",
  weight: "",
  height: "",
  fromHospital: "",
  firstHomeMoments: "",
  firstSmile: "",

  parents: "",
  unclesAunts: "",
  grandparentsGodparents: "",
  chosenFamilyFriends: "",
  familyValues: "",

  firstTooth: "",
  sleepRitual: "",
  crawlingFirstTime: "",

  stoodUpFirstTime: "",
  firstFall: "",
  ranToMe: "",

  hardDay: "",
  silentBreak: "",
  harderThanExpected: "",
  iContinuedBecause: "",

  proudMoment: "",
  smallButHuge: "",
  endlessHug: "",
  thisIsHappiness: "",

  birthdayAge: "",
  birthdayCakeWith: "",
  birthdayLearned: "",
  birthdayUnforgettableMoment: "",
  birthdayWish: "",

  firstPlayWithKids: "",
  firstFriendship: "",
  excitement: "",
  fear: "",
  iRealizedYouAreGrowing: "",

  firstSchoolDay: "",
  schoolHowIFelt: "",
  schoolHowYouLooked: "",
  schoolWhenILeftYou: "",
  schoolThoughtInMind: "",
  schoolWhenISawYouAgain: "",

  thoughtForYou: "",
  finalThought: "",
  letterForYou: "",
  finalClosing: "",
};

const initialFiles: FileGroups = {
  firstMomentsMedia: [],
  discoveriesMedia: [],
  firstStepsMedia: [],
  emotionalMomentsMedia: [],
  birthdayMedia: [],
  socialMomentsMedia: [],
  schoolMedia: [],
  photoPageMedia: [],
  finalThoughtMedia: [],
};

function names(files: File[]) {
  return files.map((f) => f.name).join(", ");
}

export default function MemoryDetailsPage() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [files, setFiles] = useState<FileGroups>(initialFiles);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">(
    "idle"
  );
  const [errorMessage, setErrorMessage] = useState("");

  const onChange =
    (field: keyof FormValues) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const onFileChange =
    (field: keyof FileGroups) => (e: ChangeEvent<HTMLInputElement>) => {
      const selected = Array.from(e.target.files || []);
      setFiles((prev) => ({ ...prev, [field]: selected }));
    };

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setStatus("sending");
      setErrorMessage("");

      const payload = {
        ...values,
        firstMomentsMedia_names: names(files.firstMomentsMedia),
        discoveriesMedia_names: names(files.discoveriesMedia),
        firstStepsMedia_names: names(files.firstStepsMedia),
        emotionalMomentsMedia_names: names(files.emotionalMomentsMedia),
        birthdayMedia_names: names(files.birthdayMedia),
        socialMomentsMedia_names: names(files.socialMomentsMedia),
        schoolMedia_names: names(files.schoolMedia),
        photoPageMedia_names: names(files.photoPageMedia),
        finalThoughtMedia_names: names(files.finalThoughtMedia),
        submittedAt: new Date().toISOString(),
        source: "mylittlememorybox.gr",
        formType: "memory-details",
      };

      const response = await fetch(WEBHOOK, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Αποτυχία αποστολής.");
      }

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage("Κάτι πήγε στραβά στην αποστολή. Δοκίμασε ξανά.");
    }
  };

  if (status === "success") {
    return (
      <main style={page}>
        <div style={container}>
          <div style={centerTop}>
            <Link href="/" style={{ display: "inline-block" }}>
              <Image
                src="/logo.png"
                alt="My Little Memory Box"
                width={170}
                height={170}
                style={{ objectFit: "contain", cursor: "pointer" }}
                priority
              />
            </Link>
          </div>

          <div style={successCard}>
            <div style={successEmoji}>💛</div>
            <h1 className={font.className} style={successTitle}>
              Η ιστορία σας στάλθηκε
            </h1>
            <p style={successText}>
              Τα στοιχεία σου καταχωρήθηκαν με επιτυχία και είναι έτοιμα για το
              επόμενο στάδιο δημιουργίας του παραμυθιού σας.
            </p>

            <div style={successActions}>
              <Link href="/" style={primaryLink}>
                Επιστροφή στην αρχική
              </Link>
              <Link href="/preview" style={secondaryLink}>
                Δες το preview
              </Link>
            </div>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main style={page}>
      <div style={container}>
        <div style={centerTop}>
          <Link href="/" style={{ display: "inline-block" }}>
            <Image
              src="/logo.png"
              alt="My Little Memory Box"
              width={170}
              height={170}
              style={{ objectFit: "contain", cursor: "pointer" }}
              priority
            />
          </Link>
        </div>

        <div style={heroWrap}>
          <div style={heroBadge}>Η ιστορία σας ξεκινά εδώ</div>
          <h1 className={font.className} style={title}>
            Χτίζουμε μαζί το παραμύθι σας
          </h1>
          <p style={subtitle}>
            Συμπλήρωσε τις στιγμές, τους ανθρώπους, τις σκέψεις και τις
            αναμνήσεις που θέλεις να γίνουν το δικό σας παραμύθι.
          </p>
        </div>

        <form onSubmit={submit}>
          <Section emoji="🤍" badge="Αρχή της ιστορίας" title="Οι πρώτες σου στιγμές">
            <Field label="Η πρώτη φορά που σε κράτησα">
              <textarea
                style={textarea}
                value={values.firstHold}
                onChange={onChange("firstHold")}
              />
            </Field>

            <div style={storyText}>Ήσουν μια σταλίτσα...</div>

            <TwoCols>
              <Field label="Ζύγιζες μόνο">
                <input
                  style={input}
                  value={values.weight}
                  onChange={onChange("weight")}
                />
              </Field>

              <Field label="Είχες ύψος">
                <input
                  style={input}
                  value={values.height}
                  onChange={onChange("height")}
                />
              </Field>
            </TwoCols>

            <Field label="Επιστρέψαμε από το μαιευτήριο">
              <textarea
                style={textarea}
                value={values.fromHospital}
                onChange={onChange("fromHospital")}
              />
            </Field>

            <Field label="Οι πρώτες στιγμές σου στο σπίτι μας ήταν">
              <textarea
                style={textarea}
                value={values.firstHomeMoments}
                onChange={onChange("firstHomeMoments")}
              />
            </Field>

            <Field label="Η πρώτη φορά που χαμογέλασες">
              <textarea
                style={textarea}
                value={values.firstSmile}
                onChange={onChange("firstSmile")}
              />
            </Field>

            <UploadBox
              title="Φωτογραφίες & βίντεο από τις πρώτες σου στιγμές"
              files={files.firstMomentsMedia}
              onChange={onFileChange("firstMomentsMedia")}
              multiple
            />
          </Section>

          <Section emoji="🌍" badge="Οι άνθρωποί σου" title="Ο κόσμος σου">
            <Field label="Οι γονείς σου">
              <textarea
                style={textarea}
                value={values.parents}
                onChange={onChange("parents")}
              />
            </Field>

            <Field label="Οι θείοι και οι θείες">
              <textarea
                style={textarea}
                value={values.unclesAunts}
                onChange={onChange("unclesAunts")}
              />
            </Field>

            <Field label="Οι παππούδες και οι γιαγιάδες και οι νονοί/ες σου">
              <textarea
                style={textarea}
                value={values.grandparentsGodparents}
                onChange={onChange("grandparentsGodparents")}
              />
            </Field>

            <Field label="Οι φίλοι που έγιναν οικογένεια">
              <textarea
                style={textarea}
                value={values.chosenFamilyFriends}
                onChange={onChange("chosenFamilyFriends")}
              />
            </Field>

            <Field label="Οι αξίες που θέλουμε να σου δώσουμε σαν γονείς">
              <textarea
                style={textarea}
                value={values.familyValues}
                onChange={onChange("familyValues")}
              />
            </Field>
          </Section>

          <Section emoji="✨" badge="Μικρές κατακτήσεις" title="Οι πρώτες σου ανακαλύψεις">
            <Field label="Το πρώτο σου δοντάκι (και το πρώτο μου ξενύχτι)">
              <textarea
                style={textarea}
                value={values.firstTooth}
                onChange={onChange("firstTooth")}
              />
            </Field>

            <Field label="Λάτρευες να σε νανουρίζω έτσι">
              <textarea
                style={textarea}
                value={values.sleepRitual}
                onChange={onChange("sleepRitual")}
              />
            </Field>

            <Field label="Η πρώτη φορά που μπουσούλησες">
              <textarea
                style={textarea}
                value={values.crawlingFirstTime}
                onChange={onChange("crawlingFirstTime")}
              />
            </Field>

            <UploadBox
              title="Φωτογραφίες & βίντεο από τις πρώτες ανακαλύψεις"
              files={files.discoveriesMedia}
              onChange={onFileChange("discoveriesMedia")}
              multiple
            />
          </Section>

          <Section emoji="👣" badge="Μεγαλώνεις" title="Τα πρώτα σου βήματα">
            <Field label="Η πρώτη φορά που σηκώθηκες όρθιο">
              <textarea
                style={textarea}
                value={values.stoodUpFirstTime}
                onChange={onChange("stoodUpFirstTime")}
              />
            </Field>

            <Field label="Η πρώτη σου τούμπα">
              <textarea
                style={textarea}
                value={values.firstFall}
                onChange={onChange("firstFall")}
              />
            </Field>

            <Field label="Η πρώτη φορά που έτρεξες προς το μέρος μου">
              <textarea
                style={textarea}
                value={values.ranToMe}
                onChange={onChange("ranToMe")}
              />
            </Field>

            <UploadBox
              title="Φωτογραφίες & βίντεο από τα πρώτα βήματα"
              files={files.firstStepsMedia}
              onChange={onFileChange("firstStepsMedia")}
              multiple
            />
          </Section>

          <Section emoji="🌧️" badge="Αληθινές μέρες" title="Οι μέρες που δεν ήταν εύκολες">
            <Field label="Μια μέρα που ένιωσα ότι δεν τα κατάφερνα">
              <textarea
                style={textarea}
                value={values.hardDay}
                onChange={onChange("hardDay")}
              />
            </Field>

            <Field label="Μια στιγμή που λύγισα (αλλά δεν το έδειξα)">
              <textarea
                style={textarea}
                value={values.silentBreak}
                onChange={onChange("silentBreak")}
              />
            </Field>

            <Field label="Κάτι που με δυσκόλεψε περισσότερο απ’ όσο περίμενα">
              <textarea
                style={textarea}
                value={values.harderThanExpected}
                onChange={onChange("harderThanExpected")}
              />
            </Field>

            <Field label="Και παρ’ όλα αυτά... συνέχισα γιατί">
              <textarea
                style={textarea}
                value={values.iContinuedBecause}
                onChange={onChange("iContinuedBecause")}
              />
            </Field>
          </Section>

          <Section emoji="💫" badge="Στιγμές καρδιάς" title="Οι στιγμές που με έκανες να νιώθω τα πάντα">
            <Field label="Η στιγμή που ένιωσα περήφανη για σένα">
              <textarea
                style={textarea}
                value={values.proudMoment}
                onChange={onChange("proudMoment")}
              />
            </Field>

            <Field label="Κάτι μικρό που για μένα ήταν τεράστιο">
              <textarea
                style={textarea}
                value={values.smallButHuge}
                onChange={onChange("smallButHuge")}
              />
            </Field>

            <Field label="Μια αγκαλιά που δεν ήθελα να τελειώσει">
              <textarea
                style={textarea}
                value={values.endlessHug}
                onChange={onChange("endlessHug")}
              />
            </Field>

            <Field label='Η στιγμή που σκέφτηκα "αυτό είναι η ευτυχία"'>
              <textarea
                style={textarea}
                value={values.thisIsHappiness}
                onChange={onChange("thisIsHappiness")}
              />
            </Field>

            <UploadBox
              title="Φωτογραφίες & βίντεο ιδιαίτερων στιγμών"
              files={files.emotionalMomentsMedia}
              onChange={onFileChange("emotionalMomentsMedia")}
              multiple
            />
          </Section>

          <Section emoji="🎂" badge="Γιορτή" title="Για τα γενέθλιά σου">
            <Field label="Σήμερα γίνεσαι ... ετών">
              <input
                style={input}
                value={values.birthdayAge}
                onChange={onChange("birthdayAge")}
              />
            </Field>

            <Field label="Έσβησες την τούρτα σου με αυτούς τους αγαπημένους σου">
              <textarea
                style={textarea}
                value={values.birthdayCakeWith}
                onChange={onChange("birthdayCakeWith")}
              />
            </Field>

            <Field label="Κάτι που έμαθες">
              <textarea
                style={textarea}
                value={values.birthdayLearned}
                onChange={onChange("birthdayLearned")}
              />
            </Field>

            <Field label="Μία στιγμή που δεν θα ξεχάσω από αυτή τη χρονιά">
              <textarea
                style={textarea}
                value={values.birthdayUnforgettableMoment}
                onChange={onChange("birthdayUnforgettableMoment")}
              />
            </Field>

            <Field label="Η ευχή μου για σένα">
              <textarea
                style={textarea}
                value={values.birthdayWish}
                onChange={onChange("birthdayWish")}
              />
            </Field>

            <UploadBox
              title="Φωτογραφίες & βίντεο γενεθλίων"
              files={files.birthdayMedia}
              onChange={onFileChange("birthdayMedia")}
              multiple
            />
          </Section>

          <Section emoji="🧸" badge="Έξω στον κόσμο" title="Τα πρώτα σου βήματα προς τον κόσμο">
            <Field label="Η πρώτη φορά που έπαιξες με άλλα παιδάκια">
              <textarea
                style={textarea}
                value={values.firstPlayWithKids}
                onChange={onChange("firstPlayWithKids")}
              />
            </Field>

            <Field label='Η πρώτη σου "φιλία" όπως την είδα εγώ'>
              <textarea
                style={textarea}
                value={values.firstFriendship}
                onChange={onChange("firstFriendship")}
              />
            </Field>

            <Field label="Κάτι που σε ενθουσίασε πολύ">
              <textarea
                style={textarea}
                value={values.excitement}
                onChange={onChange("excitement")}
              />
            </Field>

            <Field label="Κάτι που σε φόβισε">
              <textarea
                style={textarea}
                value={values.fear}
                onChange={onChange("fear")}
              />
            </Field>

            <Field label="Η στιγμή που κατάλαβα ότι μεγαλώνεις">
              <textarea
                style={textarea}
                value={values.iRealizedYouAreGrowing}
                onChange={onChange("iRealizedYouAreGrowing")}
              />
            </Field>

            <UploadBox
              title="Φωτογραφίες κοινωνικών στιγμών"
              files={files.socialMomentsMedia}
              onChange={onFileChange("socialMomentsMedia")}
              multiple
            />
          </Section>

          <Section emoji="🏫" badge="Μεγάλο βήμα" title="Η πρώτη σου μέρα στο σχολείο">
            <Field label="Σήμερα πήγες για πρώτη φορά σχολείο...">
              <textarea
                style={textarea}
                value={values.firstSchoolDay}
                onChange={onChange("firstSchoolDay")}
              />
            </Field>

            <Field label="Και εγώ ένιωσα">
              <textarea
                style={textarea}
                value={values.schoolHowIFelt}
                onChange={onChange("schoolHowIFelt")}
              />
            </Field>

            <Field label="Εσύ έδειχνες">
              <textarea
                style={textarea}
                value={values.schoolHowYouLooked}
                onChange={onChange("schoolHowYouLooked")}
              />
            </Field>

            <Field label="Η στιγμή που σε άφησα">
              <textarea
                style={textarea}
                value={values.schoolWhenILeftYou}
                onChange={onChange("schoolWhenILeftYou")}
              />
            </Field>

            <Field label="Η σκέψη που δεν έφυγε από το μυαλό μου">
              <textarea
                style={textarea}
                value={values.schoolThoughtInMind}
                onChange={onChange("schoolThoughtInMind")}
              />
            </Field>

            <Field label="Όταν σε ξαναείδα">
              <textarea
                style={textarea}
                value={values.schoolWhenISawYouAgain}
                onChange={onChange("schoolWhenISawYouAgain")}
              />
            </Field>

            <UploadBox
              title="Φωτογραφίες σχολείου"
              files={files.schoolMedia}
              onChange={onFileChange("schoolMedia")}
              multiple
            />
          </Section>

          <Section emoji="🌷" badge="Μικρή παύση" title="Μια σκέψη για σένα">
            <textarea
              style={{ ...textarea, minHeight: "120px" }}
              value={values.thoughtForYou}
              onChange={onChange("thoughtForYou")}
            />
          </Section>

          <Section emoji="📚" badge="Αναμνήσεις σε εικόνες" title="Μια σελίδα με φωτογραφίες">
            <UploadBox
              title="Φωτογραφίες αυτής της σελίδας"
              files={files.photoPageMedia}
              onChange={onFileChange("photoPageMedia")}
              multiple
            />
          </Section>

          <Section emoji="💌" badge="Λίγο πριν το τέλος" title="Μια τελευταία σκέψη">
            <textarea
              style={{ ...textarea, minHeight: "120px" }}
              value={values.finalThought}
              onChange={onChange("finalThought")}
            />

            <UploadBox
              title="Φωτογραφία για αυτή τη σελίδα"
              files={files.finalThoughtMedia}
              onChange={onFileChange("finalThoughtMedia")}
            />
          </Section>

          <Section emoji="🕊️" badge="Το πιο προσωπικό" title="Ένα γράμμα για εσένα">
            <textarea
              style={{ ...textarea, minHeight: "220px" }}
              value={values.letterForYou}
              onChange={onChange("letterForYou")}
            />
          </Section>

          <Section emoji="✨" badge="Το κλείσιμο" title="Το τελικό κλείσιμο της ιστορίας">
            <textarea
              style={{ ...textarea, minHeight: "160px" }}
              value={values.finalClosing}
              onChange={onChange("finalClosing")}
            />
          </Section>

          <div style={submitCard}>
            <div style={submitTop}>
              <span style={submitEmoji}>💛</span>
              <h2 className={font.className} style={submitTitle}>
                Έτοιμη να συνεχίσεις;
              </h2>
            </div>

            {status === "error" ? <div style={errorBox}>{errorMessage}</div> : null}

            <button type="submit" style={submitButton} disabled={status === "sending"}>
              {status === "sending" ? "Αποστολή..." : "Υποβολή της ιστορίας σας"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <div>
      <label style={labelStyle}>{label}</label>
      {children}
    </div>
  );
}

function TwoCols({ children }: { children: ReactNode }) {
  return <div style={twoCols}>{children}</div>;
}

function Section({
  emoji,
  badge,
  title,
  children,
}: {
  emoji: string;
  badge: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section style={sectionCard}>
      <div style={sectionTop}>
        <div style={emojiCircle}>{emoji}</div>
        <div style={sectionBadge}>{badge}</div>
      </div>

      <h2 className={font.className} style={sectionTitle}>
        {title}
      </h2>

      <div style={divider}>✦ ✿ ✦</div>

      <div style={sectionBody}>{children}</div>
    </section>
  );
}

function UploadBox({
  title,
  files,
  onChange,
  multiple = false,
}: {
  title: string;
  files: File[];
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  multiple?: boolean;
}) {
  return (
    <div style={uploadCard}>
      <div style={uploadTitle}>{title}</div>
      <div style={uploadText}>
        {files.length > 0 ? `Επιλεγμένα αρχεία: ${names(files)}` : "Δεν έχουν επιλεγεί αρχεία ακόμα."}
      </div>
      <input
        type="file"
        accept="image/*,video/*"
        multiple={multiple}
        onChange={onChange}
        style={input}
      />
    </div>
  );
}

const page: CSSProperties = {
  minHeight: "100vh",
  background: "linear-gradient(180deg, #FCF6F1 0%, #F8EEE7 50%, #F5ECE4 100%)",
  padding: "34px 16px 80px",
};

const container: CSSProperties = {
  maxWidth: "980px",
  margin: "0 auto",
};

const centerTop: CSSProperties = {
  textAlign: "center",
  marginBottom: "10px",
};

const heroWrap: CSSProperties = {
  textAlign: "center",
  marginBottom: "22px",
};

const heroBadge: CSSProperties = {
  display: "inline-block",
  padding: "8px 14px",
  borderRadius: "999px",
  backgroundColor: "#F1DED2",
  color: "#8A6E61",
  fontSize: "13px",
  fontWeight: 600,
  marginBottom: "12px",
};

const title: CSSProperties = {
  fontSize: "38px",
  color: "#6F5A50",
  margin: "0 0 10px",
  lineHeight: 1.15,
};

const subtitle: CSSProperties = {
  color: "#8A7B73",
  fontSize: "17px",
  lineHeight: "1.7",
  maxWidth: "760px",
  margin: "0 auto",
};

const sectionCard: CSSProperties = {
  backgroundColor: "rgba(255,248,243,0.96)",
  borderRadius: "28px",
  padding: "24px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  border: "1px solid rgba(216,197,185,0.35)",
  marginBottom: "16px",
};

const sectionTop: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "10px",
  flexWrap: "wrap",
};

const emojiCircle: CSSProperties = {
  width: "40px",
  height: "40px",
  borderRadius: "999px",
  backgroundColor: "#F8E8DE",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
};

const sectionBadge: CSSProperties = {
  display: "inline-block",
  padding: "6px 12px",
  borderRadius: "999px",
  backgroundColor: "#F4E4DA",
  color: "#8B6F5A",
  fontSize: "13px",
  fontWeight: 600,
};

const sectionTitle: CSSProperties = {
  fontSize: "29px",
  color: "#7D6457",
  margin: 0,
};

const divider: CSSProperties = {
  textAlign: "left",
  fontSize: "16px",
  color: "#C2A696",
  letterSpacing: "4px",
  margin: "6px 0 14px",
};

const sectionBody: CSSProperties = {
  display: "grid",
  gap: "10px",
};

const labelStyle: CSSProperties = {
  fontSize: "15px",
  fontWeight: 600,
  color: "#6B564C",
  display: "block",
  marginBottom: "6px",
};

const input: CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: "14px",
  border: "1px solid #D8C5B9",
  fontSize: "15px",
  marginBottom: "10px",
  backgroundColor: "#fff",
  color: "#5E4B42",
  boxSizing: "border-box",
};

const textarea: CSSProperties = {
  ...input,
  minHeight: "92px",
  resize: "vertical",
};

const twoCols: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px",
};

const storyText: CSSProperties = {
  fontStyle: "italic",
  color: "#8A7B73",
  marginBottom: "10px",
  fontSize: "16px",
};

const uploadCard: CSSProperties = {
  backgroundColor: "#FFF9F6",
  border: "1px dashed #D8C5B9",
  borderRadius: "18px",
  padding: "14px",
  marginTop: "8px",
};

const uploadTitle: CSSProperties = {
  fontSize: "15px",
  fontWeight: 600,
  color: "#6B564C",
  marginBottom: "6px",
};

const uploadText: CSSProperties = {
  fontSize: "13px",
  color: "#8A7F7A",
  marginBottom: "8px",
  lineHeight: "1.5",
};

const submitCard: CSSProperties = {
  backgroundColor: "rgba(255,248,243,0.96)",
  borderRadius: "28px",
  padding: "24px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
  border: "1px solid rgba(216,197,185,0.35)",
};

const submitTop: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "14px",
};

const submitEmoji: CSSProperties = {
  fontSize: "22px",
};

const submitTitle: CSSProperties = {
  fontSize: "28px",
  color: "#7D6457",
  margin: 0,
};

const submitButton: CSSProperties = {
  width: "100%",
  padding: "16px 22px",
  borderRadius: "18px",
  border: "none",
  backgroundColor: "#EAD7CF",
  color: "#5C4A42",
  fontSize: "17px",
  fontWeight: 600,
  cursor: "pointer",
};

const errorBox: CSSProperties = {
  backgroundColor: "#FFF1EF",
  color: "#A14B42",
  border: "1px solid #F2C7C1",
  borderRadius: "14px",
  padding: "12px 14px",
  marginBottom: "14px",
  fontSize: "14px",
};

const successCard: CSSProperties = {
  backgroundColor: "rgba(255,248,243,0.96)",
  borderRadius: "30px",
  padding: "38px 24px",
  boxShadow: "0 12px 32px rgba(0,0,0,0.05)",
  border: "1px solid rgba(216,197,185,0.35)",
  textAlign: "center",
  maxWidth: "760px",
  margin: "0 auto",
};

const successEmoji: CSSProperties = {
  fontSize: "42px",
  marginBottom: "10px",
};

const successTitle: CSSProperties = {
  fontSize: "38px",
  color: "#7D6457",
  margin: "0 0 12px",
};

const successText: CSSProperties = {
  fontSize: "17px",
  lineHeight: "1.7",
  color: "#7A6A62",
  maxWidth: "620px",
  margin: "0 auto 24px",
};

const successActions: CSSProperties = {
  display: "flex",
  gap: "12px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const primaryLink: CSSProperties = {
  display: "inline-block",
  padding: "14px 22px",
  borderRadius: "16px",
  backgroundColor: "#EAD7CF",
  color: "#5C4A42",
  fontWeight: 600,
  textDecoration: "none",
};

const secondaryLink: CSSProperties = {
  display: "inline-block",
  padding: "14px 22px",
  borderRadius: "16px",
  backgroundColor: "#fff",
  color: "#6D5A51",
  fontWeight: 600,
  textDecoration: "none",
  border: "1px solid #E2D0C5",
};
