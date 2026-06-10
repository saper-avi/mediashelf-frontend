'use client'
import { useState } from 'react'

export default function Searchpage() {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [searched, setSearched] = useState(false)
    const [error, setError] = useState<string | null>(null)

    





async function handleSearch() {

    setSearched(true)
    setLoading(true)

    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        }
    })
    .then((response) => response.json())
    .then((data) => {
        setResults(data.results)
        setLoading(false)

    })
    .catch((error) => {
        setError('Ошибка при поиске фильмов')
        setLoading(false)
    })
}


  let emptyMessage = null
            if (!loading && results.length === 0) {
                !loading && searched && (emptyMessage = <p>Ничего не найдено</p>)
            }
    


    return (
        <div>
            <h1>Поиск фильмов</h1>




            <input placeholder="Введите название фильма..."
            value = {query}
            onChange = {(e) => setQuery(e.target.value)}></input>





            <button onClick={handleSearch}>кнопка</button>





            {loading && <p>Загрузка...</p>}
            {error && <p>{error}</p>}


            {emptyMessage}


            {results.map((movie) => (
                <div key={movie.id}>
                    <p>{movie.title}</p>
                    </div> 




            ))}
        </div>

    )
}


