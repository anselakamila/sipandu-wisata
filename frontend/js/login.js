function login(){

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if(username === "admin" && password === "123"){

        alert("Login berhasil!");

        window.location.href = "index.html";

    } else {

        alert("Username atau password salah!");

    }

}