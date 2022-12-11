document.getElementById("login-submit").addEventListener("click", function () {
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;
    const passField = document.getElementById("user-password");
    const userPass = passField.value;
    if (userEmail == "a@b.com" && userPass == "12345") {
        window.location.href = "banking.html";
    } else {
        alert("invalid input");
    }
});
