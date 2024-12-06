const myLibrary = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = false;

    this.info = function() {
        return this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.isRead ? "read" : "not read yet");
    };
}

function addBookToLibrary(){
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const book = new Book(title, author, pages);
    myLibrary.push(book);

}

document.getElementById("add-book-button").addEventListener("click", function () {
    const form = document.getElementById("book-input-form-container");
    form.classList.toggle("hidden"); 
  });
  
document.getElementById("user-input-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting (for now)
    alert("Form submitted!"); // Handle form submission
    document.getElementById("book-input-form-container").classList.add("hidden"); // Hide the form
  });
  

