// console.log("Hello from src/index.js!");
// const cm = document.querySelector("#click-me");
// console.log("this is my button", cm)


// const buttons = document.querySelectorAll("button")

// // console.log(buttons)
// buttons.forEach(btn => console.log(btn));


// buttons.each do | btn |
//   puts btn
// end

// cm.addEventListener("click", (event) => {
//   console.log(event)
//   // cm.innerText = "It worked!!!"
//   event.currentTarget.innerText = "It worked!!!"
//   event.currentTarget.disabled = true
//   // event.currentTarget.setAttribute("disabled", "")
// })

const listResults = document.querySelector(".ul-tag")
const searchInput = document.querySelector("#search-input")
const searchForm = document.querySelector("#search-form")

searchForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const searchValue = searchInput.value
  listResults.innerHTML = ""
  fetchMovies(searchValue)
})

const fetchMovies = (searchTerm) => {
  const url = `http://www.omdbapi.com/?s=${searchTerm}&apikey=adf1f2d7`
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      // console.log(data.Search)
      data.Search.forEach(result => {
        // console.log(result.Title)
        // console.log(result.Poster)
        listResults.insertAdjacentHTML("beforeend", `<li><div class="d-flex flex-column">${result.Title} <img src="${result.Poster}"></div></li >`)

      })
    })
}


const loginForm = document.querySelector("#form")
const email = document.querySelector("#email")
const password = document.querySelector("#password")


loginForm.addEventListener("submit", (event) => {
  event.preventDefault()
  const emailValue = email.value
  const passwordValue = password.value
  const url = "https://reqres.in/api/login"
  fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ "email": emailValue, "password": passwordValue })
  }).then(response => response.json())
    .then(data => console.log(data))
})