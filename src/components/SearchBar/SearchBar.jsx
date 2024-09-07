import css from './SearchBar.module.css';

import {useState} from 'react';
import toast from 'react-hot-toast';

export default function SearchBar({onSubmit}) {

    const [input, setInput] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (input.trim() === '') {
            toast.error('Please enter a search term!')
            return;
        }
        onSubmit(input);
    };

    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit}>
                <input
                type='text'
                placeholder='Search images and photos'
                value={input}
                onChange={e => setInput(e.target.value)}
                autoFocus
                />
                <button type='submit'>Search</button>
            </form>
        </header>
    )
}