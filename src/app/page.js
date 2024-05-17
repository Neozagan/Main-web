import AnimeList from "@/app/component/AnimeList"

const Home = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/top/anime`)
  const anime = await response.json()
  console.log(anime);

  return(
    <div>
      <div className="p-4">
        <h1 className="font-bold text-2xl">Most Popular Anime </h1>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-4 grid-cols-3 gap-4 px-4">
        {anime.data.map(data => {
          return (
            <div key={data.mal_id} className="shadow-xl">
              <AnimeList title={data.title} images={data.images.webp.image_url} id={data.mal_id} />
            </div>
          )
        })}
      </div>
    </div>  
  )
}

export default Home