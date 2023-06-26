

function calculateBMI() {
    // Get weight value
    var weight = parseFloat(document.getElementById("weight").value);
    var weightUnit = document.getElementById("weight-unit").value;
 if (isNaN(weight) )
 {

    alert(" please enter a numeric value for  weight ")
 }

  
    // Convert weight to kg if necessary
    if (weightUnit === "lbs") {
      weight = weight * 0.453592;
    }
  
    // Get height value
    var height = parseFloat(document.getElementById("height").value);
    var heightUnit = document.getElementById("height-unit").value;

    if (isNaN(height) )
    {
   
       alert(" please enter a numeric value for  height ")
    }
  
    // Convert height to meters if necessary
    if (heightUnit === "in") {
      height = height * 0.0254;
    }
  
    // Calculate BMI
    var bmi = weight / Math.pow(height, 2);
  
    // Display BMI
    document.getElementById("result").innerHTML = "Your BMI is " + bmi.toFixed(2);
  
    // Determine BMI category

    if (bmi < 18.5) {
        document.getElementById("result").innerHTML += ", which is underweight.";
      } else if (bmi >= 18.5 && bmi < 25) {
        document.getElementById("result").innerHTML += ", which is normal weight.";
      } else if (bmi >= 25 && bmi < 30) {
        document.getElementById("result").innerHTML += ", which is overweight.";
      } else {
        document.getElementById("result").innerHTML += ", which is obese.";
      }
    
   
}