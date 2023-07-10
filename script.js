
function rateColor(e, n) {

    var currColor = e.style.backgroundColor;
    if (currColor != "rgb(124, 135, 152)") {
        if (n == 0) {
            e.style.backgroundColor = "hsl(25, 97%, 53%)";
            e.style.color = "white";
            e.style.filter = "none";
        } else {
            e.style.backgroundColor = "hsl(216, 12%, 8%)";
            e.style.color = "#393E46";
            e.style.filter = "brightness(3)";
        }
    }
}


function rate(e) {
    var x = document.querySelectorAll(".rate");
    x.forEach(ele => {
        ele.style.backgroundColor = "hsl(216, 12%, 8%)";
        ele.style.color = "#393E46";
        ele.style.filter = "brightness(3)";
    });
    e.style.backgroundColor = "hsl(216, 12%, 54%)";
    e.style.color = "white";
    e.style.filter = "none";
    document.querySelector("#rated").innerText = e.innerText;
}

function buttonColor(e, n) {
    if (n == 0) {
        e.style.backgroundColor = "white";
        e.style.color = "hsl(25, 97%, 53%)";
        e.style.borderColor = "white";
    } else {
        e.style.backgroundColor = "#FB7413";
        e.style.color = "white";
        e.style.borderColor = '#FB7413';
    }
}

function submit() {
    if (document.getElementById("rated").innerText == '0') {
        var loop = document.querySelectorAll(".rate");
        loop.forEach(ele => {
            ele.style.backgroundColor = "hsl(25, 97%, 53%)";
            ele.style.color = "white";
            ele.style.filter = "none";
            setTimeout(function () {
                ele.style.backgroundColor = "hsl(216, 12%, 8%)";
                ele.style.color = "#393E46";
                ele.style.filter = "brightness(3)";
            }, 100);
        })
    } else {
        document.querySelector("#sub-main").style.display = "none";
        document.querySelector("#ty-main").style.display = "block";
    }
}
