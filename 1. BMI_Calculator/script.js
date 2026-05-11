const bmiText = document.querySelector("#bmi");
const bmiDesc = document.querySelector("#desc");
const input = document.querySelector(".form-box");

input.addEventListener("submit", function (e) {
  e.preventDefault();

  const weight = parseFloat(e.target.weight.value);
  const height = parseFloat(e.target.height.value);

  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter a valid weight and height.");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / Math.pow(heightInMeters, 2);
  const category = interpretBmi(bmi);

  bmiText.textContent = bmi.toFixed(2);
  bmiText.className = category;
  bmiDesc.innerHTML = `<strong>You are ${category}</strong>`;
});

input.addEventListener("reset", function () {
  bmiText.textContent = 0;
  bmiText.className = "";
  bmiDesc.textContent = "N/A";
});

function interpretBmi(bmi) {
  if (bmi < 18.5) return "Underweight";
  if (bmi < 25) return "Normal";
  if (bmi < 30) return "Overweight";
  return "Obese";
}
