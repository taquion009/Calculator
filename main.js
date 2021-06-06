import add from "./module/add.js";
import calculateResult from "./module/calculateResult/calculateResult.js";
import imprim from "./module/imprim.js";
import changeShiftOrAlpha from "./module/changeShiftOrAlpha.js";
import getGrados from "./module/getGrados.js";
import getGradosReverse from "./module/getGradosReverse.js";
import controlEcuation from "./module/controlEcuation/controlEcuation.js";
import controlError from "./module/controlEcuation/controlError.js";
import controlNumber from "./module/controlEcuation/controlNumer.js";
import controlNegative from "./module/controlEcuation/controlNegative.js";
import controlResult from "./module/controlEcuation/controlResult.js";
import controlParentesis from "./module/controlEcuation/controlParentesis.js";
import controlPotenciaYRaiz from "./module/controlEcuation/controlPotenciaYRaiz.js";
import controlGrados from "./module/controlEcuation/controlGrados.js";
import changeGrados from "./module/changeGrados.js";
import errors from "./module/calculateResult/errors.js";
import multiplication from "./module/calculateResult/multiplication.js";
import pocentaje from "./module/calculateResult/pocentaje.js";
import potencia from "./module/calculateResult/potencia.js";
import grados from "./module/calculateResult/grados.js";
import raices from "./module/calculateResult/raices.js";
import logaritmos from "./module/calculateResult/logaritmos.js";
import operacionE from "./module/calculateResult/operacionE.js";
import sumasYRestas from "./module/calculateResult/sumasYRestas.js";
import signos from "./module/calculateResult/signos.js";
import parentesis from "./module/calculateResult/parentesis.js";
import potenciaParentesis from "./module/calculateResult/potenciaParentesis.js";
import poteciaADiez from "./module/calculateResult/poteciaADiez.js";
import sinCosTan from "./module/calculateResult/sinCosTan.js";
const buttonValue = [
  "7",
  "8",
  "9",
  "Backspace",
  "4",
  "5",
  "6",
  "1",
  "2",
  "3",
  "+",
  "-",
  "0",
  "Enter",
  "."
];
const screen = document.querySelector(".screen");

const enter = (val) => {
  if (val === "=" || val === "%" || val === "Enter") {
    if (/[+-]{1}|[x/]{1}/gi.test(cadaHistory[cadaHistory.length - 1])) {
      console.log("!error n°7");
      ecuation = ["Syntax ERROR"];
    } else {
      cadaHistory = calculateResult(
        ecuation,
        getGradosReverse,
        errors,
        pocentaje,
        potencia,
        grados,
        raices,
        logaritmos,
        operacionE,
        multiplication,
        sumasYRestas,
        signos,
        parentesis,
        potenciaParentesis,
        poteciaADiez,
        sinCosTan
      );
    if (String(cadaHistory[0]) === "NaN") {
      console.log("!error n°8");
      ecuation = ["Syntax ERROR"];
      cadaHistory = ["Syntax ERROR"];
    }else{
      cadaHistory[0] += ".";
      ecuation.push("=", ...cadaHistory);
      pocitionScreen = 0;
      pauseVal = ""
    }
    }
    
  }
};
//test
// console.log("2656863280.9166665" === calculateResult(
//   ["9", "x", "+", "-", "-9.33", "°", ["(", ["(", "+", "-", "9", "²", "√", "sin","90", "+", "-", "-6", ")"], "²",")"], "²", "-", "3", "/", "9"],
//   getGradosReverse,
//   errors,
//   pocentaje,
//   potencia,
//   grados,
//   raices,
//   logaritmos,
//   operacionE,
//   multiplication,
//   sumasYRestas,
//   signos,
//   parentesis,
//   potenciaParentesis,
//   poteciaADiez,
//   sinCosTan
// )[0]);

const deleteItem = () => {
  if (cadaHistory[0][cadaHistory[0].length - 1] === ".")return;
    pauseVal?pauseVal = pauseVal.slice(0, -1):ecuation.pop();
    cadaHistory.pop();
    cadaHistory.push(ecuation[ecuation.length - 1]); 
}

const close = (val) => {
  if (val === "close"){
    cadaHistory = ["CLOSE"];
    ecuation = ["CLOSE"];
    pauseVal = "";
    imprim();
    setTimeout(()=>{
      cadaHistory = [];
      ecuation = [];
      pauseVal = "";
      val = ""
      imprim();
    },1000);
  };
};

const deleteAll = (val) => {
  if (val === "ac") {
    console.log("entro",val)
    val = "";
    ecuation = [];
    cadaHistory = [];
    pauseVal = ""
  }else if (val === "del"  || val === "Backspace") {
    deleteItem()
  }
};

const controlCalc = (val) => {
    //change val if shift or alpha
  val = changeShiftOrAlpha(val);
  //close 
  close(val);
  //add val
  add(
    ...controlEcuation(
      val,
      add,
      controlNumber,
      controlError,
      controlNegative,
      getGradosReverse,
      controlResult,
      controlParentesis,
      controlPotenciaYRaiz,
      controlGrados
    )
  );
  //enter result
  enter(val);
  //change grados
  changeGrados(val, getGrados, getGradosReverse);
  //delete all
  deleteAll(val);
  //imprim in screen
  imprim();
  val = ""
};

//Events
document
  .querySelectorAll(".button")
  .forEach((el) =>
    el.addEventListener("click", (e) =>{if(e.clientX !== 0)controlCalc(e.target.value)})
  );
document.addEventListener("keydown", (e) => {
  if (buttonValue.includes(e.key)) {
    controlCalc(e.key);
  }
});

document.getElementById("left").addEventListener("click", ({ target }) => {
  if (pocitionScreen < screen.scrollWidth - screen.offsetWidth)
    pocitionScreen += 50;
  imprim(screen);
});
document.getElementById("right").addEventListener("click", (e) => {
  if (pocitionScreen > 0) pocitionScreen -= 50;
  imprim(screen);
});
