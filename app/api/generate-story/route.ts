import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 300;

type RequestBody = {
  childName?: string;
  age?: string;
  hairColor?: string;
  eyeColor?: string;
  skinTone?: string;
  favoriteAnimal?: string;
  favoriteColor?: string;
  favoriteThings?: string;
  memory?: string;
  momMessage?: string;
};

function value(text: string | undefined, fallback: string) {
  return text && text.trim() !== "" ? text.trim() : fallback;
}
export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY" },
        { status: 500 }
      );
    }

    const body: RequestBody = await req.json();

    const childName = value(body.childName, "το παιδί");
    const age = value(body.age, "μικρό");
    const hairColor = value(body.hairColor, "όμορφα");
    const eyeColor = value(body.eyeColor, "λαμπερά");
    const skinTone = value(body.skinTone, "light skin tone");
    const favoriteAnimal = value(body.favoriteAnimal, "ζωάκι");
    const favoriteColor = value(body.favoriteColor, "ροζ");
    const favoriteThings = value(body.favoriteThings, "παιχνίδια");
    const memory = value(body.memory, "μια όμορφη ανάμνηση");
    const momMessage = value(body.momMessage, "θα είμαι πάντα δίπλα σου");

    // 📖 STORY (ΣΤΑΘΕΡΗ ΠΛΟΚΗ)
    const storyPages = [
      `Η ${childName} ήταν ${age}, με ${hairColor} μαλλιά και ${eyeColor} μάτια. Έπαιζε στον κήπο με όλα όσα αγαπούσε: ${favoriteThings}. Κρατούσε ένα ${favoriteColor} μπαλόνι.`,

      `Ξαφνικά, ένα αεράκι πήρε το ${favoriteColor} μπαλόνι και το πέταξε μακριά. Η ${childName} άρχισε να το κυνηγά.`,

      `Έτρεξε μέσα στον κήπο χωρίς να σταματά, γιατί της θύμιζε κάτι όμορφο: ${memory}.`,

      `Μπροστά της εμφανίστηκε ένα πολύχρωμο δάσος. Εκεί την περίμενε ένα ${favoriteAnimal}.`,

      `Περπάτησαν μαζί μέσα στο μαγικό δάσος γεμάτο χρώματα.`,

      `Ξαφνικά το δάσος σκοτείνιασε και η ${childName} φοβήθηκε λίγο.`,

      `Τότε θυμήθηκε τα λόγια της μαμάς της: "${momMessage}" και άρχισε να λάμπει.`,

      `Το φως την οδήγησε στο ${favoriteColor} μπαλόνι. Το έπιασε ξανά.`,

      `Ξύπνησε στον κήπο κρατώντας το μπαλόνι και ένιωσε αγάπη και δύναμη.`,
    ];

    const story = storyPages.join("\n\n");

    // 🎨 CHARACTER BASE (ΚΡΑΤΑΕΙ ΤΟ ΙΔΙΟ ΠΑΙΔΙ)
    const baseCharacter = `
A young child named ${childName}, ${age} years old,
with ${hairColor} hair, ${eyeColor} eyes, ${skinTone},
same character in every image, same face, same hairstyle, same clothes,
Pixar style 3D, soft lighting, children's book illustration, no text
`;

    const prompts = [
      `${baseCharacter}, playing happily in a garden with a ${favoriteColor} balloon`,
      `${baseCharacter}, watching the ${favoriteColor} balloon fly away`,
      `${baseCharacter}, running through a garden chasing the balloon`,
      `${baseCharacter}, meeting a friendly ${favoriteAnimal} at a colorful forest`,
      `${baseCharacter}, walking in a magical colorful forest with ${favoriteAnimal}`,
      `${baseCharacter}, forest turning dark and mysterious`,
      `${baseCharacter}, glowing with light inside a dark forest`,
      `${baseCharacter}, catching the ${favoriteColor} balloon near a glowing tree`,
      `${baseCharacter}, back in the garden holding the balloon peacefully`,
    ];

    const images: string[] = [];

    for (const prompt of prompts) {
      const res = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-image-1",
          prompt,
          size: "1024x1024",
          quality: "low",
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        console.error(data);
        continue;
      }

      const base64 = data?.data?.[0]?.b64_json;

      if (base64) {
        images.push(`data:image/png;base64,${base64}`);
      }
    }

    return NextResponse.json({
      story,
      images,
      storyPages,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Κάτι πήγε στραβά" },
      { status: 500 }
    );
  }
}
