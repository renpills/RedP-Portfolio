import AvailableJobList from "@/components/AvailableJobList";
import NavBar from "@/components/NavBar";
import Container from "@mui/material/Container";

import {useState, useEffect} from "react";
import {CircularProgress} from "@mui/material";

import {getJobs, getSavedJobs} from "../utils/api/jobs";

export default function Home() {

    const [jobs, setJobs] = useState()
    const [savedJobs, setSavedJobs] = useState([])

    const addSavedJob = (job) => {
        setSavedJobs((oldJobs) => [...oldJobs, job])
    }

    const loadJobs = async () => {
        try {
            const data = await getJobs()
            setJobs(data)
        } catch (e) {
            console.log(e)
        }
    }

    const loadSavedJobs = async () => {
        try {
            const data = await getSavedJobs()
            setSavedJobs(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        loadJobs()
        loadSavedJobs()
    }, [])

    return (
    <main>
        <NavBar />
        <Container>
            {!jobs ? (
                <div style={{
                    display:"flex",
                    justifyContent:"center",
                    padding:20
                }}>
                    <CircularProgress />
                </div>
            ) : (
                <AvailableJobList
                    jobs={jobs}
                    savedJobs={savedJobs}
                    setSavedJobs={()=> {addSavedJob()}}
                />
            )}
        </Container>
    </main>
  );
}
