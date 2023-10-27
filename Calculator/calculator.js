document.addEventListener("DOMContentLoaded", function () {
  const display = document.getElementById("display");
  const buttons = document.querySelectorAll("button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const buttonText = button.innerText;

      if (buttonText === "=") {
        try {
          display.value = eval(display.value);
        } catch (error) {
          display.value = "Error";
        }
      } else if (buttonText === "C") {
        display.value = "";
      } else {
        display.value += buttonText;
      }
    });
  });
});
