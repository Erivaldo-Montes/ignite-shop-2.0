import Stripe from 'stripe'

export const stripe = new Stripe(process.env.STRIPE_SECRETE_KEY as string, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'ignite shop',
  },
})
