const userList = document.querySelector(".hero-userList");
const addBtn = document.querySelector(".add-acc-btn");
const modal = document.querySelector("#user-modal");
const saveBtn = document.querySelector("#save-user");
const closeBtn = document.querySelector("#close-modal");

let editId = null;

// Hiển thị thông tin
const renderUsers = () => {
    userList.innerHTML = users.map(user => `
        <div class="userList-box">
            <p>${user.id}</p>
            <p>${user.username}</p>
            <p>${user.password}</p>
            <button class="edit-acc" data-id="${user.id}">Sửa tài khoản</button>
            <button class="delete-acc" data-id="${user.id}">Xoá tài khoản</button>
        </div>
    `).join("");
};

// Bật tắt pop up thêm, sửa account

const openModal = () => {
    modal.style.display = "flex";
};

const closeModal = () => {
    modal.style.display = "none";
};

// thêm tài khoản
const addUser = (username, password) => {

    const exist = users.find(u => u.username === username);
    if (exist) {
        alert("Username đã tồn tại");
        return false;
    }

    const newUser = {
        id: users.length ? users[users.length - 1].id + 1 : 1,
        username,
        password
    };

    users.push(newUser);
    return true;
};

// Cập nhật tài khoản
const updateUser = (id, username, password) => {
    const user = users.find(u => u.id === id);
    if (!user) return;

    user.username = username;
    user.password = password;
};

// Xoá tài khoản
const deleteUser = (id) => {
    users = users.filter(user => user.id !== id);
};

// Lưu thông tin trong form popup
const handleSave = () => {

    const username = document.querySelector("#new-username").value.trim();
    const password = document.querySelector("#new-password").value.trim();

    if (!username || !password) {
        alert("Vui lòng nhập đầy đủ thông tin");
        return;
    }

    if (editId !== null) {
        updateUser(editId, username, password);
        editId = null;
    } else {
        const success = addUser(username, password);
        if (!success) return;
    }

    saveUsers();
    renderUsers();
    closeModal();

    document.querySelector("#new-username").value = "";
    document.querySelector("#new-password").value = "";
};

// Kiểm tra sự kiện bấm
const handleUserListClick = (e) => {

    const id = Number(e.target.dataset.id);

    if (e.target.classList.contains("delete-acc")) {
        if (confirm("Bạn có chắc muốn xoá?")) {
            deleteUser(id);
            saveUsers();
            renderUsers();
        }
    }

    if (e.target.classList.contains("edit-acc")) {
        const user = users.find(u => u.id === id);
        editId = id;
        document.querySelector("#new-username").value = user.username;
        document.querySelector("#new-password").value = user.password;
        openModal();
    }
};

// Bắt sự kiện click
addBtn.addEventListener("click", () => {
    editId = null;
    openModal();
});

closeBtn.addEventListener("click", closeModal);
saveBtn.addEventListener("click", handleSave);
userList.addEventListener("click", handleUserListClick);

renderUsers();