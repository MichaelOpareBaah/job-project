import React from 'react'
import Pdf from "react-to-pdf";
import "./OptionD.css"

const ref = React.createRef();
function OptionD() {
  return (
    <div className='optiond'>
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button className='pdf__btn' onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
       <div ref={ref}>
          <div className='content'>
          <p>Participate in sales competency model self assessment</p>
         <p>Participate in sales competency model self assessment</p>
         <p>Participate in sales competency model self assessment</p>
         <p>Participate in sales competency model self assessment</p>

          </div>
         

         
        </div>
    </div>
  )
}

export default OptionD