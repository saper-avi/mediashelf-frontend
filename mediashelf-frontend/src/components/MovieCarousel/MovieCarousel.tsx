'use client'
import { useRef } from 'react'
import MovieCard from '@/components/MovieCard/MovieCard'


export default function MovieCarousel({ movies }: { movies: any[] }) {
    const carouselRef = useRef<HTMLDivElement>(null)

    function scrollLeft() {
        carouselRef.current?.scrollBy({ left: -400, behavior: 'smooth' })
    } 

    function scrollRight() {
        carouselRef.current?.scrollBy({ left: 400, behavior: 'smooth' })

    } 

    return (
        <div className="relative">
            <button onClick={scrollLeft} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full">←</button>
            <div ref={carouselRef} className="flex overflow-x-auto gap-4 py-4 scrollbar-hide">
                {movies.map((movie: any) => (
                    <MovieCard key = {movie.id} movie={movie} />
                ))}
            </div>
            <button onClick={scrollRight} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full">→</button>
        </div>
    )
}