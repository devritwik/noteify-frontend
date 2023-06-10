import AddBtn from "./AddBtn";
import './NotesContainer.css';
import { useEffect, useState } from "react";
import ReactLoading from 'react-loading';
import axios from "axios";
import Note from './Note';
import BASE_URL from "../config/url";

function NotesContainer({filteredColour}){


    let [notes, setNotes] = useState([]);
    let [isLoading, setisLoading] = useState(true);

    useEffect(()=>{
        // displayPopupMessage();
         //Fetch All Notes
         axios.get(`${BASE_URL}/api/v1/getNotes/RandomuserId`)
         .then((res)=>{
             //Note fetched
             console.log("Notes fetched Sucessfully");
             setisLoading(false);
             setNotes(res.data);
             console.log(res.data);
             console.log(Array.isArray(res.data));
             console.log(Array.isArray(notes));
             
             
         })
         .catch((e)=>{
             //Error Occurred
 
         })
 
     },[]);


    function getFilteredNotes(noteItem){
        if(filteredColour === 256) return true;
        return (noteItem.colour === filteredColour)? true: false;
    }


    return(
    <>
    {
    isLoading ? <div className="loading"><ReactLoading type="spin" color="#3D74F4"/> </div> :
    <div className="NotesContainer">
        <AddBtn/>
        {
            (notes != null && Array.isArray(notes)) ? 
             notes.filter(getFilteredNotes)
             .map((note)=><Note note={note} key={note.id}/>) 
             : <></> 
        }


    </div>
    }
    </>    
    
    );
}

export default NotesContainer;