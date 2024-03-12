function calcularFatorial(n) {
  let fatorial = 1;

  for (let i = 1; i <= n; i++) {
    fatorial *= i;
  }

  return fatorial;
}
