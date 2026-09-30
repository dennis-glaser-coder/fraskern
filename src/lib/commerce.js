import { products as mockProducts } from '../data/products.js'

// Abstraktionsschicht für den späteren Shopify-Anschluss.
// Heute liefert sie Mock-Daten; später ersetzen wir nur diese Funktionen.
export async function getFeaturedProducts() {
  return mockProducts
}

export async function createCheckout() {
  return { mode: 'demo', checkoutUrl: null }
}
