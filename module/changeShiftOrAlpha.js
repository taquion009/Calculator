const changeShiftOrAlpha = (val) => {
  if (val === "Enter") {
    return "=";
  } else if (val === "EXP" && shift) {
    shift = false;
    return "π";
  } else if (val === "In" && shift) {
    alpha = false;
    return "e";
  } else if (val === "=" && shift) {
    alpha = false;
    return "%";
  } else if (val === "In" && alpha) {
    alpha = false;
    return "𝒆";
  }else if (val === "log" && shift) {
    shift = false;
    return "₁₀";
  }else if (val === "sin" && shift) {
    shift = false;
    return "sin⁻¹";
  }else if (val === "tan" && shift) {
    shift = false;
    return "tan⁻¹";
  }else if (val === "cos" && shift) {
    shift = false;
    return "cos⁻¹";
  }else if (val === "ac" && shift) {
    shift = false;
    return "close";
  }
  return val;
};

export default changeShiftOrAlpha