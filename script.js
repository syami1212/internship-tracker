// Get elements
const form = document.getElementById("internshipForm");
const tableBody = document.querySelector("#internshipTable tbody");

// Load from localStorage
let internships = JSON.parse(localStorage.getItem("internships")) || [];

// Render internships in table
function renderTable() {
  tableBody.innerHTML = "";
  internships.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.company}</td>
      <td>${item.role}</td>
      <td>${item.deadline}</td>
      <td>${item.status}</td>
      <td><button onclick="deleteItem(${index})">Delete</button></td>
    `;
    tableBody.appendChild(row);
  });
}

// Add internship
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newItem = {
    company: document.getElementById("company").value,
    role: document.getElementById("role").value,
    deadline: document.getElementById("deadline").value,
    status: document.getElementById("status").value,
  };
  internships.push(newItem);
  localStorage.setItem("internships", JSON.stringify(internships));
  form.reset();
  renderTable();
});

// Delete internship
function deleteItem(index) {
  internships.splice(index, 1);
  localStorage.setItem("internships", JSON.stringify(internships));
  renderTable();
}

// Initial render
renderTable();
