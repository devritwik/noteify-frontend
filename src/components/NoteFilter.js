import { useState } from 'react';
import Colours from './Colours'
import './NoteFilter.css'

function NoteFilter({filterHandler}){

    let [filteredColour, setFilteredColour] = useState(256);
    filterHandler(filteredColour);

    return(
        <div className="NoteFilter">
            <div>
            <Colours colour={filteredColour} colourChangeHandler={setFilteredColour}/>
            <button className='Clear' onClick={
                (e)=>{
                    filterHandler(256);
                    console.log("Clear is clicked");
                    setFilteredColour(256);
                    filterHandler(256);
                    }}> Clear Filter </button>
            </div>
            
        </div>
    );
}

export default NoteFilter;