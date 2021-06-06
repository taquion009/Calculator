const controlGrados = (val,add) => {
  if (val === "°") {
    if (ecuation.length === 1 && String(Number(ecuation[0])) !== "NaN")
    return true;
    // if (String(Number(cadaHistory[cadaHistory.length - 1])) !== "NaN") {
      cadaHistory.push(val);
      if (pauseVal !== "") {
        add(ecuation, pauseVal);
        pauseVal = "";
      }
      shift = false;
      alpha = false;
      add(ecuation, val);
    // }
    return true;
  }
    return false;
  };
  
  export default controlGrados;
  