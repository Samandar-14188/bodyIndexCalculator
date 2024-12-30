const Height = document.getElementById("height");
const Weight = document.getElementById("weight");
const Btn = document.getElementById("btn");
const Result = document.getElementById("result");
const circleProgress = document.getElementById("circle-progress");

Btn.addEventListener("click", function () {
  const height = parseFloat(Height.value);
  const weight = parseFloat(Weight.value);

  if (isNaN(height) || isNaN(weight)) {
    alert("Iltimos, bo'y va vaznni to'g'ri kiriting!");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / Math.pow(heightInMeters, 2);
  const percentage = (bmi / 40) * 100; 
  Result.textContent = `BMI: ${bmi.toFixed(2)}`;

  circleProgress.style.strokeDashoffset = 100 - percentage;

  let category = '';
  if (bmi < 18.5) {
    category = "Ozg'inlik, kam vazn";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    category = "Normal Vazn";
  } else if (bmi >= 25 && bmi <= 29.9) {
    category = "Ortiqcha vazn";
  } else {
    category = "Semizlik";
  }

  Result.textContent += ` - Xulosa: ${category}`;
});
