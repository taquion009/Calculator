const controlParentesis = (val,add) => {
    if (/^[(]{1}$/gi.test(val) || /[)]{1}$/gi.test(val)) {
        shift = false;
        alpha = false;
    
        if (/^[(]{1}$/gi.test(val)) {
          if (pauseVal !== "") {
            add(ecuation, pauseVal);
          }
          add(ecuation, ["("]);
          cadaHistory.push("(");
          pauseVal = "";
        } else if (/[)]{1}$/gi.test(val)) {
          if (pauseVal !== "") {
            add(ecuation, pauseVal);
            pauseVal = "";
          }
          cadaHistory.push(")");
          add(ecuation, ")");
        }
        return true;
      }
      return false
}
export default controlParentesis