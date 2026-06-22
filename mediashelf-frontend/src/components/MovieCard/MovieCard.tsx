import Link from 'next/link'

type Movie = {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
}

export default function MovieCard({ movie }: { movie: Movie }) {
    return (
        <Link href={`/movie/${movie.id}`}>
        <div className="w-[150px] flex-shrink-0 cursor-pointer hover:opacity-80 transition-opacity">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                className="rounded-lg w-full h-64 object-cover"
                />
            <p className="mt-2 font-semibold truncate">{movie.title}</p>
            <p className="text-sm text-gray-400">{movie.release_date}</p>
        </div>
        </Link>
    )
}