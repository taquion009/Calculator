const GetStringOfArray = (array) => {
  return array.reduce((acc, value) => {
    if (String(typeof value) === "object") {
      return acc + GetStringOfArray(value);
    } else {
      return acc + value;
    }
  }, "");
};

const imprim = () => {
  const screen = document.querySelector(".screen")
  let answer =
    typeof cadaHistory[cadaHistory.length - 1] === "object"
      ? cadaHistory[cadaHistory.length - 1].join("") || 0
      : cadaHistory[cadaHistory.length - 1] || 0;
  let history =
    GetStringOfArray(ecuation) + pauseVal ||
    cadaHistory[cadaHistory.length - 1] ||
    0;

  document.querySelector("#history p").innerHTML = history;
  document.querySelector(".answer p").innerHTML = pauseVal || answer;
  document.querySelector(".shift").style.display = `${
    shift ? "block" : "none"
  }`;
  document.querySelector(".alpha").style.display = `${
    alpha ? "block" : "none"
  }`;
  screen.scrollTo({
    top: 0,
    left:screen.scrollWidth - screen.offsetWidth - pocitionScreen,
  });
};
export default imprim;
