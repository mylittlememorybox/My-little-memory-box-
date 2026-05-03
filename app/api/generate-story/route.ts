import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
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

    // 🔥 STORY
    const story = `
Μια φορά κι έναν καιρό ήταν ένα παιδί που το έλεγαν ${childName}.
Ήταν ${age} χρονών, με ${hairColor} μαλλιά και ${eyeColor} μάτια.

Αγαπούσε πολύ τα ${favoriteThings} και το αγαπημένο του ζώο ήταν το ${favoriteAnimal}.
Μια μέρα, θυμήθηκε το ${memory} και ένιωσε χαρά.

Η μαμά του πάντα του έλεγε: "${momMessage}"

Και έτσι έμαθε πως η αγάπη είναι πάντα μαζί του 💖
`;

    // 🔥 IMAGE PROMPTS
    const prompts = [
      `Pixar style, a child named ${childName} playing happily`,
      `Pixar style, child with ${favoriteAnimal}`,
      `Pixar style magical forest adventure`,
    ];

    // 🔥 FAKE IMAGES για να δούμε ότι δουλεύει
    const images = prompts.map(
      (_, i) => `https://picsum.photos/seed/${i}/500/500`
    );

    return NextResponse.json({
      story,
      images,
    });
  } catch (err) {
    console.error(err);

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 }
    );
  }
}
