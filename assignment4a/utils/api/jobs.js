const BASE_URL = "http://localhost:3000"

const getJobs = async () => {
    const response = await fetch(`${BASE_URL}/api/jobs`, {method:"GET"})
    const data = await response.json()
    return data
}

const getSavedJobs = async () => {
    const response = await fetch(`${BASE_URL}/api/saved-jobs`, {method:"GET"})
    const data = await response.json()
    return data
}

const saveJob = async (jobId) => {
    const response = await fetch(`${BASE_URL}/api/saved-jobs`, {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            jobId:jobId
        })})
    const data = await response.json()
    return data
}

export { getJobs, getSavedJobs, saveJob }