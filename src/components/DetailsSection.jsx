import { useEffect, useState } from "react";
import "./DetailsSection.css";
import moment from "moment";

export const DetailsSection = ({ data, handleAdd, selectedBookId, setSelectedBookId, setSelectedBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [price, setPrice] = useState("");
  const [publicationDate, setPublicationDate] = useState('');

  useEffect(() => {
    if (data) {
      setTitle(data.title);
      setAuthor(data.author);
      setIsbn(data.isbn);
      setPrice(data.price);
      setPublicationDate(moment.utc(data.publicationDate).format("YYYY-MM-DD"));
    }
  }, [data]);

  const clearFields = () => {
    setTitle('')
    setAuthor('')
    setIsbn('')
    setPrice('')
    setPublicationDate('')
    if(data) {
      clearSelectedBook()
    }
  }

  const clearSelectedBook = () => {
    setSelectedBookId(undefined)
    setSelectedBook(undefined)
  }
  return (
    <>
      <section className="content-details">
        {selectedBookId}<br/>
        {JSON.stringify(data)}
        <h3 className="title">Details Section</h3>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAdd({
              title,
              author,
              isbn,
              price,
              publicationDate
            });
            clearFields()
          }}
        >
          <label>Title</label> <br />
          <input
            id="field1"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <label>Author</label> <br />
          <input
            id="field2"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <br />
          <label>ISBN</label> <br />
          <input
            id="field3"
            name="isbn"
            value={isbn}
            onChange={(e) => setIsbn(e.target.value)}
            required
          />
          <br />
          <label>Price</label> <br />
          <input
            id="field4"
            name="price"
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <br />
          <label>Publication Date</label> <br />
          <input
            id="field5"
            name="publicationDate"
            type="date"
            pattern="\d{4}-\d{2}-\d{2}"
            value={publicationDate}
            onChange={(e) => setPublicationDate(e.target.value)}
            required
          />
          <br />
          <div className="buttons">
            <button id="clearButton" onClick={() => clearFields()}>Clear</button>
            <button id="saveButton" type="submit">Submit</button>
          </div>
        </form>
      </section>
    </>
  );
};
