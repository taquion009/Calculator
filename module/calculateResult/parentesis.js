const parentesis = (array, i) => {
    if (array[i] === "(") {
      if (array[0] !== "(" || array[array.length - 1] !== ")") {
        console.log("!error n°1");
        array = ["Syntax ERROR"];
        return array
      } else {
        array.splice(0, 1);
        array.splice(array.length - 1, 1);
        return array
      }
    }
    return false;
  };
  
  export default parentesis;
  