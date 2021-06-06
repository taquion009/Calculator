const poteciaADiez = (array, i) => {
  if (array[i] === "₁₀" && String(Number(array[i + 1])) !== "NaN" && String(Number(array[i - 1])) !== "NaN"
//   && 
//   !/^[°]{1}$|^[e]{1}$|^[log]{3}|^[ᶺ]{1}$|^[²]{1}$|^[³]{1}$|^[⁻¹]{2}$|^[√]{1}$|^[ᶺ√]{2}$/gi.test(
//     String(array[i + 3])
    ) {
        console.log(Number(array[i - 1]) * Number(Math.pow(10, Number(array[i + 1]))))
    array.splice(i-1, 3,String(Number(array[i - 1]) * Number(Math.pow(10, Number(array[i + 1])))));
    return array;
  }else if (array[i] === "₁₀" && String(Number(array[i + 1])) !== "NaN"
  //   && 
  //   !/^[°]{1}$|^[e]{1}$|^[log]{3}|^[ᶺ]{1}$|^[²]{1}$|^[³]{1}$|^[⁻¹]{2}$|^[√]{1}$|^[ᶺ√]{2}$/gi.test(
  //     String(array[i + 3])
      ) {
      array.splice(i, 2, String(Math.pow(10, Number(array[i + 1]))));
      return array;
    }
};
export default poteciaADiez;
