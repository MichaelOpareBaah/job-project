import React from "react";
import Pdf from ".react-to-pdf";

const ref = React.createRef();

const Pdf = (props) => {
  return(
    <>
    <div className="Post" ref={ref}>
      Hi

    </div>
    <Pdf targetRef={ref} filename="post.pdf">
      {({ toPdf }) => <button onClick={toPdf}>Print as PDF</button>}
    </Pdf>
    </>
  )
}

export  default Pdf;