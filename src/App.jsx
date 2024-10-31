import { useState } from 'react'
import './App.css'
import PasswordGen from './pass-gen/pass-gen';

function App() {
  

  return (
    <>
      <div className="container">
        <div className="phone left">
            <div className="top-segment-left">
                <div className="sound-div"></div>
                <div className="camera-div"></div>
            </div>
            <span>Password</span>
            <span>Generator</span>
        </div>

        <div className="phone right">
            <div className="top-segment-right">
                <div className="sound-div"></div>
                <div className="camera-div"></div>
            </div>
            <PasswordGen />
        </div>
      </div>
    </>
  )
}

export default App
