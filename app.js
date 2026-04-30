const list = document.getElementById("candidateList");

function displayCandidates(data) {
  list.innerHTML = "";

  data.forEach(candidate => {
    list.innerHTML += `
      <div class="card">
        <img src="${candidate.image}" />
        <h3>${candidate.name}</h3>
        <p>${candidate.skills.join(", ")}</p>
        <p>${candidate.status}</p>
        <button>View Profile</button>
      </div>
    `;
  });
}

displayCandidates(candidates);