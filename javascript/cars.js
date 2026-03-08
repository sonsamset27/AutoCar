const grid = document.querySelector(".cars-grid");
const carCount = document.getElementById("carCount");
const loadMore = document.getElementById("loadMore");
const popup = document.getElementById("popup");
const popupBody = document.getElementById("popupBody");
const yearInput = document.getElementById("year");

let filteredCars = [...cars];
let visibleCars = 20;

// render xe
function renderCars() {
  const showCars = filteredCars.slice(0, visibleCars);
  grid.innerHTML = showCars.map(car => `
    <div class="car-card">
      <img src="${car.image[0]}">
      <div class="car-info">
        <h3>${car.brand} ${car.model}</h3>
        <p>${car.year}</p>
        <p class="car-price">${Number(car.price).toLocaleString()} VNĐ</p>
        <div class="view-more" data-id="${car.id}">Xem thêm</div>
      </div>
    </div>
  `).join("");

  carCount.innerText ="Hiện đang có " + filteredCars.length + " xe sẵn sàng giao bán";
  loadMore.style.display = visibleCars >= filteredCars.length ? "none" : "block";
}
renderCars();

//load thêm xe
loadMore.onclick = () => {
  visibleCars += 20;
  renderCars();
};

// popup
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("view-more")) return;
  const id = Number(e.target.dataset.id);
  const car = cars.find(c => c.id === id);
  popup.style.display = "flex";

  popupBody.innerHTML = `
    <button class="popup-close" id="closePopup">✕</button>
    <h2>${car.brand} ${car.model}</h2>
    <p><b>Hãng:</b> ${car.brand}</p>
    <p><b>Năm:</b> ${car.year}</p>
    <p><b>Hộp số:</b> ${car.transmission}</p>
    <p class="car-price">
      ${Number(car.price).toLocaleString()} VNĐ
    </p>
    <div class="popup-gallery">
      <div class="thumb-list">
        ${car.image.map(img => `
          <img src="${img}" class="thumb">
        `).join("")}
      </div>
      <div class="main-img">
        <img src="${car.image[0]}" id="mainImage">
      </div>
    </div>
    <p class="car-description">${car.description}</p>
    <div class="form-wrapper">
      <h3>Liên hệ tư vấn</h3>
      <form id="contactForm" class="contact-form">
        <input placeholder="Tên" id="name" required>
        <input placeholder="SĐT" id="phone" required>
        <textarea id="message">Tôi quan tâm đến ${car.brand} ${car.model}</textarea>
        <button>Gửi</button>
      </form>
    </div>
  `;
});

// ảnh trong popup
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("thumb")) return;
  const mainImage = document.getElementById("mainImage");
  mainImage.src = e.target.src;

});

// đóng popup
document.addEventListener("click", (e) => {
  if (e.target.id === "closePopup") {
    popup.style.display = "none";
  }
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

// liên hệ trong popup
document.addEventListener("submit", (e) => {
  if (e.target.id !== "contactForm") return;
  e.preventDefault();
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const message = document.getElementById("message").value;

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
  popup.style.display = "none";
});

// bộ lọc
document.getElementById("applyFilter").onclick = () => {
  const year = yearInput.value;

  const brandChecked =
    [...document.querySelectorAll(".brand-filter:checked")]
      .map(e => e.value);
  const transmissionChecked =
    [...document.querySelectorAll(".transmission-filter:checked")]
      .map(e => e.value);

  filteredCars = cars.filter(car => {
    const brandMatch =
      brandChecked.length === 0 ||
      brandChecked.includes(car.brand);

    const yearMatch =
      !year || car.year == year;

    const transmissionMatch =
      transmissionChecked.length === 0 ||
      transmissionChecked.includes(car.transmission);

    return (
      brandMatch &&
      yearMatch &&
      transmissionMatch
    );

  });

// sắp xếp
  if (priceSort.value === "asc") {
    filteredCars.sort(
      (a, b) => Number(a.price) - Number(b.price)
    );
  }

  if (priceSort.value === "desc") {
    filteredCars.sort(
      (a, b) => Number(b.price) - Number(a.price)
    );
  }
  visibleCars = 20;
  renderCars();
};

// xoá bộ lọc
document.getElementById("clearFilter").onclick = () => {
  filteredCars = [...cars];
  visibleCars = 20;
  document.querySelectorAll("input[type='checkbox']").forEach(i => i.checked = false);

  yearInput.value = "";
  priceSort.value = "";
  renderCars();
};