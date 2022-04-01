const table = document.querySelector("table")
const bookNameInput = document.querySelector("#bookName")
const authorNameInput = document.querySelector("#authorName")
const initDateInput = document.querySelector("#initDate")
const finishDateInput = document.querySelector("#finishDate")
const RegisterNewBookBtn = document.querySelector("#register")

class Book {
    constructor(name, author, initDate, finishDate) {
        this.name = name
        this.author = author
        this.initDate = initDate
        this.finishDate = finishDate
    }
}

const books = []

function registerNewBook() {
    const newBook = document.createElement("tr")

    books.push(new Book(bookNameInput.value, authorNameInput.value,
        initDateInput.value.split("-").reverse().join("-"), finishDateInput.value.split("-").reverse().join("-")))

    const bookName = document.createElement("td")
    const authorName = document.createElement("td")
    const initDate = document.createElement("td")
    const finishDate = document.createElement("td")
    const editableMark = document.createElement("td")
    const penIcon = document.createElement("i")
    penIcon.classList.add("fas", "fa-pen")
    editableMark.classList.add("editTd")
    
    bookName.textContent = books[books.length - 1].name
    authorName.textContent = books[books.length - 1].author
    initDate.textContent = books[books.length - 1].initDate
    finishDate.textContent = books[books.length - 1].finishDate
    editableMark.appendChild(penIcon)

    newBook.appendChild(bookName)
    newBook.appendChild(authorName)
    newBook.appendChild(initDate)
    newBook.appendChild(finishDate)
    newBook.appendChild(editableMark)

    table.children[0].appendChild(newBook)
}
RegisterNewBookBtn.addEventListener("click", registerNewBook)

const updateScreen = document.querySelector(".update")
const closeMenuBtn = document.querySelector(".closeMenuBtn")

closeMenuBtn.addEventListener("click", () => updateScreen.style.display = "none")

table.addEventListener("click", event => {
    updateScreen.style.display = "flex"

    const selectedBook = event.target.parentNode
    const updateScreenInputs = updateScreen.children
    updateScreenInputs[1].value = selectedBook.children[0].textContent
    updateScreenInputs[2].value = selectedBook.children[1].textContent
    updateScreenInputs[3].value = selectedBook.children[2].textContent.split("-").reverse().join("-")
    updateScreenInputs[4].value = selectedBook.children[3].textContent.split("-").reverse().join("-")

    console.log(books)
    function updateBook() {
        const bookIndex =  Array.from(table.children[0].children).indexOf(selectedBook) - 1

        books[bookIndex].name = updateScreenInputs[1].value
        books[bookIndex].author = updateScreenInputs[2].value
        books[bookIndex].initDate = updateScreenInputs[3].value
        books[bookIndex].finishDate = updateScreenInputs[4].value

        selectedBook.children[0].textContent = updateScreenInputs[1].value
        selectedBook.children[1].textContent = updateScreenInputs[2].value
        selectedBook.children[2].textContent = updateScreenInputs[3].value.split("-").reverse().join("-")
        selectedBook.children[3].textContent = updateScreenInputs[4].value.split("-").reverse().join("-")
        console.log(books)
    }
    updateBtn.onclick = () => updateBook()

    function deleteBook() {
        const bookIndex =  Array.from(table.children[0].children).indexOf(selectedBook) - 1
    
        books.splice(bookIndex, 1)
        table.children[0].removeChild(selectedBook)
    }
    deleteBtn.onclick = () => deleteBook()
})