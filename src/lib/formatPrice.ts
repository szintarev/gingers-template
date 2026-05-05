export function formatPrice(price: number): string {
  const rounded = Math.round(price)
  const formatted = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  return `${formatted} RSD`
}
