const controlResult = (val, getGradosReverse) => {
  if (
    /[.]{1}$/.test(ecuation[ecuation.length - 1]) &&
    (String(Number(val)) !== "NaN" || val === "π" || val === "𝒆")
  ) {
    ecuation = [];
    cadaHistory = [];
    shift = false;
    alpha = false;
  }
  if (cadaHistory.length === 1 && val !== "°") {
    if (
      /[.]{1}$/.test(cadaHistory[0]) &&
      String(typeof cadaHistory[0]) !== "object"
    ) {
      cadaHistory = [cadaHistory[0].slice(0, -1)];
      pauseVal = cadaHistory[0];
      ecuation = [];
    } else if (String(typeof cadaHistory[0]) === "object") {
      if (cadaHistory[0][cadaHistory[0].length - 1] === ".") {
        cadaHistory[0] = getGradosReverse(cadaHistory[0].join("")) + ".";
        cadaHistory = [cadaHistory[0].slice(0, -1)];
        pauseVal = cadaHistory[0];
        ecuation = [];
      }
    }
  }
  return;
};

export default controlResult;
