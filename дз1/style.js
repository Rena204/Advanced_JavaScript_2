class Library {
    #books;
  
    constructor(initialBooks = []) {
      const uniqueBooks = new Set(initialBooks.map(book => book.title));
      if (uniqueBooks.size !== initialBooks.length) {
        throw new Error('Начальный список книг содержит дубликаты.');
      }
      this.#books = initialBooks;
    }
  
    get allBooks() {
      return this.#books;
    }
  
    addBook(title) {
      if (this.#books.some(book => book.title === title)) {
        throw new Error('Книга с таким названием уже существует в библиотеке.');
      }
      this.#books.push({ title });
    }
  
    removeBook(title) {
      const index = this.#books.findIndex(book => book.title === title);
      if (index === -1) {
        throw new Error('Книги с таким названием нет в библиотеке.');
      }
      this.#books.splice(index, 1);
    }
  
    hasBook(title) {
      return this.#books.some(book => book.title === title);
    }
  }
  
  const library = new Library([
    { title: "Книга 1" },
    { title: "Книга 2" },
  ]);
  
  console.log(library.allBooks); // Выведет текущий список книг
  
  library.addBook("Книга 3"); // Добавит новую книгу в список
  console.log(library.allBooks);
  
  library.removeBook("Книга 2"); // Удалит книгу из списка
  console.log(library.allBooks);
  
  console.log(library.hasBook("Книга 1")); // true
  console.log(library.hasBook("Книга 2")); // false
  