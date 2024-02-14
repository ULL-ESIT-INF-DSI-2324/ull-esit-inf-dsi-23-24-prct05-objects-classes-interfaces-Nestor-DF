function esPrimo(numero: number): boolean {
  if (numero <= 1) {
    return false;
  }
  
  for (let i = 2; i <= Math.sqrt(numero); i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  
  return true;
}

export function contieneSoloPrimos(array: number[]): boolean {
  for (const numero of array) {
    if (!esPrimo(numero)) {
      return false;
    }
  }
  
  return true;
}