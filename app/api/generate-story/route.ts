console.log("HAS KEY:", !!process.env.OPENAI_API_KEY);
import OpenAI from "openai";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing OPENAI_API_KEY" }),
        { status: 500 }
      );
    }

    const body = await req.json();

    const {
      childName,
      age,
      hairColor,
      eyeColor,
      favoriteAnimal,
      favoriteColor,
      favoriteThings,
      memory,
      momMessage,
    } = body;

    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    // 📖 Δημιουργία παραμυθιού
    const storyResponse = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content:
            "Είσαι συγγραφέας παιδικών παραμυθιών. Γράψε ένα ζεστό, συναισθηματικό παραμύθι για μικρό παιδί.",
        },
        {
          role: "user",
          content: `
Γράψε ένα παραμύθι με:

Όνομα: ${childName}
Ηλικία: ${age}
Μαλλιά: ${hairColor}
Μάτια: ${eyeColor}
Αγαπημένο ζωάκι: ${favoriteAnimal}
Αγαπημένο χρώμα: ${favoriteColor}
Αγαπημένα πράγματα: ${favoriteThings}
Ανάμνηση: ${memory}
Μήνυμα μαμάς: ${momMessage}

Το παραμύθι να είναι τρυφερό, με αρχή-μέση-τέλος και χαρούμενο τέλος.
`,
        },
      ],
    });

    const story =
      storyResponse.choices[0]?.message?.content || "Δεν δημιουργήθηκε";

    // 🎨 Prompts για εικόνες
    const prompts = [
      `Pixar style illustration of a little girl named ${childName}, ${age} years old, with ${hairColor} hair and ${eyeColor} eyes`,
      `The same girl playing happily with a ${favoriteAnimal}, colorful scene`,
      `The girl in a magical forest, cinematic lighting, ${favoriteColor} tones`,
      `The girl remembering a moment: ${memory}, emotional scene`,
      `Happy ending scene with the girl smiling, warm light, magical`,
    ];

    const images: string[] = [];

    // 🖼 Δημιουργία εικόνων
    for (const prompt of prompts) {
      try {
        const img = await openai.images.generate({
          model: "gpt-image-1",
          prompt,
          size: "1024x1024",
        });

        const base64 = img.data[0].b64_json;

        images.push(`data:image/png;base64,${base64}`);
      } catch (err) {
        console.log("Image error:", err);
      }
    }

    return new Response(
      JSON.stringify({
        story,
        images,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500 }
    );
  }
}
