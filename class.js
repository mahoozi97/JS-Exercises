class User {
  constructor(name) {
    this.name = name;
  }

  // creates a separate array for each user
  array = [];

  static array2 = []; // shared among all users

  sayHi() {
    alert(this.name);
  }

  pushToSharedArray() {
    User.array2.push(this.name);
  }
}

let user = new User("Ali");
user.pushToSharedArray();
let user2 = new User("Hasan");
user2.pushToSharedArray();
console.log(User.array2);

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
    Book.books.push(this); // push automatically
    Book.showAllBooks(); // call static method automatically
  }

  static books = [];

  // I push automatically...
  // pushToBooks() {
  //   Book.books.push(this);
  //   console.log(Book.books);
  // }

  describe() {
    let book = `Title: ${this.title}, Author: ${this.author}`;
    console.log(book);
  }

  static showAllBooks() {
    if (Book.books.length > 1) {
    console.log("All Books")
    Book.books.forEach((book) => book.describe());
    }
  }
}

// Book.books.length = 0


let book1 = new Book("Swift", "Apple");
// book1.pushToBooks();
// book1.describe();

let book2 = new Book("crash python course", "Eric Matthes");
// book2.pushToBooks();
// book2.describe();

// Book.showAllBooks();

console.log(Book.books.length)