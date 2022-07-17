import { useState } from 'react';
//6a. import axios
import axios from 'axios';

function BookForm({ fetchBookList }) {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Adding book`, { title, author });

        // TODO - axios request to server to add book
        //6b. Make the async request
        axios
            .post('/books', { title, author })
            .then((response) => {
                //8. THEN when response comes back, update redux
                fetchBookList();
                //6c. empty inputs
                setTitle('');
                setAuthor('');
            })
            .catch((err) => {
                console.log(`ERR POSTing: ${err}`);
            });
    };

    return (
        <section>
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit} className="add-book-form">
                <input
                    required
                    placeholder="Title"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                o
                <input
                    required
                    placeholder="Author"
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                />
                <button type="submit">Add Book</button>
            </form>
        </section>
    );
}

export default BookForm;
