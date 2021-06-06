const controlPotenciaYRaiz = (val,add) => {
    if (/^[²ᶺ³]{1}$|^[⁻¹]{2}$/gi.test(val)) {
        if (/[)²³]{1}|\d+[.⁻¹]*\d*$/gi.test(cadaHistory[cadaHistory.length - 1])) {
          if (!shift) {
            if (pauseVal) {
              add(ecuation, pauseVal);
              pauseVal = "";
            }
            add(ecuation, val);
            cadaHistory.push(val);
          } else {
            shift = false;
            alpha = false;
    
            if (pauseVal) {
              add(ecuation, pauseVal);
              pauseVal = "";
            }
            add(ecuation, "ᶺ√");
            cadaHistory.push("ᶺ√");
          }
        } else {
          if (shift) {
            shift = false;
            alpha = false;
    
            if (pauseVal) {
              add(ecuation, pauseVal);
              pauseVal = "";
            }
            if (/[³]{1}$/gi.test(val)) {
              add(ecuation, "3");
              add(ecuation, "ᶺ√");
              cadaHistory.push("3", "ᶺ√");
            }
          }
        }
        return true;
    }
    return false;
};
export default controlPotenciaYRaiz;