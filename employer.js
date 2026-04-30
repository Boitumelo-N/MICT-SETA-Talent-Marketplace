const form = document.getElementById("employerForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const employer = {
    id: Date.now(),
    company: document.getElementById("company").value,
    name: document.getElementById("name").value,
    email: document.getElementById("email").value
  };

  localStorage.setItem("currentEmployer", JSON.stringify(employer));

  alert("Account created!");

  window.location.href = "browse.html";
});

function contactCandidate() {
  const employer = localStorage.getItem("currentEmployer");

  if (!employer) {
    alert("Please register as an employer to contact candidates.");
    window.location.href = "employer-register.html";
    return;
  }

  alert("Contact feature coming soon!");
}

function contactCandidate() {
  const employer = localStorage.getItem("currentEmployer");

  if (!employer) {
    alert("You need an employer account to contact candidates.");
    window.location.href = "employer-register.html";
    return;
  }

  alert("Contact feature coming soon!");
}