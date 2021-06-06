const signos = (array, i) => {
  if (
    (array[i] === "-" && /^[+]+\d+[.]*\d*$/gi.test(String(array[i + 1]))) ||
    (array[i] === "+" && /^[-]{1}\d+[.]*\d*$/gi.test(String(array[i + 1]))) ||
    (array.length === 2 &&
      ((array[i] === "-" && /^[+]*\d+[.]*\d*$/gi.test(String(array[i + 1]))) ||
        (array[i] === "+" &&
          /^[-]{1}\d+[.]*\d*$/gi.test(String(array[i + 1])))))
  ) {
    // console.log(
    //   "es menos y mas con un nuemero o areves y pone menos con un nuemro"
    // );
    array.splice(i, 2, "-" + array[i + 1].match(/\d+[.]*\d*/g)[0]);
    return array;
  } else if (
    (array[i] === "-" && /^[-]{1}\d+[.]*\d*$/gi.test(String(array[i + 1]))) ||
    (array[i] === "+" && /^[+]+\d+[.]*\d*$/gi.test(String(array[i + 1]))) ||
    (array.length === 2 &&
      ((array[i] === "-" &&
        /^[-]{1}\d+[.]*\d*$/gi.test(String(array[i + 1]))) ||
        (array[i] === "+" && /^[+]*\d+[.]*\d*$/gi.test(String(array[i + 1])))))
  ) {
    // console.log(
    //   "es mas y mas con un nuemero o areves y pone mas con un nuemro"
    // );
    array.splice(i, 2, array[i + 1].match(/\d+[.]*\d*/g)[0]);
    return array;
  }
  //regla de los signos solo signos
  else if (
    (array[i] === "+" && array[i + 1] === "-") ||
    (array[i] === "-" && array[i + 1] === "+")
  ) {
    // console.log("es menos y mas o mas o menos y pone menos");
    array.splice(i, 2, "-");
    return array;
  } else if (
    (array[i] === "-" && array[i + 1] === "-") ||
    (array[i] === "+" && array[i + 1] === "+")
  ) {
    // console.log("es menos y menos o mas o mas y pone mas");
    array.splice(i, 2, "+");
    return array;
  } else if (
    /^[√ᶺe]{1}$|^[logsintancos]{3}$|^[ᶺ√₁₀]{2}$/gi.test(String(array[i])) &&
    /^[+]{1}$/gi.test(String(array[i + 1])) &&
    String(Number(array[i + 2])) !== "NaN"
  ) {
    // console.log("es menos y menos o mas o mas y pone mas");
    array.splice(i + 1, 1);
    return array;
  }else if (
    (/^[√ᶺex/(]{1}$|^[logsintancos]{3}$|^[ᶺ√₁₀]{2}$/gi.test(String(array[i-1])) || i === 0) &&
    /^[-]{1}$/gi.test(String(array[i])) &&
    String(Number(array[i + 1])) !== "NaN"
  ) {
    // console.log("es menos y menos o mas o mas y pone mas");

    array.splice(i, 2,array[i]+array[i+1]);
    return array;
  }
  return false;
};

export default signos;
