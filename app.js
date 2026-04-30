const list = document.getElementById("candidateList");
const searchInput = document.getElementById("searchInput");
const statusFilter = document.getElementById("statusFilter");

function renderCandidates(data) {
  list.innerHTML = "";

  if (data.length === 0) {
    list.innerHTML = "<p>No candidates found.</p>";
    return;
  }

  data.forEach(candidate => {
    const card = `
      <div class="card">
        <img src="${candidate.image}" />
        <h3>${candidate.name}</h3>
        <p>${candidate.skills.join(", ")}</p>
        <p>${candidate.status}</p>
        <button onclick="viewProfile(${candidate.id})">
          View Profile
        </button>
      </div>
    `;

    list.innerHTML += card;
  });
}

function filterCandidates() {
  const searchValue = searchInput.value.toLowerCase();
  const statusValue = statusFilter.value;

  const filtered = candidates.filter(candidate => {

    const matchesSearch =
      candidate.name.toLowerCase().includes(searchValue) ||
      candidate.skills.join(" ").toLowerCase().includes(searchValue);

    const matchesStatus =
      statusValue === "all" || candidate.status === statusValue;

    return matchesSearch && matchesStatus;
  });

  renderCandidates(filtered);
}

searchInput.addEventListener("input", filterCandidates);
statusFilter.addEventListener("change", filterCandidates);

function viewProfile(id) {
  localStorage.setItem("selectedCandidate", id);
  window.location.href = "profile.html";
}

renderCandidates(candidates);