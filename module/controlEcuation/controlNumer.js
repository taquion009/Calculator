const controlNumber = (val) => {
  if (
    (/\d+|[.]{1}/gi.test(val) &&
      (/\d+|[.]{1}|[ᶺ]{1}/gi.test(cadaHistory[cadaHistory.length - 1]) ||
        pauseVal === "")) ||
    (/\d+[.]*\d*/gi.test(val) &&
      !/[√]{1}|[log]{3}|[ᶺ√]{2}/gi.test(cadaHistory[cadaHistory.length - 1]))
  ) {
    pauseVal += val;
    cadaHistory.push(val);
    shift = false;
    alpha = false;
    return true;
  }
    return false;
};

export default controlNumber;
