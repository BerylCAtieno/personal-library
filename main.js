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

