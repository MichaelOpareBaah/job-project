import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div>
        Home

        <Link to="/main">
            <button>Click</button>
        </Link>
        
    </div>
  )
}

export default Home