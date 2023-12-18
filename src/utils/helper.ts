export function generateGoodRating(min: number, max: number) {
  return (Math.random() * (max - min + 1) + min).toFixed(1);
}

export function firstCap(s: string) {
  return s.slice(0, 1).toUpperCase() + s.slice(1);
}
