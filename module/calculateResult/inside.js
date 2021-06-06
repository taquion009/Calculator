const inside = (array) => {
    if (
        potenciaParentesis([res, clonearray[e + 1]], 0) ||
        potenciaParentesis([res, clonearray[e + 1], clonearray[e + 2]], 0)
      ) {
        if (potenciaParentesis([res, clonearray[e + 1]], 0)) {
          res = potenciaParentesis([res, clonearray[e + 1]], 0);
          clonearray.splice(e + 1, 1);
        } else if (
          potenciaParentesis([res, clonearray[e + 1], clonearray[e + 2]], 0)
        ) {
          res = potenciaParentesis(
            [res, clonearray[e + 1], clonearray[e + 2]],
            0
          );
          clonearray.splice(e + 1, 2);
        }
        if (/(\d+[.]{0,1}\d*)/.test(clonearray[e - 1])) {
          newarray.pop();
          newarray.push(...multiplication([clonearray[e - 1], "x", res], 0));
        } else {
          newarray.push(res);
        }
      } else if (/(\d+[.]{0,1}\d*)/.test(clonearray[e - 1])) {
        newarray.pop();
        newarray.push(...multiplication([clonearray[e - 1], "x", res], 0));
      } else {
        newarray.push(res);
      }
}
export default inside