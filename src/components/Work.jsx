import { useState } from "react"

let jobDict = [
  {
    name: "UN", 
    title: "Secretary of State",
    jobRoles: ["Meeting UN delegates", "Keeping peace in the world"],
    startDate: "21/06/2012",
    endDate: "31/08/2022"
  },
]

export default function Work() {
  const [jobs, setJobs] = useState(jobDict);

  const [companyName, setCompanyName] = useState('');
  const [title, setTitle] = useState('');
  const [roles, setRoles] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  // TODO: add separate handler for adding a role to array

  function handleSubmit(e) {
    e.preventDefault();

    const nextJob = {
      name: companyName,
      title: title,
      jobRoles: roles,
      startDate: startDate,
      endDate: endDate,
    }
    console.log(nextJob);
    
    setJobs([...jobs, nextJob]);
    console.log(jobs);
  }

  return <>
    <h2>Employment History 👨🏾‍💻</h2>
    {jobs.map((job, index) => {
      return <div key={index}>
          {job.title} @ {job.name}
          <br/>
          From: {job.startDate} To {job.endDate}
          <br/>
          Roles: {job.jobRoles.join(', ')}
        </div>
    })}
    <hr/>
    <form action="" onSubmit={handleSubmit}>
      <div>
        <label htmlFor='companyName'>Enter Company/Employer Name</label>
        <input id='companyName' type='text' placeholder='eg. UNICEF, Grays Farm' value={companyName} onChange={e => setCompanyName(e.target.value)} />
      </div>
      <div>
        <label htmlFor='jobTitle'>Job Title</label>
        <input id='jobTitle' type='text' placeholder='eg. Undersecretary, HR manager' value={title} onChange={e => setTitle(e.target.value)}/>
      </div>
      <div>
        <label htmlFor='jobRoles'>Roles and Responsibilities</label>
        <input id='jobRoles' type='text' placeholder='eg. Meeting UN delegates, politics stuff' value={roles} onChange={e => setRoles(e.target.value)}/>
      </div>
      <div>
        <label htmlFor='startDate'>Start Date</label>
        <input id='startDate' type='date' value={startDate} onChange={e => setStartDate(e.target.value)}/>
      </div>
      <div>
        <label htmlFor='endDate'>End Date</label>
        <input id='endDate' type='date' max={Date.now()} value={endDate} onChange={e => setEndDate(e.target.value)}/>
      </div>
      <button type='submit'>Add</button>
    </form>
  </>
}