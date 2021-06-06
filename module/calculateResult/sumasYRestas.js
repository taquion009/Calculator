const sumasYRestas = (array, i) => {
  if (
    array[i + 1] === "+" &&
    /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 2])) &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN") &&
    (!/^[°]{1}$|^[e]{1}$|^[log]{3}|[x/]{1}|[²ᶺ√]{1}|^[³]{1}$|^[⁻¹]{2}$|[ᶺ√]{2}$/gi.test(
      String(array[i + 3])
    ) ||
      /^[%]{1}$/gi.test(String(array[i + 5])))
  ) {
    // console.log(
    //   "esta sumando " +
    //     Number(array[i]) +
    //     " + " +
    //     Number(array[i + 2]) +
    //     " y  da " +
    //     (Number(array[i]) + Number(array[i + 2]))
    // );
    array.splice(i, 3, String(Number(array[i]) + Number(array[i + 2])));
    return array;
  } else if (
    array[i + 1] === "-" &&
    /^[+-]*\d+[.]*\d*$/gi.test(String(array[i + 2])) &&
    (/^[+-]*\d+[.]*\d*$/gi.test(String(array[i])) ||
      String(Number(array[i])) !== "NaN") &&
    (!/^[°]{1}$|^[e]{1}$|^[log]{3}|[x/]{1}|[²√ᶺ]{1}|^[³]{1}$|^[⁻¹]{2}$|[ᶺ√]{2}$/gi.test(
      String(array[i + 3]))
     ||
    /^[%]{1}$/gi.test(String(array[i + 5])))
  ) {
    // console.log(
    //   "esta restando",
    //   array[i] +
    //     " - " +
    //     Number(array[i + 2]) +
    //     " da " +
    //     (Number(array[i]) - Number(array[i + 2]))
    // );
    array.splice(i, 3, String(Number(array[i]) - Number(array[i + 2])));
    return array;
  } else if (
    /^[-]*\d+[.]*\d*$/gi.test(String(array[i])) &&
    /^[+]*\d+[.]*\d*$/gi.test(String(array[i + 1])) &&
    (!/^[e]{1}$|^[log]{3}|[x/]{1}|[²ᶺ√]{1}|^[³]{1}$|^[⁻¹]{2}$|[ᶺ√]{2}$/gi.test(
      String(array[i + 2])
    )||
    /^[%]{1}$/gi.test(String(array[i + 4])))
  ) {
    // console.log("es un numero y otro sin un signo de suma pero se suma");
    array.splice(i, 2, String(Number(array[i]) + Number(array[i + 1])));
    return array;
  } else if (
    /^[-]*\d+[.]*\d*$/gi.test(String(array[i])) &&
    /^[-]+\d+[.]*\d*$/gi.test(String(array[i + 1])) &&
    (!/^[e]{1}$|^[log]{3}|[x/]{1}|[²ᶺ√]{1}|^[³]{1}$|^[⁻¹]{2}$|[ᶺ√]{2}$/gi.test(
      String(array[i + 2])
    )||
    /^[%]{1}$/gi.test(String(array[i + 4])))
  ) {
    // console.log(
    //   "es un numero y otro sin un signo de resta pero se resta",
    //   array[i] +
    //     " - " +
    //     Number(array[i + 1]) +
    //     " da " +
    //     (Number(array[i]) - Number(array[i + 1]))
    // );
    array.splice(i, 2, Number(array[i]) + Number(array[i + 1]));
    return array;
  }
  return false;
};

export default sumasYRestas;
