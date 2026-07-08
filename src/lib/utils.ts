import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return `R$ ${price.toFixed(2).replace(".", ",")}`
}

export function formatPriceShort(price: number): string {
  return `R$ ${price}`
}

export function pricePerDay(price: number, days: number): string {
  const perDay = price / days
  return `menos de R$ ${Math.ceil(perDay)}/dia`
}

export function calculateSavings(basePrice: number, currentPrice: number, baseMonths: number, currentMonths: number): number {
  const basePerMonth = basePrice / baseMonths
  const currentPerMonth = currentPrice / currentMonths
  return Math.round((1 - currentPerMonth / basePerMonth) * 100)
}
