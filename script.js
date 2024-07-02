const romanMappings = [
  { value: 1000, symbol: "M" },
  { value: 900, symbol: "CM" },
  { value: 500, symbol: "D" },
  { value: 400, symbol: "CD" },
  { value: 100, symbol: "C" },
  { value: 90, symbol: "XC" },
  { value: 50, symbol: "L" },
  { value: 40, symbol: "XL" },
  { value: 10, symbol: "X" },
  { value: 9, symbol: "IX" },
  { value: 5, symbol: "V" },
  { value: 4, symbol: "IV" },
  { value: 1, symbol: "I" },
];

const numberToRoman = (num) => {
  if (num <= 0 || num > 3999) {
    throw new Error("Input number must be in the range 1-3999");
  }

  let result = "";

  for (const { value, symbol } of romanMappings) {
    while (num >= value) {
      result += symbol;
      num -= value;
    }
  }

  return result;
};

document.getElementById("convertBtn").addEventListener("click", function () {
  const inputElement = document.getElementById("numberInput");
  const outputElement = document.getElementById("result");

  const inputValue = parseInt(inputElement.value, 10);

  if (isNaN(inputValue) || inputValue < 1 || inputValue > 3999) {
    outputElement.innerText = "Please enter a valid number (1-3999)";
  } else {
    try {
      const roman = numberToRoman(inputValue);
      outputElement.innerText = roman;
    } catch (error) {
      outputElement.innerText = error.message;
    }
  }
});
