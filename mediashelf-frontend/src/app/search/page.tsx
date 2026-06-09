'use client'
import { useState } from 'react'

export default function Searchpage() {
    const [query, setQuery] = useState('')
    return (
        <div>
            <h1>Поиск фильмов</h1>
            <input placeholder="Введите название фильма..."
            value = {query}
            onChange = {(e) => setQuery(e.target.value)}></input>
            <button onClick={() => console.log('нажато')}>кнопка</button>
        </div>
    )
}


