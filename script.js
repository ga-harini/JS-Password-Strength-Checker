const password = document.getElementById("password");

password.addEventListener("input", (e) => {
  const input = e.target.value;
  const length = input.length;

  if (length < 4) {
    password.style.borderColor = "red";
  } else if (length < 8) {
    password.style.borderColor = "orange";
  } else {
    password.style.borderColor = "green";
  }
});
