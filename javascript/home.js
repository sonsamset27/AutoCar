const homeCars = document.getElementById("homeCars");

const newestCars = [...cars].sort((a, b) => {
    return b.year - a.year;
}).slice(0, 4);

homeCars.innerHTML = newestCars.map(car => {
    return `
      <div class="car-card">
        <img src="${car.image[0]}" />
        <div class="car-info">
          <h3>${car.brand} ${car.model}</h3>
          <p>${car.year}</p>
          <p class="car-price">${Number(car.price).toLocaleString()} VNĐ</p>
        </div>
      </div>
    `;
}).join("");
// thêm liên hệ
document.addEventListener("submit", (e) => {

    if (e.target.id !== "contact-form") return;
    e.preventDefault();

    const name = document.querySelector(".name").value;
    const phone = document.querySelector(".phone").value;
    const message = document.querySelector(".message").value;
    const newInfor = {
        id: Date.now(),
        name,
        phone,
        message,
        status: "not_called"
    };
    infors.push(newInfor);
    saveInfors();
    alert("Đã gửi liên hệ");
});
