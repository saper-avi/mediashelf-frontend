export default async function MoviePage({ params }: { params: Promise<{id: string }>}) {
    const { id } = await params
   const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`)
   const movie = await data.json()
   console.log(movie)

    const creditsData = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${process.env.TMDB_API_KEY}`)
    const credits = await creditsData.json()
    const cast = credits.cast?.slice(0, 5)

   return (
    <div className="max-w-5xl mx-auto px-8 py-12 text-white">
        <div className="flex gap-10">
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} className="w-64  rounded-xl shrink-0 object-cover"
            />
            <div className="flex flex-col gap-3">
                <h1 className="text-3xl font-bold">{movie.title} ({movie.release_date?.slice(0, 4)})</h1>
                <p className="text-gray-400 text-sm">
                    {movie.release_date} | {movie.genres?.map((g: any) => g.name).join(', ')} | {Math.floor(movie.runtime / 60)}ч {movie.runtime % 60}м
                </p>
                <p className="text-yellow-400">⭐ {movie.vote_average?.toFixed(1)}</p>
                <div>
                    <h2 className="text-lg font-semibold mt-4 mb-2">Образ</h2>
                    <p className="text-gray-300 leading-relaxed">{movie.overview}</p>
                </div>

                <div className="mt-8">
                    <h2 className="text-lg font-semibold mb-4">Главные роли</h2>
                    <div className="flex gap-4">
                        {cast?.map((actor: any) => (
                            <div key={actor.id} className="flex flex-col items-center text-center w-24">
                                <img src={actor.profile_path 
                                ? `https://image.tmdb.org/t/p/w185${actor.profile_path}` 
                                : 'https://via.placeholder.com/80x80?text=No+Photo'}
                                className="w-20 h-20 rounded-full object-cover"
                                />
                                <p className="text-sm mt-2">{actor.name}</p>
                                <p className="text-xs text-gray-400">{actor.character}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
   )
}