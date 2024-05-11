import { useState } from "react";
import "./App.css";
import { BookList } from "./components/BookList";
import { Navbar } from "./components/Navbar";
import { DetailsSection } from "./components/DetailsSection";
import { Footer } from "./components/Footer";

function App() {
  const [selectedBook, setSelectedBook] = useState();
  const [selectedBookId, setSelectedBookId] = useState();
  const [books, setBooks] = useState([
    {
      title: "Грешката",
      author: "Ел Кенеди",
      isbn: "ISBN 1",
      price: 17.90,
      publicationDate: new Date("2021-01-01"),
    },
    {
      title: "Още 365 дни",
      author: "Бланка Липинска",
      isbn: "ISBN 2",
      price: 19,
      publicationDate: new Date("2022-01-02"),
    },
    {
      title: "The Lord of the Rings",
      author: "John Ronald Reuel Tolkien",
      isbn: "ISBN 3",
      price: 20,
      publicationDate: new Date("1957-07-29"),
    },
    {
      title: "The Hobbit",
      author: "John Ronald Reuel Tolkien",
      isbn: "ISBN 4",
      price: 25,
      publicationDate: new Date("1937-09-21"),
    },
  ]);
  const selectBook = (id) => {
    setSelectedBookId(id);
    setSelectedBook(books[id]);
  };
  const handleAdd = (data) => {
	if(!isNaN(selectedBookId)) {
		const updatedBooks = books.map((book, index) => {
			if(index === selectedBookId) {
				return data
			}
			return book;
		})
		setBooks(updatedBooks)
	} else {
		setBooks([...books, data]);
	}
  };
  const handleRemove = (id) => {
    const newBooks = books.filter((book, index) => index !== id);
    setBooks(newBooks);
	setSelectedBookId(undefined)
    setSelectedBook(undefined)
  };
  return (
    <>
      <Navbar />
      <div className="contentWrapper">
        <BookList
          books={books}
          handleRemove={handleRemove}
          selectBook={selectBook}
        />
        <DetailsSection
          data={selectedBook}
          handleAdd={handleAdd}
          selectedBookId={selectedBookId}
          setSelectedBookId={setSelectedBookId}
          setSelectedBook={setSelectedBook}
        />
      </div>
	  <Footer />
    </>
  );
}

export default App;
