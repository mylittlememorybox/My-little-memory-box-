import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const {
    childName,
    age,
    hairColor,
    eyeColor,
    favoriteAnimal,
    favoriteColor,
  } = body;

  try {
    // 🔹 1. Φτιάχνουμε story + prompts
    const storyRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "Είσαι συγγραφέας παιδικών παραμυθιών.",
          },
          {
            role: "user",
            content: `
ΜΗΝ αλλάξεις την πλοκή.

Η ιστορία έχει 9 σκηνές:
1. Παιχνίδι στον κήπο
2. Χάσιμο μπαλονιού
3. Κυνήγι μπαλονιού
4. Εμφάνιση αγαπημένου ζώου μπροστά από πολύχρωμο δάσος
5. Περίπατος στο πολύχρωμο δάσος
6. Σκοτείνιασμα δάσους
7. Φως από το παιδί
8. Πιάσιμο μπαλονιού
9. Επιστροφή στον κήπο

Προσωποποίησε:
Όνομα: ${childName}
Ηλικία: ${age}
Μαλλιά: ${hairColor}
Μάτια: ${eyeColor}
Αγαπημένο ζώο: ${favoriteAnimal}
Αγαπημένο χρώμα: ${favoriteColor}

Επέστρεψε ΑΥΣΤΗΡΑ JSON:

{
  "story": "...",
  "illustrationPrompts": ["...","...","...","...","...","...","...","...","..."]
}
`,
          },
        ],
      }),
    });

    const storyData = await storyRes.json();
    const text = storyData.choices[0].message.content;

    const parsed = JSON.parse(text);

    const story = parsed.story;
    const prompts = parsed.illustrationPrompts;

    // 🔹 2. Δημιουργία εικόνων
    const images: string[] = [];

    for (const prompt of prompts) {
      const imgRes = await fetch("https://api.openai.com/v1/images/generations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-image-1",
          prompt: `
${prompt}

Pixar style 3D illustration, cinematic lighting, soft shadows, warm colors, children's storybook, same character, no text
`,
          size: "1024x1024",
        }),
      });

      const imgData = await imgRes.json();

      const base64 = imgData.data[0].b64_json;

      const imageUrl = `data:image/png;base64,${base64}`;

      images.push(imageUrl);
    }

    return NextResponse.json({
      story,
      images,
    });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "error" }, { status: 500 });
  }
}
