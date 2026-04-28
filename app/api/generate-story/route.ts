export async function POST(request: Request) {
  const body = await request.json();

  const response = await fetch(
    "https://hook.eu1.make.com/4vspo1e7o6bmqg3q8rha4vl5o293qz55",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    }
  );

  const text = await response.text();

  try {
    const data = JSON.parse(text);
    return Response.json(data);
  } catch {
    return Response.json({
      story: text,
      image: "",
    });
  }
}
