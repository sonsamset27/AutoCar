
const login = () =>{
  const username = document.querySelector("#username").value;
  const password = document.querySelector("#password").value;

  const user = users.find(u => u.username === username && u.password === password);

  if(user){
    localStorage.setItem("loggedIn", "true");
    window.location.href = "admin-account.html";
  } else{
    alert("Sai thông tin đăng nhập")
  }
}
document.querySelector(".btn").addEventListener("click", login);