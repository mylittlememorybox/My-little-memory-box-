export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      "ΤΟ_WEBHOOK_LINK_ΣΟΥ",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      }
    );

    const data = await response.json();

    return Response.json(data);
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
