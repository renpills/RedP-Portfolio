import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useState } from "react";
import VideoGameTableRow from "./VideoGameTableRow";

export default function VideoGameList({ videoGames }) {
    const [search, setSearch] = useState("");

    return <>
        <Grid container spacing={2} sx={{marginBottom:2, alignItems:"center"}}>
            <Grid item xs={11}>
                <TextField
                    label="Search"
                    fullWidth
                    sx={{ flexGrow:1 }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Grid>
            <Grid item xs={1}>
                <Button variant="outlined" href="/create">New</Button>
            </Grid>
        </Grid>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Platform</TableCell>
                        <TableCell>Genre</TableCell>
                        <TableCell>Developer</TableCell>
                        <TableCell>Sales</TableCell>
                        <TableCell></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {videoGames.filter((game) => {
                        if (search === "") {
                            return true;
                        }
                        return game.title.toLowerCase().includes(search.toLowerCase());
                    }).map((game) => {
                        return <VideoGameTableRow videoGame={game} />
                    })}
                </TableBody>
            </Table>
        

        </TableContainer>
    </>
}