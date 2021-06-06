const changeGrados = (val, getGrados, getGradosReverse) => {
  if (
    val === "°" &&
    cadaHistory.length === 1 &&
    String(typeof cadaHistory[0]) !== "object" &&
    String(typeof cadaHistory[0]) !== "object"
    ) {
      if(/[.]{1}$/.test(cadaHistory[0]) && cadaHistory.length === 1 && val === "°"){
        cadaHistory[0] = cadaHistory[0].slice(0,-1)
        pauseVal = "";
      }
      cadaHistory[0] = [...getGrados(cadaHistory[0]),"."];
      return true;
    } else if (
      val === "°" &&
    cadaHistory.length === 1 &&
    String(typeof cadaHistory[0]) === "object" &&
    String(typeof ecuation[0]) !== "object"
  ) {
    cadaHistory[0] = getGradosReverse(cadaHistory[0].join(""))+".";
    return true;
  }
  return false;
};
export default changeGrados