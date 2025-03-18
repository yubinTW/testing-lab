export function myCustomAdd(a: number, b: number): number {
  return a + b
}

export function fabonacci(n: number): number {
  if (n === 1 || n === 2) {
    return 1
  }
  return fabonacci(n - 1) + fabonacci(n - 2)
}
