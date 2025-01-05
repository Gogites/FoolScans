document.addEventListener("DOMContentLoaded", () => {
  const pagination = document.getElementById("pagination");
  const chapters = [...document.querySelectorAll(".chapter")];
  const itemsPerPage = 10;
  let currentPage = 1;

  function displayPage(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    chapters.forEach((chapter, index) => {
      chapter.style.display = index >= start && index < end ? "block" : "none";
    });
  }

  function setupPagination() {
    const totalPages = Math.ceil(chapters.length / itemsPerPage);
    pagination.innerHTML = "";
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement("button");
      button.textContent = i;
      button.className = i === currentPage ? "active" : "";
      button.addEventListener("click", () => {
        currentPage = i;
        displayPage(currentPage);
        setupPagination();
      });
      pagination.appendChild(button);
    }
  }

  displayPage(currentPage);
  setupPagination();
});
