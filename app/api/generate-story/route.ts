export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "https://hook.eu1.make.com/4vspo1e7o6bmqg3q8rha4vl5o293q55",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    return Response.json({
      story: data.story || "",
      image: data.image || "",
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
