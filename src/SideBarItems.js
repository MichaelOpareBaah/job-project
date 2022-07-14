import React, { useState } from 'react'
import "./SideBarItems.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import OptionB from './OptionB'
import OptionC from './OptionC'
import SalesJobLevel from './SalesJobLevel';
import { Link } from 'react-router-dom';

function SideBarItems() {
    const [show, setShow] = useState(false)
    const [display, setDisplay] = useState(false)
    const [sales, setSales] = useState(false)
    const [suboptions, setSuboptions] = useState(false)


     
  
    const optionAOne = () => {
        setShow(true);
        setDisplay(false);
        setSales(false)
    }
    
    const optionATwo = () => {
        setDisplay(true);
        setShow(false);
        setSales(false)
    }

   const salesjob = () => {
        setSales(true);
        setShow(false);
        setDisplay(false)

    } 

    const showsuboptions = () => {
        setSuboptions(true)
    }
   
    

  return (
    <div className='sidebaritems'>
        {
            show?<OptionB />:null
            
        }

        {
            display?<OptionC />:null
        }

        {
            sales?<SalesJobLevel />:null
        }

        

        { 
          <>
               

            <nav className='sidebar'>
                    
                <ul>
                    <li><a href='#' className='select__show'>Select a Job <RiArrowDropDownLine className='icons__styles' onClick={showsuboptions} /> </a> 

                    
        {
            suboptions?
                    <ul>
                    <Link to="/" className='list__link'>
                        <li className='jobfunction__btn' onClick={salesjob}> Marketing </li>
                    </Link>

                    <Link to="/" className='list__link'>
                        <li className='jobfunction__btn' onClick={salesjob}> Learning Professional </li>
                    </Link>

                    <Link to="/" className='list__link'>
                        <li className='jobfunction__btn' onClick={salesjob}> Professional Education </li>
                    </Link>

                    <Link to="/" className='list__link'>
                        <li className='jobfunction__btn' onClick={salesjob}> Sales </li>
                    </Link>

                    <Link to="/" className='list__link'>
                        <li className='jobfunction__btn' onClick={salesjob}> Clinical Specialist </li> 
                    </Link>
                    </ul> : null

} 
                    </li>
                </ul>
            </nav>
                   


         </>
   
            

        }
        
    </div>
  )
}

export default SideBarItems