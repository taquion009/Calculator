const sinCosTan = (array, i) => {
  if (array[i] === "sin" && String(Number(array[i+1])) !== "NaN" && String(Number(array[i-1])) !== "NaN") {
    array.splice(i-1,3,String(Number(array[i-1]) * Math.sin(Number(array[i+1]) * Math.PI / 180)));
    return array;
  } else if (array[i] === "tan" && String(Number(array[i+1])) !== "NaN" && String(Number(array[i-1])) !== "NaN") {
    array.splice(i-1,3,String(Number(array[i-1]) * Math.tan(Number(array[i+1]) * Math.PI / 180)));
    return array;
  } else if (array[i] === "cos" && String(Number(array[i+1])) !== "NaN" && String(Number(array[i-1])) !== "NaN") {
    array.splice(i-1,3,String(Number(array[i-1]) * Math.cos(Number(array[i+1]) * Math.PI / 180)));
    return array;
  }else if (array[i] === "sin" && String(Number(array[i+1])) !== "NaN") {
    array.splice(i,2,String(Math.sin(Number(array[i+1]) * Math.PI / 180)));
    return array;
  } else if (array[i] === "tan" && String(Number(array[i+1])) !== "NaN") {
    array.splice(i,2,String(Math.tan(Number(array[i+1]) * Math.PI / 180)));
    return array;
  } else if (array[i] === "cos" && String(Number(array[i+1])) !== "NaN") {
    array.splice(i,2,String(Math.cos(Number(array[i+1]) * Math.PI / 180)));
    return array;
  } else if (array[i] === "sin⁻¹" && String(Number(array[i+1])) !== "NaN" && String(Number(array[i-1])) !== "NaN") {
    array.splice(i-1,3,String(Number(array[i-1]) * (180 / Math.PI * Math.asin(Number(array[i+1])))));
    return array;
  } else if (array[i] === "tan⁻¹" && String(Number(array[i+1])) !== "NaN" && String(Number(array[i-1])) !== "NaN") {
    array.splice(i-1,3,String(Number(array[i-1]) * (180 / Math.PI * Math.atan(Number(array[i+1])))));
    return array;
  } else if (array[i] === "cos⁻¹" && String(Number(array[i+1])) !== "NaN" && String(Number(array[i-1])) !== "NaN") {
    array.splice(i-1,3,String(Number(array[i-1]) * (180 / Math.PI * Math.acos(Number(array[i+1])))));
    return array;
  }else if (array[i] === "sin⁻¹" && String(Number(array[i+1])) !== "NaN") {
    array.splice(i,2,String(180 / Math.PI * Math.asin(Number(array[i+1]))));
    return array;
  } else if (array[i] === "tan⁻¹" && String(Number(array[i+1])) !== "NaN") {
    array.splice(i,2,String(180 / Math.PI * Math.atan(Number(array[i+1]))));
    return array;
  } else if (array[i] === "cos⁻¹" && String(Number(array[i+1])) !== "NaN") {
    array.splice(i,2,String(180 / Math.PI * Math.acos(Number(array[i+1]))));
    return array;
  }
  return false;
};

export default sinCosTan;

// valueDeg: 0 == n.state.unit ? e : e / Math.PI * 180,
// valueRad: 1 == n.state.unit ? e : e / 180 * Math.PI
// 180 / Math.PI * Math.asin(-1)
