import { Button, Container, Stack, TextField } from "@mui/material";
import { getVideoGame, postVideoGame, putVideoGame } from "@/utils/api/games";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Edit() {
    const [title, setTitle] = useState("");
    const [platform, setPlatform] = useState("");
    const [genre, setGenre] = useState("");
    const [developer, setDeveloper] = useState("");
    const [sales, setSales] = useState("");

    const [titleError, setTitleError] = useState(false);
    const [platformError, setPlatformError] = useState(false);
    const [genreError, setGenreError] = useState(false);
    const [developerError, setDeveloperError] = useState(false);
    const [salesError, setSalesError] = useState(false);

    const router = useRouter();

    const { gameId } = router.query;

    useEffect(() => {
        if (router.isReady) {
            const loadGame = async () => {
                try {
                    const data = await getVideoGame(gameId);
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

    const handleClick = async (event) => {
        event.preventDefault();

        let error = false;

        if (title === "") {
            setTitleError(true);
            error = true;
        } else {
            setTitleError(false);
        }

        if (platform === "") {
            setPlatformError(true);
            error = true;

        } else {
            setPlatformError(false);
        }

        if (genre === "") {
            setGenreError(true);
            error = true;
        } else {
            setGenreError(false);
        }

        if (developer === "") {
            setDeveloperError(true);
            error = true;
        } else {
            setDeveloperError(false);
        }

        if (parseInt(sales) < 0 || sales === "") {
            setSalesError(true);
            error = true;
        } else {
            setSalesError(false);
        }

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

    return (
        <div>
            <main>
                <Container>
                    <form onSubmit={handleClick}>
                        <Stack direction="column" spacing={2}>
                            {/***** TITLE *****/}
                            {titleError ? (
                                <TextField
                                    error
                                    id="title"
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            ) : (
                                <TextField
                                    id="title"
                                    label="Title"
                                    variant="outlined"
                                    fullWidth
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            )}
                            {/***** PLATFORM *****/}
                            {platformError ? (
                                <TextField
                                    error
                                    id="platform"
                                    label="Platform"
                                    variant="outlined"
                                    fullWidth
                                    value={platform}
                                    onChange={(e) => setPlatform(e.target.value)}
                                />
                            ) : (
                                <TextField
                                    id="platform"
                                    label="Platform"
                                    variant="outlined"
                                    fullWidth
                                    value={platform}
                                    onChange={(e) => setPlatform(e.target.value)}
                                />
                            )}
                            {/***** GENRE *****/}
                            {genreError ? (
                                <TextField
                                    error
                                    id="genre"
                                    label="Genre"
                                    variant="outlined"
                                    fullWidth
                                    value={genre}
                                    onChange={(e) => setGenre(e.target.value)}
                                />
                            ) : (
                                <TextField
                                    id="genre"
                                    label="Genre"
                                    variant="outlined"
                                    fullWidth
                                    value={genre}
                                    onChange={(e) => setGenre(e.target.value)}
                                />
                            )}
                            {/***** DEVELOPER *****/}
                            {developerError ? (
                                <TextField
                                    error
                                    id="developer"
                                    label="Developer"
                                    variant="outlined"
                                    fullWidth
                                    value={developer}
                                    onChange={(e) => setDeveloper(e.target.value)}
                                />
                            ) : (
                                <TextField
                                    id="developer"
                                    label="Developer"
                                    variant="outlined"
                                    fullWidth
                                    value={developer}
                                    onChange={(e) => setDeveloper(e.target.value)}
                                />
                            )}
                            {/***** SALES *****/}
                            {salesError ? (
                                <TextField
                                    error
                                    id="sales"
                                    label="Sales"
                                    variant="outlined"
                                    fullWidth
                                    value={sales}
                                    onChange={(e) => setSales(e.target.value)}
                                />
                            ) : (
                                <TextField
                                    id="sales"
                                    label="Sales"
                                    variant="outlined"
                                    fullWidth
                                    value={sales}
                                    onChange={(e) => setSales(e.target.value)}
                                />
                            )}

                            <Button variant="contained" color="success" type="submit">Update Game</Button>
                        </Stack>
                    </form>
                </Container>
            </main>
        </div>
    );
}
