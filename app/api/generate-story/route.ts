export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://hook.eu1.make.com/4vspo1e7o6bmqg3q8rha4vl5o293qz55",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const text = await response.text();

    return new Response(text, {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        story: "",
        image: "",
        error: "Κάτι πήγε στραβά στη δημιουργία.",
      },
      { status: 500 }
    );
  }
}
