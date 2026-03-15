const login = document.querySelector('.login')
if (sessionStorage.getItem("isLoggedIn") === "true") {
    login.style.display = "none"
}
