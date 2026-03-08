const login = () => {

  const username = document.querySelector("#username").value.trim();
  const password = document.querySelector("#password").value.trim();

  if (!username || !password) {
    alert("Vui lòng nhập đầy đủ thông tin");
    return;
  }

  const user = users.find(u => 
    u.username === username && u.password === password
  );

  if (user) {

    // Lưu user đang đăng nhập
    localStorage.setItem("currentUser", JSON.stringify(user));

    window.location.href = "admin-account.html";

  } else {
    alert("Sai thông tin đăng nhập");
  }
};

// Nếu đã login rồi thì không cho vào login nữa
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
if (currentUser) {
  window.location.href = "admin-account.html";
}

document.querySelector(".btn").addEventListener("click", login);

