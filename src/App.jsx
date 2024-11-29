import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>The CV maker 3000</h1>

        <Card>
          <h2>Basic info</h2>
          <form action="">
            <div>
              <label htmlFor='firstName'>Enter First Name </label>
              <input id='firstName' type='text' placeholder='Kofi'/>
            </div>
            <div>
              <label htmlFor='firstName'>Enter Last Name </label>
              <input id='firstName' type='text' placeholder='Anan'/>
            </div>
            <div>
              <label htmlFor='email'>Enter Email Address </label>
              <input id='email' type='email' placeholder='Anan'/>
            </div>
            <div>
              <label htmlFor='phoneNumber'>Enter Email Address </label>
              <input id='phoneNumber' type='tel' placeholder='Anan'/>
            </div>
            <button type='submit'>Submit</button>
          </form>
        </Card>

        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
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
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
