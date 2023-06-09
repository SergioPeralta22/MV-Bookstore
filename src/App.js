import './App.css';
import BookForm from './components/BookForm';
import BookList from './components/BookList';

function App() {
  return (
    <div className="App">
      <BookList />
      <div className="Line" />

      <BookForm />
    </div>
  );
}

export default App;
