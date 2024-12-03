import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import BasicInfo from './components/BasicInfo'
import Education from './components/Education'
import Work from './components/Work'

function App() {
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
    </>
  )
}

export default App
