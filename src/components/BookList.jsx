import moment from "moment";
import "./BookList.css";

export const BookList = ({ books, handleRemove, selectBook }) => {
  return (
    <>
      <section className="content-list">
        <h3>Book List</h3>
        <ul>
          {/* {JSON.stringify(books, null, 4)} */}
          {books.map((book, i) => (
            <li>
              <div onClick={() => selectBook(i)}>
                <p className="id">{i + 1}</p>
                <p className="field1">{book.title}</p>
                <p className="field2">{book.author}</p>
                <p className="field3">{book.isbn}</p>
                <p className="field4">{book.price}</p>
                
                <p className="field5">{moment(book.publicationDate).format("YYYY-MM-DD") + "T00:00:00.000Z"}</p>
              </div>
              <button className="deleteButton" onClick={() => handleRemove(i)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};
