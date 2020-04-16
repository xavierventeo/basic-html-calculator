//Loading the HTML it dynamically generates the calculator buttons
const classButton = "calc-button";
const classButtonExtended = "calc-button-extended";
const arrayButtons = [[1,""],[2,""],[2,""],["+",""],[4,""],[5,""],[6,""],["-",""],[7,""],[8,""],[9,""],["*",""],[0,""],[".",""],["C",""],["/",""],["="," "+classButtonExtended]];

let objectDivKeyBoard = document.getElementById("keyboard");
arrayButtons.forEach(element => {
    createObjectCalculatorKey(objectDivKeyBoard, element, classButton);
});

function createObjectCalculatorKey(objetoDivTeclado, element, classButton) {
    let divCalculatorKey = document.createElement("div");
    let butCalculatorKey = document.createElement("button");
    butCalculatorKey.setAttribute("id", "button" + element[0]);
    butCalculatorKey.setAttribute("class", classButton + element[1]);
    butCalculatorKey.innerHTML = element[0];

    divCalculatorKey.appendChild(butCalculatorKey);
    objectDivKeyBoard.appendChild(divCalculatorKey);
}
