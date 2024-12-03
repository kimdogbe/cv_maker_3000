import { useState } from "react"

export default function Work() {
  const [jobs, setJobs] = useState([]);

  const [companyName, setCompanyName] = useState('');
  const [title, setTitle] = useState('');
  const [roles, setRoles] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [currentRole, setCurrentRole] = useState('');

  function handleAddRole(e) {
    e.preventDefault();
    setRoles([...roles, currentRole]);
    setCurrentRole('');
  }

  function handleRemove(index) {
    setJobs(jobs.filter((_, i) => i !== index));
  }

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

    setCompanyName('');
    setTitle('');
    setRoles([]);
    setStartDate('');
    setEndDate('');
  }

  return <>
    <h2>Employment History 👨🏾‍💻</h2>
    {jobs.map((job, index) => 
      <div key={index}>
        <JobItem key={index}
          title={job.title}
          companyName={job.name}
          roles={job.jobRoles}
          startDate={job.startDate}
          endDate={job.endDate}
        />
        <button onClick={() => handleRemove(index)}>Remove</button>
      </div>
    )}
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
        <ul>
          {roles.map( (role, index) => 
          <li key={index}>{role}</li>)}
        </ul>
        <label htmlFor='jobRoles'>Roles and Responsibilities</label>
        <input id='jobRoles' type='text' placeholder='eg. Meeting UN delegates, politics stuff' 
        value={currentRole} 
        onChange={e => setCurrentRole(e.target.value)}/>
         <button onClick={handleAddRole}>Add role</button>
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

function JobItem({title, companyName, roles, startDate, endDate}) {
  return <>
    <div className="item-heading">
      <h3>{title} ({companyName})</h3>
      <p>{startDate} - {endDate}</p>
    </div>

    {
      roles.length > 0 ? 
      <>
      <h3>Roles and Responsibilities</h3>
      <ul>
        {roles.map((role, index) => 
          <li key={index}>{role}</li>
        )}
      </ul>
      </> : null
    }
  </>
}