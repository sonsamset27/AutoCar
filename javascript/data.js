let users = JSON.parse(localStorage.getItem("users")) || defaultUsers;
let cars = JSON.parse(localStorage.getItem("cars")) || defaultCars;
let infors = JSON.parse(localStorage.getItem("infors")) || defaultInfors;

// Nếu localStorage chưa có thì lưu mặc định vào
if (!localStorage.getItem("users")) {
  localStorage.setItem("users", JSON.stringify(defaultUsers));
}
if (!localStorage.getItem("cars")) {
  localStorage.setItem("cars", JSON.stringify(defaultCars));
}
if (!localStorage.getItem("infors")) {
  localStorage.setItem("infors", JSON.stringify(defaultInfors));
}

const saveCars = () => {
  localStorage.setItem("cars", JSON.stringify(cars));
};

const saveUsers = () => {
  localStorage.setItem("users", JSON.stringify(users));
};

const saveInfors = () => {
  localStorage.setItem("infors", JSON.stringify(infors));
};
