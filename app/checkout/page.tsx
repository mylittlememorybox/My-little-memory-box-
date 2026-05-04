"use client";

import { useState } from "react";

export default function CheckoutPage() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);

    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
      });

      const data = await res.json();

      if (!data.url) {
        alert("Δεν ξεκίνησε η πληρωμή.");
        return;
      }

      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      alert("Κάτι πήγε στραβά.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "#F6EFE8",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        color: "#5E4B42",
      }}
    >
      <div
        style={{
          maxWidth: "480px",
          width: "100%",
          backgroundColor: "#FFF8F3",
          borderRadius: "28px",
          padding: "28px 22px",
          textAlign: "center",
          boxShadow: "0 10px 28px rgba(0,0,0,0.08)",
        }}
      >
        <img
          src="/logo.png"
          alt="My Little Memory Box"
          style={{ width: "180px", maxWidth: "70vw", marginBottom: "22px" }}
        />

        <h1 style={{ color: "#7D6457", fontSize: "26px", marginBottom: "12px" }}>
          My Little Memory Box
        </h1>

        <p style={{ fontSize: "17px", lineHeight: "1.7", marginBottom: "8px" }}>
          Εικονογραφημένο προσωποποιημένο παραμύθι & Memory Box.
        </p>

        <p style={{ fontSize: "22px", fontWeight: 700, marginBottom: "24px" }}>
          29,99€ + ΦΠΑ
        </p>

        <button
          onClick={handleCheckout}
          disabled={loading}
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "999px",
            border: "none",
            backgroundColor: "#DCC4B8",
            color: "#4F4039",
            fontSize: "18px",
            fontWeight: 700,
            cursor: loading ? "not-allowed" : "pointer",
          }}
        >
          {loading ? "Μεταφορά στο Stripe..." : "Πληρωμή"}
        </button>
      </div>
    </main>
  );
}
import Stripe from "stripe";

export const runtime = "nodejs";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string);

export async function POST() {
  try {
    if (!process.env.STRIPE_SECRET_KEY) {
      return new Response(
        JSON.stringify({ error: "Missing STRIPE_SECRET_KEY" }),
        { status: 500 }
      );
    }

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
            unit_amount: 2999,
          },
          quantity: 1,
        },
      ],

      automatic_tax: {
        enabled: true,
      },

      success_url: "https://mylittlememorybox.gr/payment-success",
      cancel_url: "https://mylittlememorybox.gr/payment-cancel",
    });

    return new Response(JSON.stringify({ url: session.url }), {
      status: 200,
    });
  } catch (error) {
    console.error("Stripe checkout error:", error);

    return new Response(JSON.stringify({ error: "Stripe checkout failed" }), {
      status: 500,
    });
  }
}
