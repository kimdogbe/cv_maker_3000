import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>The CV maker 3000</h1>

        <Card>
          <h2>Basic info 👩🏽‍💼</h2>
          <form action="">
            <div>
              <label htmlFor='firstName'>First Name </label>
              <input id='firstName' type='text' placeholder='Kofi'/>
            </div>
            <div>
              <label htmlFor='firstName'>Last Name </label>
              <input id='firstName' type='text' placeholder='Anan'/>
            </div>
            <div>
              <label htmlFor='email'>Email Address </label>
              <input id='email' type='email' placeholder='kofi.anan@un.com'/>
            </div>
            <div>
              <label htmlFor='phoneNumber'>Phone Number </label>
              <input id='phoneNumber' type='tel' placeholder='0244593100'/>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </Card>
        <br/>
        <Card>
          <h2>Education History 🎓</h2>
          <form action="">
            <div>
              <label htmlFor='schoolName'> School Name </label>
              <input id='schoolName' type='text' placeholder='eg. Ghana International School'/>
            </div>
            <div>
              <label htmlFor='level'>Education Level </label>
              <input id='level' type='text' placeholder='eg. Primary, Secondary, Masters'/>
            </div>
            <div>
              <label htmlFor='startDate'>Start Date </label>
              <input id='startDate' type='date' />
            </div>
            <div>
              <label htmlFor='endDate'>End Date </label>
              <input id='endDate' type='date' max={Date.now()}/>
            </div>
            <button type='submit'>Add</button>
          </form>
        </Card>
        <br/>
        <Card>
          <h2>Employment History 👨🏾‍💻</h2>
          <form action="">
            <div>
              <label htmlFor='companyName'>Enter Company/Employer Name</label>
              <input id='companyName' type='text' placeholder='eg. UNICEF, Grays Farm'/>
            </div>
            <div>
              <label htmlFor='jobTitle'>Job Title</label>
              <input id='jobTitle' type='text' placeholder='eg. Primary, Secondary, Masters'/>
            </div>
            <div>
              <label htmlFor='jobRoles'>Roles and Responsibilities</label>
              <input id='jobRoles' type='text' placeholder='eg. Meeting UN delegates, politics stuff'/>
            </div>
            <div>
              <label htmlFor='startDate'>Start Date</label>
              <input id='startDate' type='date' />
            </div>
            <div>
              <label htmlFor='endDate'>End Date</label>
              <input id='endDate' type='date' max={Date.now()}/>
            </div>
            <button type='submit'>Add</button>
          </form>
        </Card>

      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
