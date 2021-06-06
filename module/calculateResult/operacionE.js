const operacionE = (array, i) => {
  if (
    array[i] === "e" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i] + 1)) ||
      String(Number(array[i + 1])) !== "NaN") &&
    /^[+-]*\d+[.]*\d*$/gi.test(String(array[i - 1]))
  ) {
    // console.log(
    //   "esta e poteciando",
    //   array[i] + " y " + "2" + " y da = " + Math.pow(Number(array[i]), 2)
    // );
    array.splice(
      i - 1,
      3,
      String(Number(array[i - 1]) * Math.exp(array[i + 1]))
    );
    return array;
  } else if (
    array[i] === "e" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i] + 1)) ||
      String(Number(array[i + 1])) !== "NaN")
  ) {
    // console.log(
    //   "esta e poteciando",
    //   array[i] + " y " + "2" + " y da = " + Math.pow(Number(array[i]), 2)
    // );
    array.splice(i, 2, String(Math.exp(array[i + 1])));
    return array;
  }
  return false;
};

export default operacionE;
