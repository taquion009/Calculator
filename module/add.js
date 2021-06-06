const add = (array, obj) => {
  if(!obj)return
  let newarrayva = array;
    if (obj !== "") {
      if (typeof newarrayva[newarrayva.length - 1] === "object") {
        if (
          newarrayva[newarrayva.length - 1][
            newarrayva[newarrayva.length - 1].length - 1
          ] !== ")"
        ) {
          newarrayva.splice(
            newarrayva.length - 1,
            1,
            add(newarrayva[newarrayva.length - 1], obj)
          );
        } else {
          newarrayva.push(obj);
        }
      } else {
        newarrayva.push(obj);
      }
    }
    return newarrayva;
};
export default add