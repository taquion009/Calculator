const errors = (array, i) => {
  if (/^[-+]{1}$/gi.test(String(array[array.length - 1]))) {
    console.log("!error n°3");
    return true;
  } else if (array.length === 0) {
    console.log("!error n°4");
    return true;
  } else if (
    !/^[sin⁻¹tan⁻¹cos⁻¹]{5}$|^[°]{1}$|^[eᶺ]{1}$|^[logsintancos]{3}$|^[√]{1}$|^[ᶺ√₁₀]{2}$|^(\d+.{1}\d+){1}$|^([+-]{1}\d+){1}$|^([+-]{1}\d+.{1}\d+)+$|^([x/+-]){1}$|^(\d+){1}$|^([-+]*\d+[.]*\d*[a-z]{1}[-+]*\d+){1}$/i.test(
      String(array[i])
    )
  ) {
    console.log("!error n°5");
    return true;
  } 
  if (array[i] === "e" && array.length === 1) {
    return true;
  }
  return false;
};

export default errors;
