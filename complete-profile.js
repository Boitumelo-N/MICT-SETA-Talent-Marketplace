const form = document.getElementById("profileForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const completedProfile = {
    id: user.id,
    name: user.name + " " + user.surname,
    email: user.email,
    skills: document.getElementById("skills").value.split(",").map(s => s.trim()),
    status: document.getElementById("status").value,
    location: document.getElementById("location").value,
    image: document.getElementById("image").value || "assets/images/default.jpg",
    cv: document.getElementById("cv").value || "#"
  };

  const existing = JSON.parse(localStorage.getItem("candidates")) || [];

  existing.push(completedProfile);

  localStorage.setItem("candidates", JSON.stringify(existing));

  localStorage.removeItem("currentUser");

  window.location.href = "browse.html";
});