'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import MovieCard from '@/components/MovieCard/MovieCard'

function SearchContent() {
    const searchParams = useSearchParams()
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<any[]>([])
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
        const filtered = data.results.filter((movie: any) => movie.poster_path)
        const sorted = filtered.sort((a: any, b: any) => b.popularity - a.popularity)
        setResults(sorted)
        setLoading(false)

    })
    .catch((error) => {
        setError('Ошибка при поиске фильмов')
        setLoading(false)
    })
}


useEffect(() => {
    const q = searchParams.get('q')
    if (q) {
        setQuery(q)
    } else {
        setQuery('')
        setResults([])
        setSearched(false)
    }
}, [searchParams.toString()])

useEffect(() => {
    if (query) {
        handleSearch()
    }
}, [query])

  let emptyMessage = null
            if (!loading && results.length === 0) {
                !loading && searched && (emptyMessage = <p>Ничего не найдено</p>)
            }
    


    return (
        <div>

            {loading && <p>Загрузка...</p>}
            {error && <p>{error}</p>}


            {emptyMessage}


            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
                {results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

        </div>

    )
}

export default function Searchpage() {
    return (
        <Suspense fallback={<p>Загрузка...</p>}>
            <SearchContent /> 
        </Suspense>
    )
}


