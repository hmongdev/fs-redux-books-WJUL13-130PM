import BookList from '../BookList/BookList';
import BookForm from '../BookForm/BookForm';
import './App.css';
//1. import axios and useDispatch
import axios from 'axios';
import { useDispatch } from 'react-redux';
//5a. useEffect
import { useEffect } from 'react';

function App() {
    //2. dispatch
    const dispatch = useDispatch();

    //3. GET Book List from server
    const fetchBookList = () => {
        axios.get('/books').then((response) => {
            dispatch({
                type: 'SET_BOOK_LIST',
                payload: response.data,
            }).catch((err) => {
                console.log(`ERR fetchBookList: ${err}`);
            });
        });
    };

    //5b. useEffect //comes before return
    useEffect(() => {
        fetchBookList();
    }, []);

    return (
        <div className="App">
            <header>
                <h1>Books w/ Redux!</h1>
            </header>
            <main>
                {/* 7. pass fetchBookList as prop to BookForm */}
                <BookForm fetchBookList={fetchBookList} />
                <BookList />
            </main>
        </div>
    );
}

export default App;
