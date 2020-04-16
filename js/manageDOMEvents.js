// Catch the onClick event, it identifies which button was clicked and calls the proper function
document.onclick = catchClickEvent;

function catchClickEvent(event) {
    if ((event != null) && ("BUTTON" === event.target.tagName)){
        let clickedButton = event.target.innerHTML;
        if (clickedButton == "C") {
            removeResult();
        } else if (clickedButton == "=") {
            calcResult();
        }  else {
            append2Result(clickedButton);
        }
    }
}

function setResult(value) {
    document.getElementById("result").innerHTML = value;
}
function getResult() {
    return(document.getElementById("result").innerHTML);
}
function append2Result(key) { 
    var result = getResult();
    if (result != "0" || isNaN(key)) {
        setResult(result + key);
    } else {
        setResult(key);
    }
}
function calcResult() {
    var result = eval(getResult()); 
    setResult(result);
}
function removeResult() { 
    setResult(0);
}