import NoteFilter from "../components/NoteFilter";
import './DisplayNotes.css'
import {useState } from "react";

import NotesContainer from "../components/NotesContainer";

function DisplayNotes(){

    //Fetch All Notes
    //Display All Notes
    let [filteredColour, setFilteredColour] = useState(256);

    return(
        <div>
        <NoteFilter filterHandler = {setFilteredColour}/>
        <NotesContainer filteredColour={filteredColour}/>
        </div>
    )
}

export default DisplayNotes;