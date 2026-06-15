export default async function MoviePage({ params }: { params: Promise<{id: string }>}) {
    const { id } = await params
   const data = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.TMDB_API_KEY}`)
   const movie = await data.json()
   console.log(movie)
   return <div>{movie.title}</div>
}