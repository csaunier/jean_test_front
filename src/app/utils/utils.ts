export const formatCurrency = (currency: string) => {
  const value = Number.parseFloat(currency)
  if(isNaN(value)) return undefined
  return new Intl.NumberFormat("en", { style: "currency", currency: "USD" }).format(
    Number.parseFloat(currency)
  )
}