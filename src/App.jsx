import React from 'react'
import Sidebar from './Components/sidebar'
import Player from './Components/Player'
import Display from './Components/Display'

const App = () => {
  return (
    <div className= 'h-screen bg-black'>
      <Sidebar /> 
      <Display /> 
      <div>
        <Player/>
      </div>
    </div>
  )
}

export default App