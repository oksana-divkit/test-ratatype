//------------------
// FORM VALIDATION

const loginFormEl = document.getElementById("loginForm");
const loginFormLines = loginFormEl.querySelectorAll(".form-line");

loginFormLines.forEach((line) => {
  const input = line.querySelector("input");
  const errorEl = line.querySelector(".form-error");

  input.addEventListener("input", () => {
    line.classList.remove("control-validated");
    errorEl.classList.remove("block");
  });
});

loginFormEl.addEventListener("submit", function (e) {
  let isFormValid = true;

  loginFormLines.forEach((line) => {
    const input = line.querySelector("input");
    const errorEl = line.querySelector(".form-error");

    line.classList.add("control-validated");

    if (!input.validity.valid) {
      isFormValid = false;
      errorEl.classList.add("block");
    } else {
      errorEl.classList.remove("block");
    }
  });

  if (!isFormValid) {
    e.preventDefault();
  }
});
