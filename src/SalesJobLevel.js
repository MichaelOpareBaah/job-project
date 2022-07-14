import React, { useState } from 'react'
import ManagerCompetency from './ManagerCompetency'
import OptionE from './OptionE'
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function SalesJobLevel() {
    const [manager, setManager] = useState(false)
    const [consultant, setConsultant] = useState(false)
    const [suboptions, setSuboptions] = useState(false)

    const managerjob = () => {
        setManager(true);
        setConsultant(false)
    }

    const consultantjob = () => {
        setConsultant(true)
        setManager(false);
    }

    const showsuboptions = () => {
        setSuboptions(true)
    }

  return (
    <div>
        
        {
            manager?<ManagerCompetency />:null
            
            
        }
        {
            consultant?<OptionE />:null
        }
        
            <nav className='sidebar'>
                    
                    <ul>
                        <li><a href='#' className='select__show'>Job Level <RiArrowDropDownLine className='icons__styles' onClick={showsuboptions} /> </a> 
    
                        
            {
                suboptions?
                        <ul>
                        <Link to="/" className='list__link'>
                            <li className='jobfunction__btn' onClick={managerjob}> Manager </li>
                        </Link>
    
                        <Link to="/" className='list__link'>
                            <li className='jobfunction__btn' onClick={managerjob}> Consultant </li>
                        </Link>
    
                        
                        </ul> : null
    
    } 
                        </li>
                    </ul>
                </nav>
        
            
    </div>
  )
}

export default SalesJobLevel;