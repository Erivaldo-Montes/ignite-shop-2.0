import { NextApiRequest, NextApiResponse } from "next";
import { stripe } from "../../lib/stripe";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { priceIds } = req.body;

  // caso o metodo de requisição não seja post
  if (req.method !== "POST") {
    return res.status(405).json({ error: "mehtod not allowed" });
  }

  // caso não seja enviado o priceID
  if (priceIds.lenght === 0) {
    return res.status(400).json({ error: "price not found" });
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`;
  const cancelUrl = `${process.env.NEXT_URL}/`;

  // cria uma sessão de checkout no stripe
  const chekoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: "payment",
    line_items: priceIds,
  });

  return res.status(201).json({
    checkoutUrl: chekoutSession.url,
  });
}

/**
 * è posiivel criar rotas de back-end no servidor node do nextJS
 * como é server side pode-se usar dados sensiveis
 *
 */
