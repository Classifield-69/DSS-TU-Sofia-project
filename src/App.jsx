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
      title: "Title 1",
      author: "Author 1",
      isbn: "ISBN 1",
      price: 100,
      publicationDate: new Date("2021-01-01"),
    },
    {
      title: "Title 2",
      author: "Author 2",
      isbn: "ISBN 2",
      price: 100,
      publicationDate: new Date("2022-01-02"),
    },
    {
      title: "Title 3",
      author: "Author 2",
      isbn: "ISBN 2",
      price: 100,
      publicationDate: new Date("2021-01-01"),
    },
    {
      title: "Title 4",
      author: "Author 2",
      isbn: "ISBN 2",
      price: 100,
      publicationDate: new Date("2021-01-01"),
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
		{selectedBookId}
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
