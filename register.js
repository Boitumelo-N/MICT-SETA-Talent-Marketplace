const form = document.getElementById("registerForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const user = {
    id: Date.now(),
    name: document.getElementById("name").value,
    surname: document.getElementById("surname").value,
    email: document.getElementById("email").value,
    profileCompleted: false
  };

  localStorage.setItem("currentUser", JSON.stringify(user));

  window.location.href = "complete-profile.html";
});