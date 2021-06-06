const potencia = (array, i) => {
  if (
    array[i + 1] === "²" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN")
  ) {
    // console.log(
    //   "esta poteciando",
    //   array[i] + " y " + "2" + " y da = " + Math.pow(Number(array[i]), 2)
    // );
    array.splice(
      i,
      2,
      String(
        array[i].match(/[-]*/g)[0] +
          Math.pow(Number(array[i].match(/\d+[.]*\d*/g)[0]), 2)
      )
    );
    return array;
  } else if (
    array[i + 1] === "³" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN")
  ) {
    // console.log(
    //   "esta poteciando",
    //   array[i] + " y " + "2" + " y da = " + Math.pow(Number(array[i]), 3)
    // );
    array.splice(
      i,
      2,
      String(
        array[i].match(/[-]*/g)[0] +
          Math.pow(Number(array[i].match(/\d+[.]*\d*/g)[0]), 3)
      )
    );
    return array;
  } else if (
    array[i + 1] === "⁻¹" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN")
  ) {
    // console.log(
    //   "esta poteciando",
    //   array[i] + " y " + "-1" + " y da = " + Math.pow(Number(array[i]), -1)
    // );
    array.splice(
      i,
      2,
      String(
        array[i].match(/[-]*/g)[0] +
          Math.pow(Number(array[i].match(/\d+[.]*\d*/g)[0]), -1)
      )
    );
    return array;
  } else if (
    array[i + 1] === "ᶺ" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN") &&
    /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 2]))
  ) {
    // console.log(
    //   "esta poteciando",
    //   array[i] + " y " + "2" + " y da = " + Math.pow(Number(array[i]), 2)
    // );
    array.splice(
      i,
      3,
      String(
        array[i].match(/[-]*/g)[0] +
          Math.pow(
            Number(array[i].match(/\d+[.]*\d*/g)[0]),
            Number(array[i + 2])
          )
      )
    );
    return array;
  }
  return false;
};

export default potencia;
