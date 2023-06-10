import { useEffect, useState } from "react";

import './PopMessage.css'



function PopMessage({message}){
    
    //setTimeout(setShow(false),duration);
    

    return(
        <div className="PopMessage">
            <h5>{message}</h5>
        </div>
    );
}

export default PopMessage;