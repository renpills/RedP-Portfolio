import { Container } from "@mui/material";
import VideoGameList from "@/components/VideoGameList";
import { useState, useEffect } from "react";
import { getVideoGames } from "@/utils/api/games";

export default function Home() {
  const fallbackList = [
    {
      "id":1,
      "title": "Majora's Mask",
      "platform": "Nintendo 64",
      "genre": "Adventure",
      "developer": "Nintendo",
      "sales": 4000000
    },
    {
      "id":2,
      "title": "Ocarina of Time",
      "platform": "Nintendo 64",
      "genre": "Adventure",
      "developer": "Nintendo",
      "sales": 6000000
    }
    ]

    const [videoGameList, setVideoGameList] = useState([])

    useEffect(() => {
      fetchGames()
    }, [])

    const fetchGames = async () => {
      try {
        const data = await getVideoGames();
        setVideoGameList(data);
        //setVideoGameList(fallbackList);
      } catch (e) {
        console.error("error fetching games, using fallback list:", e);
      }
    }

  return (
    <div>
      <main>
        <Container>
          <VideoGameList videoGames={videoGameList} />
        </Container>
      </main>
    </div>
  );
}
