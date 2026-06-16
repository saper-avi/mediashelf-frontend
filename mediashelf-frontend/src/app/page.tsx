
import MovieCarousel from "@/components/MovieCarousel/MovieCarousel"

export default async function Home() {
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ru-RU`)
  const data = await response.json()
  const movies = data.results
    .filter((movie: any) => movie.poster_path)
    .sort((a: any, b: any) => b.popularity - a.popularity)

  return (
    <div className="">
      <div className="w-auto h-full bg-[#424242] mx-12 p-4">
      <h2 className="text-white text-2xl font-semibold
      
      mb-4 text-center">Десятки тысяч фильмов, сериалов и мультфильмов</h2>
      <MovieCarousel movies={movies} />
      </div>
    </div>
  )
}