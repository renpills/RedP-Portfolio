import { Button, TableCell, TableRow } from "@mui/material";
import { useRouter } from "next/router";

export default function VideoGameTableRow({ videoGame }) {
    const router = useRouter()

    const clickEdit = () => {
        router.push(`/edit/${videoGame.id}`);
    }

    return <TableRow>
        <TableCell>{videoGame.title}</TableCell>
        <TableCell>{videoGame.platform}</TableCell>
        <TableCell>{videoGame.genre}</TableCell>
        <TableCell>{videoGame.developer}</TableCell>
        <TableCell>{videoGame.sales}</TableCell>
        <TableCell><Button variant="contained" onClick={clickEdit}>Edit</Button></TableCell>
    </TableRow>
}