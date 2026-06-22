import MovieCarousel from "@/components/MovieCarousel/MovieCarousel"

export default async function Home() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}&language=ru-RU`,
    { cache: "no-store" }
  )

  const data = await res.json()

  const movies = (data?.results ?? [])
    .filter((movie: any) => movie?.poster_path)
    .sort((a: any, b: any) => b.popularity - a.popularity)

  return (
    <div>
      <div className="w-auto h-full bg-[#000000] mx-12 p-4 rounded-2xl mt-8">
        <h2 className="text-white text-2xl font-regular mb-4 text-center">
          Десятки тысяч фильмов, сериалов и мультфильмов
        </h2>

        <MovieCarousel movies={movies} />
      </div>
    </div>
  )
}