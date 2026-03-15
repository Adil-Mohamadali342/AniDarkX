const passwordInput = document.querySelector('.password');
const confirmInput = document.querySelector('.confirm');
const form = document.querySelector('form')
const error = document.querySelector('.error')
const h1 = document.querySelector('h1')


form.addEventListener('submit', (event) => {

    const password = passwordInput.value;
    const confirm = confirmInput.value;
    if (confirm !== password) {
        event.preventDefault();
        h1.innerText = ""
        confirmInput.style.borderColor = "red"
        confirmInput.style.borderRadius = "5px"
        confirmInput.style.padding = "8px"
        confirmInput.style.border = "1px solid red"
        h1.innerText = "Error!"
        error.appendChild(h1)
    }
    else {
        sessionStorage.setItem("isLoggedIn", "true")
    }
})