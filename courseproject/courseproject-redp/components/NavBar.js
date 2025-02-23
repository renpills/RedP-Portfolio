import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

export default function NavBar() {
    return <Box sx={{ flexGrow:1, marginBottom:2 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow:1 }}>
                    <Link href="/">DMIT2015 - CourseProject</Link>
                </Typography>
            </Toolbar>
        </AppBar>
    </Box>
}