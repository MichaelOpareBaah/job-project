import React, { useState } from 'react'
import OptionD from './OptionD';
import OptionE from './OptionE';

function OptionB() {
    const [show, setShow] = useState(false)
    const [display, setDisplay] = useState(false)

    const optionATwo = () => {
        setDisplay(true);
        setShow(false)
    }

    const optionAOne = () => {
        setDisplay(false);
        setShow(true)
    }

  return (
    <div>
            {
            show?<OptionD />:null
            
        }
        {
            display?<OptionE />:null
        }
        <button onClick={optionAOne}>OPTION A1(i)</button>
        <button onClick={optionATwo}>OPTION A1(ii)</button>
        <button>OPTION A1(iii)</button>
    </div>
  )
}

export default OptionB