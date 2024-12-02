import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import BasicInfo from './components/BasicInfo'
import Education from './components/Education'
import Work from './components/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h1>The CV maker 3000</h1>

        <Card>
          <BasicInfo />
        </Card>
        <br/>
        <Card>
          <Education />
        </Card>
        <br/>
        <Card>
          <Work />
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
