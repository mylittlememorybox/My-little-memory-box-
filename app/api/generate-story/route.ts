import OpenAI from "openai";

export const runtime = "nodejs";
export const maxDuration = 300;

export async function POST(req: Request) {
  try {
    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return new Response(
        JSON.stringify({
          error: "OPENAI_API_KEY not found in this deployment",
          availableEnv: Object.keys(process.env).filter((key) =>
            key.includes("OPENAI")
          ),
        }),
        { status: 500 }
      );
    }

    const body = await req.json();

    const {
      childName,
      age,
      hairColor,
      eyeColor,
      skinTone,
      favoriteAnimal,
      favoriteColor,
      favoriteThings,
      memory,
      momMessage,
    } = body;

    const openai = new OpenAI({
      apiKey,
    });

    const storyPages = [
      `Η ${childName} ήταν ${age}, με ${hairColor} μαλλιά και ${eyeColor} μάτια. Έπαιζε χαρούμενα στον κήπο με όλα όσα αγαπούσε: ${favoriteThings}. Στο χέρι της κρατούσε ένα ${favoriteColor} μπαλόνι.`,

      `Ξαφνικά, ένα απαλό αεράκι φύσηξε δυνατά και το ${favoriteColor} μπαλόνι ξέφυγε από το χέρι της. Η ${childName} το κοίταξε να ανεβαίνει ψηλά και άρχισε να το κυνηγά.`,

      `Έτρεξε μέσα στον κήπο, πέρασε λουλούδια και μικρά μονοπάτια, αποφασισμένη να το φτάσει. Καθώς έτρεχε, θυμήθηκε ${memory}, και αυτή η ανάμνηση της έδωσε θάρρος.`,

      `Μπροστά της εμφανίστηκε ένα πολύχρωμο δάσος. Στην είσοδο στεκόταν το αγαπημένο της ζωάκι, ένα ${favoriteAnimal}. Την κοίταξε γλυκά, σαν να της έλεγε πως δεν ήταν μόνη.`,

      `Η ${childName} και το ${favoriteAnimal} μπήκαν μαζί στο πολύχρωμο δάσος. Τα δέντρα έλαμπαν, τα φύλλα ψιθύριζαν απαλά και το μονοπάτι έμοιαζε μαγικό.`,

      `Όσο προχωρούσαν, το δάσος άρχισε να σκοτεινιάζει. Η ${childName} ένιωσε λίγο φόβο, αλλά το ${favoriteAnimal} στάθηκε δίπλα της και της έδωσε κουράγιο.`,

      `Τότε θυμήθηκε τα λόγια της μαμάς της: "${momMessage}". Από μέσα της άρχισε να βγαίνει ένα ζεστό φως, που φώτισε ξανά το σκοτεινό μονοπάτι.`,

      `Το φως την οδήγησε σε ένα φωτεινό δέντρο, όπου το ${favoriteColor} μπαλόνι είχε σταθεί απαλά. Η ${childName} άπλωσε το χέρι της και το έπιασε ξανά.`,

      `Ξαφνικά, η ${childName} άνοιξε τα μάτια της και ήταν πάλι στον κήπο. Κρατούσε το ${favoriteColor} μπαλόνι στο χέρι της. Ήταν σαν όνειρο, αλλά το θάρρος και η αγάπη μέσα της ήταν αληθινά.`,
    ];

    const story = storyPages.join("\n\n");

    const baseCharacter = `
Same child character in every image:
${childName}, ${age} years old,
${hairColor} hair, ${eyeColor} eyes, ${skinTone || "natural skin tone"},
same face, same hairstyle, same clothes,
premium children's storybook illustration,
Pixar inspired 3D style, soft cinematic lighting,
warm colors, no text, no letters, no watermark.
`;

    const prompts = [
      `${baseCharacter} Scene 1: The child is playing happily in a cozy garden, holding a ${favoriteColor} balloon, surrounded by flowers and soft sunlight.`,
      `${baseCharacter} Scene 2: The ${favoriteColor} balloon flies away into the sky, the child reaches for it with surprise in the garden.`,
      `${baseCharacter} Scene 3: The child runs through the garden path chasing the ${favoriteColor} balloon, determined and curious.`,
      `${baseCharacter} Scene 4: The child stands in front of a magical colorful forest, meeting a friendly ${favoriteAnimal}.`,
      `${baseCharacter} Scene 5: The child walks inside the colorful magical forest with the friendly ${favoriteAnimal}, glowing leaves around them.`,
      `${baseCharacter} Scene 6: The colorful forest becomes darker and mysterious, the child looks slightly scared but brave, the ${favoriteAnimal} stays close.`,
      `${baseCharacter} Scene 7: Warm golden light glows from inside the child and lights up the dark forest path, emotional hopeful scene.`,
      `${baseCharacter} Scene 8: The child catches the ${favoriteColor} balloon near a glowing colorful tree, the ${favoriteAnimal} smiles nearby.`,
      `${baseCharacter} Scene 9: The child wakes up peacefully back in the garden, holding the ${favoriteColor} balloon, warm morning light, happy ending.`,
    ];

    const images: string[] = [];

    for (const prompt of prompts) {
      try {
        const img = await openai.images.generate({
          model: "gpt-image-1",
          prompt,
          size: "1024x1024",
          quality: "low",
        });

        const base64 = img.data?.[0]?.b64_json;

        if (!base64) continue;

        images.push(`data:image/png;base64,${base64}`);
      } catch (err) {
        console.error("Image error:", err);
      }
    }

    return new Response(
      JSON.stringify({
        story,
        storyPages,
        images,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : "Something went wrong",
      }),
      { status: 500 }
    );
  }
}
