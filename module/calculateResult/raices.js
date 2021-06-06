const raices = (array, i) => {
  if (
    array[i] === "√" &&
    /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 1])) &&
    /^[+-]*\d+[.]*\d*$/gi.test(String(array[i - 1])) &&
    !/^[ᶺ]{1}$|^[²]{1}$|^[³]{1}$|^[⁻¹]{2}$/gi.test(String(array[i + 2]))
  ) {
    // console.log(
      // "esta raiz de  ",
      // Number(array[i + 1]) +
        // " por " +
        // Number(array[i - 1]) +
        // " da = " +
        // Number(array[i - 1]) * Math.sqrt(Number(array[i + 1]))
    // );
    array.splice(
      i - 1,
      3,
      String(Number(array[i - 1]) * Math.sqrt(Number(array[i + 1])))
    );
    return array;
  } else if (
    array[i] === "√" &&
    /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 1])) &&
    !/^[ᶺ]{1}$|^[²]{1}$|^[³]{1}$|^[⁻¹]{2}$/gi.test(String(array[i + 2]))
  ) {
    // console.log(
    //   "esta raiz de  ",
    //   Number(array[i + 1]) + " da = " + Math.sqrt(Number(array[i + 1]))
    // );
    array.splice(i, 2, String(Math.sqrt(Number(array[i + 1]))));
    return array;
  } else if (
    array[i + 1] === "ᶺ√" &&
    /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 2])) &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN")
  ) {
    // console.log(
    //   "esta raiz de elevada ",
    //   Number(array[i]) +
    //     " a " +
    //     Number(array[i + 2]) +
    //     " da = " +
    //     Math.pow(Number(array[i + 2]), 1 / Number(array[i]))
    // );
    array.splice(
      i,
      3,
      array[i].match(/[-]*/g)[0] +
        String(
          Math.pow(
            Number(array[i + 2]),
            1 / Number(array[i].match(/\d+[.]*\d*/g)[0])
          )
        )
    );
    return array;
  }
  return false;
};

export default raices;
