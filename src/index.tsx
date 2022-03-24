export function multiply(a: number, b: number, c: number): Promise<number> {
  return Promise.resolve(a * b * c);
}
