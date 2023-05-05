const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = loginForm.querySelector('input[name="username"]').value;
  const password = loginForm.querySelector('input[name="password"]').value;
  const data = {
    username,
    password,
  };
  fetch("/login-admin", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    // .then((response) => response.json())
    .then((data) => {
      console.log(data);
      window.location.href = data.url;
    })
    .catch((error) => console.error(error));
});
