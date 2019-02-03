function computeBMI() {
    // user inputs
    var height = Number(document.getElementById("height").value);
    var heightunits = document.getElementById("heightunits").value;
    var weight = Number(document.getElementById("weight").value);
    var weightunits = document.getElementById("weightunits").value;


    //Convert all units to metric
    if (heightunits == "inches") height /= 0.393700787;
    if (weightunits == "lb") weight /= 2.20462;

    //Perform calculation
    var BMI = Math.round(weight /((height/100) ** 2) * 10) / 10;

    //Display result of calculation
    document.getElementById("output").innerHTML = BMI

    if (BMI < 18.5) {
        document.getElementById("comment").style.color = 'red';
        document.getElementById("output").style.color = 'red';
        document.getElementById("comment").innerHTML = "Underweight";
    } else if (BMI >= 18.5 && BMI < 25) {
        document.getElementById("comment").style.color = "green";
        document.getElementById("output").style.color = 'green';
        document.getElementById("comment").innerHTML = "Normal";
    } else if (BMI >= 25 && BMI < 30) {
        document.getElementById("comment").style.color = 'red';
        document.getElementById("output").style.color = 'red';
        document.getElementById("comment").innerHTML = "Obese";
    } else if (BMI > 30) {
        document.getElementById("comment").style.color = 'red';
        document.getElementById("output").style.color = 'red';
        document.getElementById("comment").innerHTML = "Overweight";
    }
 
    if (weight == '' || height == '') {
        document.getElementById('comment').innerHTML = 'INVALID DATA'
        document.getElementById('comment').style.color = 'red'
        document.getElementById("output").style.color = 'red'
        document.getElementById("output").innerHTML = 'INVALID DATA'
    }

    if (weight / 1 !== weight || height / 1 !== height) {
        document.getElementById('comment').innerHTML = 'INVALID DATA'
        document.getElementById('comment').style.color = 'red'
        document.getElementById("output").style.color = 'red'
        document.getElementById("output").innerHTML = 'INVALID DATA'
    }
}