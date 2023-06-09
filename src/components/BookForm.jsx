import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid'; //eslint-disable-line
import { getBooks, postBook } from '../redux/books/booksSlice';
import '../App.css';

const BookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title,
      author,
      category: 'Undefined',
    };
    dispatch(postBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="book-form">
      <h3 className="bookform-title">ADD NEW BOOK</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Book Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-title"
        />
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="input-author"
        />
        <button type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};
export default BookForm;
