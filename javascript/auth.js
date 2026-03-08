const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser) {
  window.location.href = "login.html";
}

const logoutBtn = document.querySelector("#logout-btn");
// loguot
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser");
    window.location.href = "login.html";
  });
}