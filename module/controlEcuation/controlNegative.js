const controlNegative = (val) => {
  if (
    ((cadaHistory.length === 0 && /^[-+]{1}$/.test(val)) ||
      (/^[+-]{1}|[x/]{1}|[)]{1}|[(]{1}$/.test(
        cadaHistory[cadaHistory.length - 1]
      ) &&
        /^[+-]{1}|[x/]{1}$/.test(val)) ||
      (cadaHistory.length === 0 && /^[+-]{1}|[x/]{1}$/.test(val)) ||
      (!/[)]{1}|[√]{1}|[log]{3}|\d+[.]*\d*/gi.test(
        cadaHistory[cadaHistory.length - 1]
      ) &&
        /^[+-]{1}|[x/]{1}$/.test(cadaHistory[cadaHistory.length - 2]) &&
        cadaHistory[cadaHistory.length - 3] !== undefined &&
        !/^[(]{1}|[)]{1}$/.test(val)) ||
      (pauseVal === "" && /^[-+]{1}$/.test(val))) &&
    !/[)]{1}/gi.test(cadaHistory[cadaHistory.length - 1]) &&
    pauseVal === ""
  ) {
    shift = false;
    alpha = false;
    if (!/^[/xX]{1}/.test(val) && !/\d+[.]*\d*/gi.test(val)) {
      pauseVal += val;
      cadaHistory.push(val);
    }
    return true;
  }
  return false;
};

export default controlNegative;
