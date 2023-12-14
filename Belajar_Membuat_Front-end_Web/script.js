document.addEventListener("DOMContentLoaded", function () {
  //inisialisasi variabel untuk menampung elemen pada dokumen
  const submitNewBook = document.getElementById("inputBook");
  const inputBookTitle = document.getElementById("inputBookTitle");
  const inputBookAuthor = document.getElementById("inputBookAuthor");
  const inputBookYear = document.getElementById("inputBookYear");
  const inputBookIsComplete = document.getElementById("inputBookIsComplete");
  const incompleteBookshelfList = document.getElementById("incompleteBookshelfList");
  const completeBookshelfList = document.getElementById("completeBookshelfList");
  const searchSubmit = document.getElementById("searchSubmit");
  const searchBookTitle = document.getElementById("searchBookTitle");
  const RENDER_EVENT = "render_books";
  const books = [];
  const SAVED_EVENT = "saved_books";
  const STORAGE_KEY = "books_key";

  function generateId() {
    return +new Date();
  }

  submitNewBook.addEventListener("submit", function (event) {
    event.preventDefault();
    addBook();
  });

  searchSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    searchBook();
  });

  //membuat custom event
  document.addEventListener(RENDER_EVENT, function () {
    console.log(books);
    incompleteBookshelfList.innerHTML = "";
    completeBookshelfList.innerHTML = "";

    makeBookList();
  });

  //menambahkan data buku
  function addBook() {
    const title = inputBookTitle.value;
    const author = inputBookAuthor.value;
    const year = parseInt(inputBookYear.value);
    const isComplete = inputBookIsComplete.checked;

    inputBookTitle.value = "";
    inputBookAuthor.value = "";
    inputBookYear.value = "";
    inputBookIsComplete.checked = false;

    const bookObject = {
      id: generateId(),
      title,
      author,
      year,
      isComplete,
    };

    books.push(bookObject);

    document.dispatchEvent(new Event(RENDER_EVENT));
    saveData();
  }

  //membuat elemen untuk buku
  function createBookElement(book) {
    const bookItem = document.createElement("article");
    bookItem.classList.add("book_item");
    const bookStatus = book.isComplete ? "Belum selesai dibaca" : "Selesai dibaca";

    bookItem.innerHTML = `
        <h3>${book.title}</h3>
        <p><span>Penulis:</span> ${book.author}</p>
        <p><span>Tahun:</span> ${book.year}</p>
        
        <div class="action">
          <button class="green">${bookStatus}</button>
          <button class="red">Hapus buku</button>
        </div>
      `;

    const deleteButton = bookItem.querySelector(".red");
    deleteButton.addEventListener("click", function () {
      const index = books.indexOf(book);
      if (index !== -1) {
        const confirmed = confirm("Apakah Anda yakin untuk menghapus buku dari rak?");
        if (confirmed) {
          books.splice(index, 1);
          document.dispatchEvent(new Event(RENDER_EVENT));
          saveData();
        }
      }
    });

    const statusButton = bookItem.querySelector(".green");
    statusButton.addEventListener("click", function () {
      book.isComplete = !book.isComplete;
      document.dispatchEvent(new Event(RENDER_EVENT));
      saveData();
    });

    return bookItem;
  }

  //membuat list buku
  function makeBookList() {
    books.forEach(function (book) {
      const bookItem = createBookElement(book);

      if (book.isComplete) {
        completeBookshelfList.append(bookItem);
      } else {
        incompleteBookshelfList.append(bookItem);
      }
    });
  }

  //mencari buku sesuai judul
  function searchBook() {
    const query = searchBookTitle.value.toLowerCase();
    if (query.length > 0) {
      const filteredBooks = books.filter(function (book) {
        return book.title.toLowerCase().includes(query);
      });

      if (filteredBooks.length > 0) {
        let message = `Buku dengan judul '${query}' berada di rak `;
        let foundBook = false;

        incompleteBookshelfList.innerHTML = "";
        completeBookshelfList.innerHTML = "";

        filteredBooks.forEach(function (book) {
          const bookItem = createBookElement(book);

          if (book.isComplete) {
            completeBookshelfList.append(bookItem);
            message += "'Selesai dibaca'";
            foundBook = true;
          } else {
            incompleteBookshelfList.append(bookItem);
            message += "'Belum selesai dibaca'";
            foundBook = true;
          }
        });

        if (foundBook) {
          alert(message);
        }
      } else {
        alert(`Buku dengan judul '${query}' tidak ditemukan.`);
      }
    } else {
      alert("Masukan judul buku yang ingin Anda cari terlebih dahulu.");
    }
  }

  if (isStorageExist()) {
    loadDataFromStorage();
  }

  function isStorageExist() {
    if (typeof Storage === undefined) {
      alert("Browser kamu tidak mendukung local storage");
      return false;
    }
    return true;
  }

  function loadDataFromStorage() {
    const takeData = localStorage.getItem(STORAGE_KEY);
    let data = JSON.parse(takeData);

    if (data !== null) {
      for (const book of data) {
        books.push(book);
      }
    }

    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  function saveData() {
    if (isStorageExist()) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(books));
      document.dispatchEvent(new Event(SAVED_EVENT));
    }
  }
});
