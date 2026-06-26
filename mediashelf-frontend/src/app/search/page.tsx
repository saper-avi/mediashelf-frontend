'use client'
import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import MovieCard from '@/components/MovieCard/MovieCard'
import Loader from '@/components/Loader/Loader'
import ErrorMessage from '@/components/ErrorMessage/ErrorMesagge'

function SearchContent() {
    const searchParams = useSearchParams()
    const [query, setQuery] = useState('')
    const [results, setResults] = useState<any[]>([])
    const [loading, setLoading] = useState(false)
    const [searched, setSearched] = useState(false)
    const [error, setError] = useState<string | null>(null)
    const [page,setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)

    
    

async function handleSearch() {
    window.scrollTo({ top: 0, behavior: 'smooth'})
    setSearched(true)
    setLoading(true)

    fetch(`https://api.themoviedb.org/3/search/movie?query=${query}&page=${page}&api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`, {
        headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        }
    })
    .then((response) => response.json())
    .then((data) => {
        const filtered = data.results ?? [].filter((movie: any) => movie.poster_path)
        const sorted = filtered.sort((a: any, b: any) => b.popularity - a.popularity)
        setResults(sorted)
        setTotalPages(data.total_pages)
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
}, [query, page])


    return (
        

        <div>

            {loading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {!loading && searched && results.length === 0 && (
                <div className="flex flex-col items-center justify-center py-32 text-center">
                    <p className="text-white text-2xl font-semibold">Ничего не найдено</p>
                    <p className="text-gray-400 mt-2 text-sm">Попробуйте другой запрос</p>
                </div>
            )}


            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
                {results.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>

            <div className="flex justify-center gap-2 py-6">
                {Array.from({ length: Math.min(totalPages, 7) }, (_, i) => i + 1).map((p)=>(
                    <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`w-9 h-9 rounded-full text-sm ${page === p ? 'bg-cyan-400 text-black' : 'bg-white/10 text-white'}`}
                        >
                            {p}
                        </button>
                ))}
                {totalPages > 7 && (
                    <button onClick={() => setPage(p => p + 1)} disabled={page === totalPages} className="px-4 py-2 bg-white/10 rounded-full disabled:opacity-30">→</button>
                )}
            </div>
        </div>

    )
}



export default function Searchpage() {
    return (
        <Suspense fallback={<Loader />}>
            <SearchContent /> 
        </Suspense>
    )
}

