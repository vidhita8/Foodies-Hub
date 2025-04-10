const validUsername = "user";
const validPassword = "pass123";

function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById("uname");
    const password = document.getElementById("psw");
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");

    let isValid = true;

    // Reset error messages
    usernameError.style.display = "none";
    passwordError.style.display = "none";

    if (username.value !== validUsername) {
        usernameError.textContent = "Invalid Username";
        usernameError.style.display = "block";
        isValid = false;
    }

    if (password.value !== validPassword) {
        passwordError.textContent = "Invalid Password";
        passwordError.style.display = "block";
        isValid = false;
    }

    if (isValid) {
        window.location.href = "./pages/FEE(project).html";
    }
}











