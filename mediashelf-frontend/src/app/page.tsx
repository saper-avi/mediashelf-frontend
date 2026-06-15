import MovieCard from "@/components/MovieCard/MovieCard"

export default async function Home() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ru-RU`)
  const data = await response.json()
  const movies = data.results
      .filter((movie: any) => movie.poster_path)
      .sort((a: any, b: any) => b.popularity - a.popularity)


  return (
    <div className="mt-4 gray-900 rounded-xl p-4 overflow-x-auto">

      <div className="flex gap-4">
        {movies.map((movie: any) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}