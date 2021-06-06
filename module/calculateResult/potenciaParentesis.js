const potenciaParentesis = (array, i) => {
  if (
    array[i + 1] === "²" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN")
  ) {
    // console.log(
    //   "esta poteciando",
    //   array[i] + " y " + "2" + " y da = " + Math.pow(Number(array[i]), 2)
    // );
    return String(Math.pow(Number(array[i]), 2))
  } else if (
    array[i + 1] === "³" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN")
  ) {
    // console.log(
    //   "esta poteciando",
    //   array[i] + " y " + "2" + " y da = " + Math.pow(Number(array[i]), 3)
    // );
    return String(Math.pow(Number(array[i]), 3))
  } else if (
    array[i + 1] === "⁻¹" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN")
  ) {
    // console.log(
    //   "esta poteciando",
    //   array[i] + " y " + "-1" + " y da = " + Math.pow(Number(array[i]), -1)
    // );
    return String(Math.pow(Number(array[i]), -1))
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
    return String(Math.pow(Number(array[i]), Number(array[i + 2])))
  }
  return false;
};

export default potenciaParentesis;