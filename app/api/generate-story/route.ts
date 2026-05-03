import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 300;

type RequestBody = {
  childName?: string;
  age?: string;
  hairColor?: string;
  eyeColor?: string;
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
    const favoriteAnimal = value(body.favoriteAnimal, "ζωάκι");
    const favoriteColor = value(body.favoriteColor, "ροζ");
    const favoriteThings = value(body.favoriteThings, "παιχνίδια");
    const memory = value(body.memory, "μια όμορφη ανάμνηση");
    const momMessage = value(body.momMessage, "θα είμαι πάντα δίπλα σου");

    const storyPages = [
      `Η ${childName} ήταν ${age}, με ${hairColor} μαλλιά και ${eyeColor} μάτια. Μια μέρα έπαιζε χαρούμενα στον κήπο με όλα όσα αγαπούσε: ${favoriteThings}. Στο χέρι της κρατούσε ένα ${favoriteColor} μπαλόνι που χόρευε απαλά στον αέρα.`,

      `Ξαφνικά, ένα παιχνιδιάρικο αεράκι φύσηξε δυνατά. Το ${favoriteColor} μπαλόνι γλίστρησε από το χεράκι της και άρχισε να ανεβαίνει ψηλά. Η ${childName} το κοίταξε με έκπληξη και άρχισε να το ακολουθεί.`,

      `Έτρεξε μέσα στον κήπο, πέρασε λουλούδια και μικρά μονοπάτια, χωρίς να σταματήσει να κοιτάζει το μπαλόνι. Ήθελε τόσο πολύ να το ξαναπιάσει, γιατί της θύμιζε κάτι αγαπημένο: ${memory}.`,

      `Τότε, μπροστά της εμφανίστηκε ένα πολύχρωμο δάσος. Στην είσοδό του στεκόταν το αγαπημένο της ζωάκι, ένα ${favoriteAnimal}. Την κοίταξε γλυκά, σαν να της έλεγε: “Έλα, θα σε βοηθήσω.”`,

      `Η ${childName} και το ${favoriteAnimal} περπάτησαν μαζί μέσα στο πολύχρωμο δάσος. Τα δέντρα έλαμπαν με ζεστές αποχρώσεις, τα φύλλα ψιθύριζαν όμορφες μελωδίες και το μπαλόνι φαινόταν κάπου πιο μπροστά.`,

      `Όσο προχωρούσαν, το δάσος άρχισε να σκοτεινιάζει. Τα χρώματα έγιναν πιο απαλά και το μονοπάτι πιο ήσυχο. Η ${childName} ένιωσε λίγο φόβο, αλλά το ${favoriteAnimal} στάθηκε δίπλα της.`,

      `Τότε θυμήθηκε τα λόγια της μαμάς της: “${momMessage}”. Από μέσα της άρχισε να βγαίνει ένα απαλό, ζεστό φως. Το φως μεγάλωσε και φώτισε ξανά το μονοπάτι μπροστά της.`,

      `Με το φως στην καρδιά της, η ${childName} είδε το ${favoriteColor} μπαλόνι μπλεγμένο απαλά κοντά σε ένα φωτεινό δέντρο. Άπλωσε το χέρι της και το έπιασε ξανά. Το ${favoriteAnimal} χαμογέλασε περήφανο.`,

      `Ξαφνικά, η ${childName} άνοιξε τα μάτια της και ήταν πάλι στον κήπο. Κρατούσε το ${favoriteColor} μπαλόνι στο χέρι της. Όλα έμοιαζαν σαν όνειρο, αλλά στην καρδιά της είχε μείνει κάτι αληθινό: θάρρος, αγάπη και φως.`,
    ];

    const story = storyPages.join("\n\n");

    const imagePrompts = [
      `A ${age} child named ${childName}, with ${hairColor} hair and ${eyeColor} eyes, playing happily in a cozy garden, holding a ${favoriteColor} balloon, children's storybook illustration, warm magical atmosphere, no text, no letters, no watermark.`,

      `The same child ${childName} in the garden watching a ${favoriteColor} balloon fly away into the sky, emotional gentle moment, flowers around, cinematic soft lighting, children's storybook illustration, no text, no letters, no watermark.`,

      `The same child ${childName} running through a garden path chasing the ${favoriteColor} balloon, determined and curious, magical soft colors, children's storybook illustration, no text, no letters, no watermark.`,

      `The same child ${childName} standing in front of a colorful magical forest, meeting a friendly ${favoriteAnimal}, warm light, wonder and relief, children's storybook illustration, no text, no letters, no watermark.`,

      `The same child ${childName} walking with a friendly ${favoriteAnimal} inside a colorful magical forest, glowing leaves, dreamy path, warm cinematic lighting, children's storybook illustration, no text, no letters, no watermark.`,

      `The same child ${childName} and the ${favoriteAnimal} inside the colorful forest as it becomes darker and mysterious, child slightly scared but brave, soft shadows, magical atmosphere, no text, no letters, no watermark.`,

      `The same child ${childName} glowing with warm golden light from the heart, illuminating the dark magical forest path, the ${favoriteAnimal} beside the child, emotional hopeful scene, children's storybook illustration, no text, no letters, no watermark.`,

      `The same child ${childName} catching the ${favoriteColor} balloon near a glowing colorful tree inside the magical forest, the ${favoriteAnimal} smiling nearby, joyful magical moment, children's storybook illustration, no text, no letters, no watermark.`,

      `The same child ${childName} waking up peacefully in the garden holding the ${favoriteColor} balloon, the ${favoriteAnimal} nearby like a gentle dream, warm morning light, happy ending, children's storybook illustration, no text, no letters, no watermark.`,
    ];

    const images: string[] = [];

    for (const prompt of imagePrompts) {
      const imageResponse = await fetch(
        "https://api.openai.com/v1/images/generations",
        {
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
            output_format: "png",
            n: 1,
          }),
        }
      );

      const imageData = await imageResponse.json();

      if (!imageResponse.ok) {
        console.error("Image generation error:", imageData);
        throw new Error("Image generation failed");
      }

      const base64 = imageData?.data?.[0]?.b64_json;

      if (!base64) {
        console.error("No image returned:", imageData);
        throw new Error("No image returned");
      }

      images.push(`data:image/png;base64,${base64}`);
    }

    return NextResponse.json({
      story,
      images,
      storyPages,
    });
  } catch (error) {
    console.error("generate-story error:", error);

    return NextResponse.json(
      {
        error: "Δεν δημιουργήθηκε παραμύθι.",
        story: "",
        images: [],
      },
      { status: 500 }
    );
  }
}
