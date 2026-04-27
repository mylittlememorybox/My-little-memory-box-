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

    const story = await response.text();

    return new Response(story, {
      status: 200,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  } catch (error) {
    console.error(error);

    return new Response("Κάτι πήγε στραβά στη δημιουργία του παραμυθιού.", {
      status: 500,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
      },
    });
  }
}
