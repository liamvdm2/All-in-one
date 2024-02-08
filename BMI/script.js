function calculateBmi() {
    const height = document.getElementById("height").value / 100;
    const weight = document.getElementById("weight").value;
    error = "geef alle gegevens in of geef een juiste getal in"; 
    const BMI = (weight / (height * height)).toFixed(2);

    if (BMI <= 18.5) {
        document.getElementById("result").innerHTML = "Uw BMI is " + BMI + " wat betekent dat u ondergewicht heeft";
    }
    else if (BMI >= 18.5 && BMI <= 24.9) {
        document.getElementById("result").innerHTML = "Uw BMI is " + BMI + " wat betekent dat u normaal gewicht heeft";
    }
    else if (BMI >= 25 && BMI <= 29.9) {
        document.getElementById("result").innerHTML = "Uw BMI is " + BMI + " wat betekent dat u overgewicht heeft";
    }
    else if (BMI >= 30) {
        document.getElementById("result").innerHTML = "Uw BMI is " + BMI + " wat betekent dat u obesitas heeft";
    }
    }
