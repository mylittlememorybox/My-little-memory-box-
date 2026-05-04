import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST() {
  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",

      line_items: [
        {
          price_data: {
            currency: "eur",
            product_data: {
              name: "My Little Memory Box",
              description: "Εικονογραφημένο παραμύθι & Memory Box",
            },
            unit_amount: 2000, // 20€
          },
          quantity: 1,
        },
      ],

      success_url:
        "https://mylittlememorybox.gr/payment-success",
      cancel_url:
        "https://mylittlememorybox.gr/payment-cancel",
    });

    return new Response(
      JSON.stringify({ url: session.url }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Stripe error:", error);

    return new Response(
      JSON.stringify({ error: "Stripe error" }),
      { status: 500 }
    );
  }
}
