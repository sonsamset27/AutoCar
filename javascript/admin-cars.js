const carList = document.querySelector(".hero-carList");
const addCarBtn = document.querySelector(".add-car-btn");
const carModal = document.querySelector("#car-modal");
const saveCarBtn = document.querySelector("#save-car");
const closeCarModal = document.querySelector("#close-car-modal");
const imageInput = document.querySelector("#car-images");
const previewBox = document.querySelector(".image-preview");

let editCarId = null;
let selectedImages = [];

/* ================= RENDER ================= */
const renderCars = () => {
    carList.innerHTML = cars.map(car => `
        <div class="carList-box">
            <div class="car-info">
                ${
                    car.image && car.image.length
                        ? `<img src="${car.image[0]}" class="car-thumb">`
                        : `<div class="no-image">No Image</div>`
                }
                <div>
                    <h3>${car.brand} ${car.model}</h3>
                    <p>Năm: ${car.year}</p>
                    <p>Giá: ${Number(car.price).toLocaleString()} VNĐ</p>
                    <p>Hộp số: ${car.transmission}</p>
                </div>
            </div>
            <div class="car-actions">
                <button class="edit-car" data-id="${car.id}">Sửa</button>
                <button class="delete-car" data-id="${car.id}">Xoá</button>
            </div>
        </div>
    `).join("");
};

/* ================= XỬ LÝ ẢNH ================= */
imageInput.addEventListener("change", (e) => {
    const files = Array.from(e.target.files);

    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = () => {
            selectedImages.push(reader.result);

            const img = document.createElement("img");
            img.src = reader.result;
            img.classList.add("preview-img");
            previewBox.appendChild(img);
        };
        reader.readAsDataURL(file);
    });
});

/* ================= MODAL ================= */
const openCarModal = () => carModal.style.display = "flex";

const closeCar = () => {
    carModal.style.display = "none";
    previewBox.innerHTML = "";
    selectedImages = [];
};

/* ================= ADD ================= */
const addCar = (data) => {
    const newCar = {
        id: cars.length ? cars[cars.length - 1].id + 1 : 1,
        ...data,
        status: "available",
        image: selectedImages
    };
    cars.push(newCar);
};

/* ================= UPDATE ================= */
const updateCar = (id, data) => {
    const car = cars.find(c => c.id === id);
    if (!car) return;

    Object.assign(car, data);

    // Nếu có ảnh mới thì thay
    if (selectedImages.length) {
        car.image = selectedImages;
    }
};

/* ================= DELETE ================= */
const deleteCar = (id) => {
    cars = cars.filter(car => car.id !== id);
};

/* ================= SAVE ================= */
const handleSaveCar = () => {
    const brand = document.querySelector("#brand").value.trim();
    const model = document.querySelector("#model").value.trim();
    const year = document.querySelector("#year").value.trim();
    const price = document.querySelector("#price").value.trim();
    const transmission = document.querySelector("#transmission").value.trim();
    const description = document.querySelector("#description").value.trim();

    if (!brand || !model || !year || !price) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    const carData = { brand, model, year, price, transmission, description };

    if (editCarId !== null) {
        updateCar(editCarId, carData);
        editCarId = null;
    } else {
        addCar(carData);
    }

    saveCars();
    renderCars();
    closeCar();

    document.querySelectorAll("#car-modal input, #car-modal textarea")
        .forEach(el => el.value = "");
};

/* ================= CLICK ================= */
carList.addEventListener("click", (e) => {
    const id = Number(e.target.dataset.id);

    if (e.target.classList.contains("delete-car")) {
        if (confirm("Bạn có chắc muốn xoá xe?")) {
            deleteCar(id);
            saveCars();
            renderCars();
        }
    }

    if (e.target.classList.contains("edit-car")) {
        const car = cars.find(c => c.id === id);
        editCarId = id;

        document.querySelector("#brand").value = car.brand;
        document.querySelector("#model").value = car.model;
        document.querySelector("#year").value = car.year;
        document.querySelector("#price").value = car.price;
        document.querySelector("#transmission").value = car.transmission;
        document.querySelector("#description").value = car.description;

        selectedImages = car.image || [];
        previewBox.innerHTML = "";

        selectedImages.forEach(img => {
            const image = document.createElement("img");
            image.src = img;
            image.classList.add("preview-img");
            previewBox.appendChild(image);
        });

        openCarModal();
    }
});

/* ================= EVENT ================= */
addCarBtn.addEventListener("click", () => {
    editCarId = null;
    openCarModal();
});

closeCarModal.addEventListener("click", closeCar);
saveCarBtn.addEventListener("click", handleSaveCar);

renderCars();