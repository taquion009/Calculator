const multiplication = (array, i) => {
  if (
    array[i + 1] === "x" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN") &&
    /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 2])) &&
    !/^[°]{1}$|^[e]{1}$|^[log]{3}|^[ᶺ]{1}$|^[²]{1}$|^[³]{1}$|^[⁻¹]{2}$|^[√]{1}$|^[ᶺ√]{2}$/gi.test(
      String(array[i + 3])
    )
  ) {
    // console.log("esta multiplicando", array[i] + " y " + array[i + 2]);
    array.splice(i, 3, String(Number(array[i]) * Number(array[i + 2])));
    return array;
  } else if (
    array[i + 1] === "/" &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN") &&
    /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 2])) &&
    !/^[°]{1}$|^[e]{1}$|^[log]{3}|[²ᶺ]{1}$|^[³]{1}$|^[⁻¹]{2}$|^[ᶺ√]{2}$/gi.test(
      String(array[i + 3])
    )
  ) {
    // console.log("esta dividiendo", array[i] + " y " + Number(array[i + 2]));
    array.splice(i, 3, String(Number(array[i]) / Number(array[i + 2])));
    return array;
  }
  return false;
};
export default multiplication;
