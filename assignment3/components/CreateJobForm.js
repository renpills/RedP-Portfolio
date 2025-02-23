import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useState } from 'react';

import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Grid from '@mui/material/Grid';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';



export default function CreateJobForm({ jobs, setJobs }) {

    const [title, setTitle] = useState("")
    const [posted, setPosted] = useState(dayjs(Date.now()))
    const [company, setCompany] = useState("")
    const [jobType, setJobType] = useState("")
    const [location, setLocation] = useState("")
    const [description, setDescription] = useState("")
    const [qualifications, setQualifications] = useState("")

    const [errors, setErrors] = useState([])

    const isValidTitle = (addError) => {
        if (title.length < 10) {
            addError("Title must be at least 10 characters")
            return false
        } else {
            return true
        }
    }
    const isValidPosted = (addError) => {
        if (posted.isBefore(dayjs(Date.now()))) {
            addError("Date Posted must be in the future")
            return false
        } else {
            return true
        }
    }
    const isValidCompany = (addError) => {
        if (company === "") {
            addError("Company Name is required")
            return false
        } else {
            return true
        }
    }
    const isValidJobType = (addError) => {
        if (jobType !== "Full-Time" && jobType !== "Part-Time" && jobType !== "Contract") {
            addError("Type must be one of the following: Full-Time, Part-Time, Contract")
            return false
        } else {
            return true
        }
    }
    const isValidLocation = (addError) => {
        if (location === "") {
            addError("Location is required")
            return false
        } else {
            return true
        }
    }
    const isValidDescription = (addError) => {
        if (description === "") {
            addError("Description is required")
            return false
        } else {
            return true
        }
    }
    const isValidQualifications = (addError) => {
        if (qualifications === "") {
            addError("Qualifications is required")
            return false
        } else {
            return true
        }
    }

    const submitForm = (event) => {
        event.preventDefault()

        // validation
        const tempErrors = []

        const addError = (error) => {
            tempErrors.push(error)
        }

        isValidTitle(addError)
        isValidPosted(addError)
        isValidCompany(addError)
        isValidJobType(addError)
        isValidLocation(addError)
        isValidDescription(addError)
        isValidQualifications(addError)

        setErrors(tempErrors)

        if (tempErrors.length > 0) {
            return
        } else {
            const newJob = {
                "title": title,
                "date_posted": posted,
                "company": company,
                "job_type": jobType,
                "location": location,
                "description": description,
                "qualifications": qualifications
            };
    
            const jobList = [...jobs, newJob];
            setJobs(jobList);

            setTitle("")
            setPosted(dayjs(Date.now()))
            setCompany("")
            setJobType("")
            setLocation("")
            setDescription("")
            setQualifications("")
        }
    }

    return <form onSubmit={submitForm}>
        <Typography
            variant="h4"
            sx={{ paddingTop: 2, paddingBottom: 2}}
        >
            Post a New Job
        </Typography>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <TextField
                    label="Job Title"
                    fullWidth
                    sx={{width: '80%'}}
                    value={title}
                    onChange={(event)=> {setTitle(event.target.value)}}
                />
            </Grid>
            <Grid item xs={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        label="Date Posted"
                        defaultValue={dayjs(Date.now())}
                        sx={{width: '80%'}}
                        value={posted}
                        onChange={(newValue)=> setPosted(newValue)}
                    />
                </LocalizationProvider>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Company Name"
                    fullWidth
                    sx={{width: '80%'}}
                    value={company}
                    onChange={(event)=> {setCompany(event.target.value)}}
                />
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <InputLabel id="job-type-select">Job Type</InputLabel>
                    <Select
                        labelId="job-type-select"
                        label="Job Type"
                        sx={{width: '80%'}}
                        value={jobType}
                        onChange={(event)=> {setJobType(event.target.value)}}
                    >
                        <MenuItem value={"Full-Time"}>Full-Time</MenuItem>
                        <MenuItem value={"Part-Time"}>Part-Time</MenuItem>
                        <MenuItem value={"Contract"}>Contract</MenuItem>
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={6}>
                <TextField
                    label="Location"
                    fullWidth
                    sx={{width: '80%'}}
                    value={location}
                    onChange={(event)=> {setLocation(event.target.value)}}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Description"
                    fullWidth
                    sx={{width: '90%'}}
                    multiline
                    rows={2}
                    value={description}
                    onChange={(event)=> {setDescription(event.target.value)}}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    label="Qualifications"
                    fullWidth
                    sx={{width: '90%'}}
                    multiline
                    rows={2}
                    value={qualifications}
                    onChange={(event)=> {setQualifications(event.target.value)}}
                />
            </Grid>
            <Grid item xs={12}>

                <Button variant="contained" type="submit">Submit new Job</Button>
            </Grid>
            <Grid item xs={12}>
                {/* titleError !== "" && <Alert severity="error">{titleError}</Alert> }
                { postedError !== "" && <Alert severity="error">{postedError}</Alert> }
                { companyError !== "" && <Alert severity="error">{companyError}</Alert> }
                { jobTypeError !== "" && <Alert severity="error">{jobTypeError}</Alert> }
                { locationError !== "" && <Alert severity="error">{locationError}</Alert> }
                { descriptionError !== "" && <Alert severity="error">{descriptionError}</Alert> }
                { qualificationsError !== "" && <Alert severity="error">{qualificationsError}</Alert> */}

                { errors.length !== 0 &&
                    <Alert severity="error">
                        <AlertTitle>Validation Error</AlertTitle>
                        <ul style={{listStyleType:"none", padding:0, margin:0}}>
                            {errors.map((error, index) => (
                            <li key={index}>- {error}</li>
                            ))}
                        </ul>
                    </Alert>
                }
            </Grid>
        </Grid>
    </form>
} 
