export function calculatePowerStats(metahumansArr) {
  const atributos = Object.keys(metahumansArr[0].powerstats);
  const resultado = {};

  atributos.forEach(atributo => {
    const valorHeroi1 = metahumansArr[1].powerstats[atributo];
    const valorHeroi2 = metahumansArr[0].powerstats[atributo];

    resultado[atributo] = valorHeroi1 > valorHeroi2;
  });

  console.log(resultado)
  return resultado;
}