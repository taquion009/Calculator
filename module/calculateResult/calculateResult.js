const calculateResult = (
  array,
  getGradosReverse,
  errors,
  pocentajes,
  potencia,
  grados,
  raices,
  logaritmos,
  operacionE,
  multiplication,
  SumasYrestas,
  Signos,
  parentesis,
  potenciaParentesis,
  poteciaADiez,
  sinCosTan
) => {
  let clonearray = JSON.parse(JSON.stringify(array)),
    newarray = [],
    i = 0;
  for (let e = 0; e < clonearray.length; e++) {
    potencia(clonearray, e);
    raices(clonearray, e);
    logaritmos(clonearray, e);
    operacionE(clonearray, e);
    sinCosTan(clonearray, i)
  }
  for (let e = 0; e < clonearray.length; e++) {
    grados(clonearray, e, getGradosReverse);
    potencia(clonearray, e);
    raices(clonearray, e);
    logaritmos(clonearray, e);
    operacionE(clonearray, e);
    sinCosTan(clonearray, i)
    if (typeof clonearray[e] === "object") {
      let res = calculateResult(
        clonearray[e],
        getGradosReverse,
        errors,
        pocentajes,
        potencia,
        grados,
        raices,
        logaritmos,
        operacionE,
        multiplication,
        SumasYrestas,
        Signos,
        parentesis,
        potenciaParentesis,
        poteciaADiez,
        sinCosTan
      )[0];

      if (
        potenciaParentesis([res, clonearray[e + 1]], 0) ||
        potenciaParentesis([res, clonearray[e + 1], clonearray[e + 2]], 0)
      ) {
        if (potenciaParentesis([res, clonearray[e + 1]], 0)) {
          res = potenciaParentesis([res, clonearray[e + 1]], 0);
          clonearray.splice(e + 1, 1);
        } else if (
          potenciaParentesis([res, clonearray[e + 1], clonearray[e + 2]], 0)
        ) {
          res = potenciaParentesis(
            [res, clonearray[e + 1], clonearray[e + 2]],
            0
          );
          clonearray.splice(e + 1, 2);
        }
        if (/(\d+[.]{0,1}\d*)/.test(clonearray[e - 1])) {
          newarray.pop();
          newarray.push(...multiplication([clonearray[e - 1], "x", res], 0));
        } else {
          newarray.push(res);
        }
      } else if (/(\d+[.]{0,1}\d*)/.test(clonearray[e - 1])) {
        newarray.pop();
        newarray.push(...multiplication([clonearray[e - 1], "x", res], 0));
      } else {
        newarray.push(res);
      }
    } else if (clonearray[e] === "π") {
      newarray.push(String(Math.PI));
    } else if (clonearray[e] === "𝒆") {
      newarray.push(String(Math.exp(1)));
    } else {
      newarray.push(clonearray[e]);
    }
  }
  clonearray = [...newarray];
  let limit = 0;

  while (clonearray.length !== 1) {
    limit++;
    if (i === clonearray.length && i !== 0) i = 0;
    //errorres
    if (limit >= 20) {
      clonearray = ["Syntax ERROR"];
    }
    if (parentesis(clonearray, i)) {
      //operaciones de parentesis
    } else if (errors(clonearray, i)) {
      clonearray = ["Syntax ERROR"];
      //operaciones de errores
    } else if (pocentajes(clonearray, i)) {
      //operaciones de pocentajes
    } else if (potencia(clonearray, i)) {
      //operaciones de potecias
      i = 0;
    } else if (raices(clonearray, i)) {
      //operaciones de raices
      i = 0;
    } else if (logaritmos(clonearray, i)) {
      //operaciones de logaritmos
      i = 0;
    } else if (operacionE(clonearray, i)) {
      //operaciones de E
      i = 0;
    } else if (poteciaADiez(clonearray, i)) {
      //operaciones de potecias
      i = 0;
    } else if (multiplication(clonearray, i)) {
      //operaciones de multiplicacion y divicion
      i = 0;
    } else if (SumasYrestas(clonearray, i)) {
      //operaciones de suma y restas
    } else if (Signos(clonearray, i)) {
      //regla de los signos con un numero
      i = 0;
    } else if (sinCosTan(clonearray, i)) {
      //regla de los signos con un numero
      i = 0;
    } else {
      i++;
    }
  }
  array = clonearray;
  if (errors(array, 0)) {
    array = ["Syntax ERROR"];
  }
  return array;
};

export default calculateResult;
