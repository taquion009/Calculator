const getGrados = (num) => {
    let lng = num;
    let lngn = Math.abs(lng);
    let lnggr = Math.floor(lngn * 1);
    let lngmin = Math.floor((lngn - lnggr) * 60);
    let lngseg = ((lngn - lnggr) * 60 - lngmin) * 60;
    if (lngseg >= 60) {
      lngseg -= 60;
      lngmin++;
    }
    let lngc = [num[0].match(/[-]*/g)[0]+lnggr, "°", lngmin, "°", lngseg.toFixed(2), "°"];
    return lngc;
};
export default getGrados