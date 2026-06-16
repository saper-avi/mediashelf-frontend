type Movie = {
    id: number;
    title: string;
    poster_path: string;
    release_date: string;
}

export default function MovieCard({ movie }: { movie: Movie }) {
    return (
        <div className="min-w-[150px] max-w-[200px] flex-shrink-0">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title}
                className="rounded-lg w-full"
                />
            <p className="mt-2 font-semibold truncate">{movie.title}</p>
            <p className="text-sm text-gray-400">{movie.release_date}</p>
        </div>
    )
}