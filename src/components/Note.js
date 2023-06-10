import "./Note.css"
import DeleteIcon from '../assets/trash.png'
import { useState } from "react";
import axios from "axios";
import BASE_URL from "../config/url";

function Note({note}){

    let [displayed, setDisplayed] = useState(true);

    function handleDelete(noteId){
        if(note == null){
            //Hide the note
            setDisplayed(false);
        }

        setDisplayed(false);

        axios.delete(`${BASE_URL}/api/v1/delete/${noteId}`)
        .then((res)=>{
            console.log(res.data);
            //deletedNotes.push(noteId);

            
        })
        .catch((err)=>{
            //Error
            setDisplayed(true);
        })
    }


    const color = ["#77C4ED", "#9373F0", "#F35C7B", "#F3815A", "#2DDFFF"];
    let s = {
        borderColor: color[note.colour]
    }



    function formatDate(dateString){
        return new Date(dateString).toLocaleString();
    }

    return (
        <>
        {
        displayed && 
        <div className="Note" style={s}>
            <h2>{note.title}</h2>
            <p>{note.body}</p>
            <div className="note-footer">
                <p className="Author">{note.author}</p>
                <div className="NoteFooter">
                <p className="Time">{formatDate(note.date)}</p>
                <span onClick={(e)=>{handleDelete(note.id)}}><img src={DeleteIcon}/></span>
                </div>
                
            </div>
        </div>
        }
        </>
    );
}

export default Note;
