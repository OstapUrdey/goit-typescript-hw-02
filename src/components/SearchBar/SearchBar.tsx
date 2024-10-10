import css from './SearchBar.module.css';

import {useState} from 'react';
import toast from 'react-hot-toast';

interface SearchBarProps {
    onSubmit: (query: string) => void;
}

export default function SearchBar({onSubmit}: SearchBarProps) {

    const [input, setInput] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (input.trim() === "") {
            toast.error("Please enter a search term!")
            return;
        }
        onSubmit(input);
    };

    return (
        <header className={css.header}>
            <form onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Search images and photos"
                value={input}
                onChange={e => setInput(e.target.value)}
                autoFocus
                />
                <button type="submit">Search</button>
            </form>
        </header>
    )
}