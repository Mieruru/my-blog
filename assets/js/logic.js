// declaring variables
const currentTheme = localStorage.getItem('theme')
const themeBtn = document.querySelector('#btnThemeToggle')
const container = document.querySelector('body')

// intercepts incoming theme from localstorage and sets it to initialize as 'light'
if (currentTheme === null) {
  localStorage.setItem('theme', 'light')
}

let theme = currentTheme

// sets theme of page on page load, persists across pages
if (theme === 'dark') {
  container.setAttribute('class', 'dark')
} else {
  container.setAttribute('class', 'light')
}

// function to make button both toggle the theme of the page and save the theme to localstorage for persistence
themeBtn.addEventListener('click', function () {
  if (theme != 'dark') {
    theme = 'dark'
    container.setAttribute('class', 'dark')
    localStorage.setItem('theme', 'dark')
  } else {
    theme = 'light'
    container.setAttribute('class', 'light')
    localStorage.setItem('theme', 'light')
  }
})
