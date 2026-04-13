let allData = [];
let filteredData = [];

let currentPage = 1;
const rowsPerPage = 5;

// Fetch Data
async function fetchData() {
  const res = await fetch("https://674e84f1635bad45618eebc1.mockapi.io/api/v1/projects");
  const data = await res.json();

  allData = data;
  filteredData = data;

  displayData();
}

// Display Data
function displayData() {
  const tableBody = document.getElementById("tableBody");
  tableBody.innerHTML = "";

  let start = (currentPage - 1) * rowsPerPage;
  let end = start + rowsPerPage;

  let pageData = filteredData.slice(start, end);

  pageData.forEach(item => {
    let row = `
      <tr>
        <td>${item.id}</td>
        <td>${item.ProjectName}</td>
        <td>${item.Details}</td>
        <td>${item.Status}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Search
document.getElementById("search").addEventListener("input", function() {
  let value = this.value.toLowerCase();

  filteredData = allData.filter(item =>
    item.ProjectName.toLowerCase().includes(value)
  );

  currentPage = 1;
  displayData();
});

// Filter
document.getElementById("filter").addEventListener("change", function() {
  let value = this.value;

  if (value === "all") {
    filteredData = allData;
  } else {
    filteredData = allData.filter(item =>
      item.status.toLowerCase() === value
    );
  }

  currentPage = 1;
  displayData();
});

// Pagination
function nextPage() {
  if ((currentPage * rowsPerPage) < filteredData.length) {
    currentPage++;
    displayData();
  }
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    displayData();
  }
}

fetchData();
