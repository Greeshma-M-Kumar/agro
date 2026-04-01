// Save Farmer Data
document.getElementById("farmerForm")?.addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const crop = document.getElementById("crop").value;
  const location = document.getElementById("location").value;

  const farmer = { name, crop, location };

  let farmers = JSON.parse(localStorage.getItem("farmers")) || [];
  farmers.push(farmer);
  localStorage.setItem("farmers", JSON.stringify(farmers));

  let history = JSON.parse(localStorage.getItem("history")) || [];
  history.push(farmer);
  localStorage.setItem("history", JSON.stringify(history));

  alert("Data submitted successfully!");

  document.getElementById("farmerForm").reset();
});

// Display Farmers
function loadFarmers() {
  const list = document.getElementById("farmerList");
  if (!list) return;

  const farmers = JSON.parse(localStorage.getItem("farmers")) || [];

  farmers.forEach(f => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <h3>${f.name}</h3>
      <p>Crop: ${f.crop}</p>
      <p>Location: ${f.location}</p>
      <button onclick="contact()">Contact</button>
    `;

    list.appendChild(card);
  });
}

function contact() {
  alert("Contact feature coming soon!");
}

// View History
function viewHistory() {
  const historyBox = document.getElementById("historyBox");
  const history = JSON.parse(localStorage.getItem("history")) || [];

  historyBox.innerHTML = "<h3>History</h3>";

  history.forEach(h => {
    historyBox.innerHTML += `<p>${h.name} - ${h.crop} - ${h.location}</p>`;
  });
}

// Auto load
loadFarmers();