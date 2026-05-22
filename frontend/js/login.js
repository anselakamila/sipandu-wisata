function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // asal tidak kosong
    if(username !== "" && password !== ""){

        alert("Login berhasil!");

        window.location.href = "index.html";

    } else {

        alert("Username dan password harus diisi!");

    }
}