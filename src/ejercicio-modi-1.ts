/**
 * Enum with the different allergens
 */
enum Allergens {
  "Gato",
  "Polen",
  "Chocolate",
  "Tomate",
  "Fresa",
  "Marisco",
  "Cacahuete",
  "Huevo",
}

/**
 * Function that receives a number and returns an array of strings with the alergens
 * @param N Is the number that represents allergens
 * @returns Allergens that the number represents
 */
export function getAllergens(N: number): string[] | undefined {
  const result: string[] = [];
  if (N < 0) {
    return undefined;
  }
  const binary: string = N.toString(2).slice(-8).padStart(8, "0");
  for (let i = binary.length - 1; i >= 0; i--) {
    if (binary[i] === "1") {
      result.push(Allergens[i]);
    }
  }
  return result;
}
