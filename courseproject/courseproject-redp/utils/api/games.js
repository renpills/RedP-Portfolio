export const BASE_URL = "http://localhost:8090"

export const getVideoGames = async () => {
    const response = await fetch(`${BASE_URL}/restapi/VideoGames`);
    const data = await response.json();
    return data;
}

export const getVideoGame = async (gameId) => {
    const response = await fetch(`${BASE_URL}/restapi/VideoGames/${gameId}`);
    const data = await response.json();
    return data;
}

export const postVideoGame = async (game) => {
    await fetch(`${BASE_URL}/restapi/VideoGames`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    });
}

export const putVideoGame = async (game) => {
    await fetch(`${BASE_URL}/restapi/VideoGames/${game.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
    });
}