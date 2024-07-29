const themeToggle = document.querySelector('#btnThemeToggle')
const container = document.querySelector('.container')

let mode = 'light'

themeToggle.addEventListener('click', function () {
    if (mode === 'light') {
        mode = 'dark'
        container.setAttribute('class', 'dark')
    }
    else {
        mode = 'light'
        container.setAttribute('class', 'light')
    }
})