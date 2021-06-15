var screen = document.getElementById("screen");
function keyword(num) {
    var lastVal = screen.value.slice(screen.value.length - 1);
    var opt = ['+', '-', '*', '/'];
    if (opt.indexOf(lastVal) !== -1 && opt.indexOf(num) !== -1) {
        screen.value = screen.value.slice(0, -1) + num
    } else {
        screen.value += num;
    }
}
// clear 
function c(num) {
    screen.value = "";

}
//ans clear
function ans() {
    rc.value = "";
}


//result
function result() {
    rc.value = eval(screen.value);

}

//square function
function square(sq) {
    screen.value *= screen.value;
    screen.value = eval(screen.value);
}

//back 2
function back() {
    var screen = document.getElementById("screen").value;
    document.getElementById("screen").value = screen.slice(0, -1);

}


