let result;

window.function = function(arg, time){

    arg = arg.value ?? "";
    time = time.value ?? 6.048e+8;
    result = arg;

    let timerID;

    timerID = setInterval(getResult, time);

    return result;
 }

 function getResult() {
    console.log("Se ha reiniciado la columan");
    result = "";
 }