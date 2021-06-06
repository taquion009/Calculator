const pocentaje = (array, i) => {
  if (
    array[array.length - 1] === "%" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 0])) ||
      String(Number(array[i + 0])) !== "NaN") &&
    array.length === 2
  ) {
    return array.splice(i, 2, String(array[i + 0]));
  } else if (
    array[i + 3] === "%" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 0])) ||
      String(Number(array[i + 0])) !== "NaN") &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 2])) ||
      String(Number(array[i + 2])) !== "NaN") &&
    /^[-]{1}$/gi.test(String(array[i + 1]))
  ) {
    if (array.length === 4)
      array.splice(
        0,
        array.length,
        ((Number(array[i + 0]) - Number(array[i + 2])) / Number(array[i + 2])) *
          100
      );
    return true;
  }else if (
    array[i + 3] === "%" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 0])) ||
      String(Number(array[i + 0])) !== "NaN") &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 2])) ||
      String(Number(array[i + 2])) !== "NaN") &&
    /^[+]{1}$/gi.test(String(array[i + 1]))
  ) {
    if (array.length === 4)
      array.splice(
        0,
        array.length,
        ((Number(array[i + 0]) + Number(array[i + 2])) / Number(array[i + 2])) *
          100
      );
    return true;
  } else if (
    array[i + 3] === "%" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN") &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 2])) ||
      String(Number(array[i + 2])) !== "NaN") &&
    /^[/]{1}$/gi.test(String(array[i + 1]))
  ) {
    if (array.length === 4)
      array.splice(
        0,
        array.length,
        (Number(array[i + 0]) / Number(array[i + 2])) * 100
      );
    return true;
  } else if (
    array[i + 3] === "%" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN") &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 2])) ||
      String(Number(array[i + 2])) !== "NaN") &&
    /^[x]{1}$/gi.test(String(array[i + 1]))
  ) {
    if (array.length === 4)
      array.splice(
        0,
        array.length,
        Number(array[i + 0]) * Number("0." + array[i + 2])
      );
    return true;
  }
  return false;
};

export default pocentaje;
