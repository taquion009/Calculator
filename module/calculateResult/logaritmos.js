const logaritmos = (array, i) => {
  if (
    array[i] === "log" &&
    /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 1])) &&
    /^[+-]*\d+[.]*\d*$/gi.test(String(array[i - 1]))
  ) {
    // console.log(
    //   "esta logaritmo de  ",
    //   Number(array[i + 1]) +
    //     " por " +
    //     Number(array[i - 1]) +
    //     " da = " +
    //     String(
    //       Number(array[i - 1]) * (Math.log(Number(array[i + 1])) / Math.log(10))
    //     )
    // );
    array.splice(
      i - 1,
      3,
      String(
        Number(array[i - 1]) * (Math.log(Number(array[i + 1])) / Math.log(10))
      )
    );
    return array;
  } else if (
    array[i] === "log" &&
    /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 1]))
  ) {
    // console.log(
    //   "esta logaritmo de  ",
    //   Number(array[i + 1]) +
    //     " da = " +
    //     String(Math.log(Number(array[i + 1]) / Math.log(10)))
    // );
    array.splice(i, 2, String(Math.log(Number(array[i + 1])) / Math.log(10)));

    return array;
  }
  return false;
};

export default logaritmos;
