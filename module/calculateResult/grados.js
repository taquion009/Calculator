const grados = (array, i, getGradosReverse) => {
  // zona error
  if (array[i + 1] === "°" && /^[+-]*\d+[.]*\d*$/gi.test(String(array[i]))) {
    if (
      /[⁻¹]{2}|[²]{1}|[³]{1}/.test(array[i + 5]) &&
      /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 4]))
    ) {
      return (array = ["Syntax ERROR"]);
    } else if (
      /[⁻¹]{2}|[²]{1}|[³]{1}/.test(array[i + 3]) &&
      /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 2]))
    ) {
      return (array = ["Syntax ERROR"]);
    } else if (
      array[i + 3] === "°" &&
      /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 2])) &&
      array[i + 5] === "°" &&
      /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 4]))
    ) {
      array.splice(
        i,
        6,
        String(
          getGradosReverse(
            array[i] +
              array[i + 1] +
              array[i + 2] +
              array[i + 3] +
              array[i + 4] +
              array[i + 5],"1"
          )
        )
      );
    } else if (
      array[i + 3] === "°" &&
      /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 2]))
    ) {
      array.splice(
        i,
        4,
        String(
          getGradosReverse(
            array[i] + array[i + 1] + array[i + 2] + array[i + 3] + 0.0 + "°",
            "2"
          )
        )
      );
    } else {
      array.splice(
        i,
        2,
        String(
          getGradosReverse(
            array[i] + array[i + 1] + 0.0 + "°" + 0.0 + "°"
          ,"3")
        )
      );
    }
    return array;
  }
  return false;
};

export default grados;
