function Multiplication() {

    var num1 = document.getElementById("num1").value;
    var p1 = document.getElementById("p1");
    var i;

    for (i = 1; i <= 10; i++) {

        document.getElementById("p1").innerHTML += num1 + " x " + i + " = " + num1 * i + "<br>";
    }
}