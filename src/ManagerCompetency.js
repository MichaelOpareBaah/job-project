import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { RiArrowDropDownLine } from "react-icons/ri";



function ManagerCompetency() {

const [suboptions, setSuboptions] = useState(false)
  
const showsuboptions = () => {
    setSuboptions(true)
}

  return (
    <div>
        
        

        <nav className='sidebar'>
                    
                    <ul>
                        <li><a href='#' className='select__show'>Select Competency<RiArrowDropDownLine className='icons__styles' onClick={showsuboptions} /> </a> 
    
                        
            {
                suboptions?
                        <ul>
                        <Link to="/optiond" className='list__link'>
                            <li className='jobfunction__btn' > Clinical Exellence </li>
                        </Link>
    
                        <Link to="/optiond" className='list__link'>
                            <li className='jobfunction__btn' > Business Acumen </li>
                        </Link>
    
                        
                        </ul> : null
    
    } 
                        </li>
                    </ul>
                </nav>
            


    </div>

    
  )
}

export default ManagerCompetency;