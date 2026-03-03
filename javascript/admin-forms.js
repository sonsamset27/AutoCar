const formList = document.querySelector(".hero-userList");

// Hiển thị danh sách liên hệ
const renderForms = () => {
    formList.innerHTML = infors.map(info => `
        <div class="userList-box">
            <p>${info.id}</p>
            <p>${info.name}</p>
            <p>${info.phone}</p>
            <p>${info.message}</p>
            <button class="toggle-status" data-id="${info.id}">
                ${info.status === "called" ? "Đã gọi" : "Chưa gọi"}
            </button>
        </div>
    `).join("");
};

// Đổi trạng thái
const toggleStatus = (id) => {
    const form = infors.find(item => item.id === id);
    if (!form) return;

    form.status = form.status === "called" ? "not_called" : "called";
};

// Bắt sự kiện click
formList.addEventListener("click", (e) => {
    const id = Number(e.target.dataset.id);

    if (e.target.classList.contains("toggle-status")) {
        toggleStatus(id);
        saveInfors();
        renderForms();
    }
});

renderForms();