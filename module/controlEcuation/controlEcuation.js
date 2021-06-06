const controlEcuation = (
  val,
  add,
  controlNumber,
  controlError,
  controlNegative,
  getGradosReverse,
  controlResult,
  ControlParentesis,
  controlPotenciaYRaiz,
  controlGrados
) => {

  if (val === "shift") {
    shift = true;
    return [];
  } else if (val === "alpha") {
    alpha = true;
    return [];
  }else if (val === "del" || val === "ac" ||val === "close" ||val === "Enter") {
    alpha = false;
    alpha = false;
    return [];
  }
  if(val === "ac" || val === "del"  || val === "Backspace")return [];
  // conrol Of the result
  controlResult(val, getGradosReverse)
  if (/[.]{1}$/.test(cadaHistory[0]) && cadaHistory.length === 1 && val === "°")
    return [];
  //zona error
  if (controlError(val)) {
    return [];
  } else if (controlGrados(val,add)) {
    return [];
  } else if (controlNumber(val)) {
    return [];
  } else if (controlNegative(val)) {
    return [];
  } else if (ControlParentesis(val, add)) {
    return [];
  } else if (controlPotenciaYRaiz(val, add)) {
    return [];
  } else if (val === "=") {
    shift = false;
    alpha = false;
    cadaHistory.push(val);
    if (pauseVal) {
      add(ecuation, pauseVal);
      pauseVal = "";
    }
    pauseVal = "";
    return [];
  }else {
    if (pauseVal) {
      add(ecuation, pauseVal);
      pauseVal = "";
    }
    shift = false;
    alpha = false;
  }
  cadaHistory.push(val);
  return [ecuation, val];
};

export default controlEcuation;
