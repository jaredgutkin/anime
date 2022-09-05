import { useEffect, useState } from "react"
import AnimeList from "./components/AnimeList"
import './components/style.css'

function App() {

  const [search, setSearch] = useState('Dragon Ball')
  const [animeData, setAnimeData] = useState()

  const getData = async () => {
    const res = await fetch(`https://api.jikan.moe/v4/anime?q=${search}&limit=20`)
    const anime = await res.json()

    setAnimeData(anime.data)
  }

  useEffect(() => {
    getData()
  }, [search])

  return (
    <>
      <div className="header">
        <h1>My Anime List</h1>
        <div className="search-box">
          <input type="search" placeholder="Search Anime"
          onChange={(e) => setSearch(e.target.value)} />
        </div>
      </div>

      <div className="container">
        <div className="animeInfo">

        </div>
        <div className="anime-row">
          <h2 className="text-heading">Anime</h2>
          <div className="row">
            <AnimeList />
          </div>
        </div>
      </div>
    </>

  );
}

export default App;
