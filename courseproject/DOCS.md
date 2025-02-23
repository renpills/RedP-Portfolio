# DMIT2015 Fall 2024 Term project

## red plican (austin)

## renpills

I will be using React for this front-end application because I am familliar with Javascript, and have used React before.

## documentation

What is the method you used to call a REST API when the page/view is initialized?

```
useEffect(() => {
    fetchGames()
}, [])

const fetchGames = async () => {
    try {
        const data = await getVideoGames();
        setVideoGameList(data);
    } catch (e) {
        console.error("error fetching jobs, using fallback list:", e);
    }
}
```

What is the code you used to fetch all data from your REST API?

```
export const getVideoGames = async () => {
    const response = await fetch(`${BASE_URL}/restapi/VideoGames`);
    const data = await response.json();
    return data;
}
```

What is the code you used to display all data return from your REST API?

```
{videoGames.filter((game) => {
    if (search === "") {
        return true;
    }
    return game.title.toLowerCase().includes(search.toLowerCase());
}).map((game) => {
    return <VideoGameTableRow videoGame={game} />
})}
```

What is the code you used to render a data entry form?

```
return <TableRow>
    <TableCell>{videoGame.title}</TableCell>
    <TableCell>{videoGame.platform}</TableCell>
    <TableCell>{videoGame.genre}</TableCell>
    <TableCell>{videoGame.developer}</TableCell>
    <TableCell>{videoGame.sales}</TableCell>
    <TableCell><Button variant="contained" onClick={clickEdit}>Edit</Button></TableCell>
</TableRow>
```

What is the code you used to handle the submit request from the data entry form?

```
const handleClick = async (event) => {
    event.preventDefault();

    // validation code here was excluded for snipped

    if (!error) {
        // save game into database if there are no errors
        const data = {
            "title": title,
            "platform": platform,
            "genre": genre,
            "developer": developer,
            "sales": sales
        };
        await postVideoGame(data);

        // load index list page after game is saved in db
        router.push("/");
    }
}
```

What is the code you used to render a form to allow the user to find data?

```
{videoGames.filter((game) => {
    if (search === "") {
        return true;
    }
    return game.title.toLowerCase().includes(search.toLowerCase());
})
```

What is the code you used to handle the submit request to find data?

```
<TextField
    label="Search"
    fullWidth
    sx={{ flexGrow:1 }}
    value={search}
    onChange={(e) => setSearch(e.target.value)}
/>
```

What is the code you used to render the query data returned?

```
useEffect(() => {
        if (router.isReady) {
            const loadGame = async () => {
                try {
                    const data = getVideoGame(gameId);
                    setTitle(data.title);
                    setPlatform(data.platform);
                    setGenre(data.genre);
                    setDeveloper(data.developer);
                    setSales(data.sales);
                } catch (e) {
                    console.error("error loading game data", e)
                }
            }

            loadGame();
        }
    }, [router.isReady, gameId]);
```

What is the code you used to handle submit request to update data?

```
const handleClick = async (event) => {
    event.preventDefault();

    // validation code here was excluded for snipped

    if (!error) {
        // save game into database if there are no errors
        const data = {
            "id": gameId,
            "title": title,
            "platform": platform,
            "genre": genre,
            "developer": developer,
            "sales": sales
        };
        //update game once validated
        await putVideoGame(data);

        // reload index page after game is saved in db
        router.push("/");
    }
}
```

## test instructions

unfortunatly to run my project additional school provided files are required that i cannot include
