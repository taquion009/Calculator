const controlError = (val) => {
  if (
    ecuation === "²" &&
    String(Number(val)) !== "NaN"
  )
    return true;
  if (ecuation === "ᶺ" && /[x/]{1}/.test(val)) return true;
  if (ecuation === "√" && /[x/]{1}/.test(val)) return true;
  if (ecuation === "log" && /[x/]{1}/.test(val)) return true;
  if (cadaHistory[cadaHistory.length - 1] === undefined && /[°]{1}/.test(val))
    return true;
  if (cadaHistory[cadaHistory.length - 1] === "ᶺ√" && /[x/]{1}/.test(val))
    return true;
  if (
    cadaHistory[cadaHistory.length - 1] === ")" &&
    ((/\d|[.]|\d*/gi.test(val) && String(Number(val)) !== "NaN") ||
      /[√]{1}/gi.test(val))
  )
    return true;
  // if (
  //   cadaHistory[cadaHistory.length - 1] === "e" &&
  //   !/[(]{1}/.test(val) &&
  //   String(Number(val)) === "NaN"
  // )
  //   return true;
  return false;
};

export default controlError;
