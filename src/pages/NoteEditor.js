import './NoteEditor.css'
import InputField from '../components/InputField';
import Colours from '../components/Colours';
import Button from '../components/Button';
import axios from 'axios';
import BASE_URL from '../config/url';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import ReactLoading from 'react-loading';


function NoteEditor(){

    //Hooks
    let navigate = useNavigate();
    let [isSaving, setIsSaving] = useState(false);
    let [colour, setColour] = useState(0);
    let [note, setNote] = useState({
        title: "Default Note Title",
        body: "Default Note Body",
        author: "@ritwikdax",
        colour: 0,
        shared: false
    });

    function validateNote(note){
        if(note.title.length > titleInputProps.limit){
            alert("Maximum Title Character Exceeded!");
            return false;
        } 
    
        if(note.body.length > bodyInputProps.limit){
            alert("Maximum Note Body Character Exceeded!");
            return false;
        }
    
        return true;
    
    }


function getTitle(title="Empty Note Title"){
    setNote({...note, title: title});
}

function getBody(body="Empty Note Body"){
    setNote({...note, body: body});
}



let titleInputProps = {
    placeholder: "Type Your Note Title",
    limit: 256,
    height: "4rem",
    fontSize: "1.5rem",
    fontWeight: 800,
    dataHandler: getTitle
}

let bodyInputProps = {
    placeholder: "Type Note Content Here",
    limit: 1000,
    height: "20rem",
    fontSize: "1.5rem",
    fontWeight: 400,
    dataHandler: getBody
};

    function handleSaveNote(e){
        e.preventDefault();
        console.log(note);
        setIsSaving(true);
        if(!validateNote(note)){
            return;
        }
    
        axios.post(`${BASE_URL}/api/v1/insert`,{...note, colour: colour})
        .then((res)=>{
            //Note Inserted
            //console.log(res.data);
            setIsSaving(false);
            navigate('/');
    
        })
        .catch((err)=>{
            //Note Failed to insert
            console.log(err);
    
        });
    
    }



    return(
        <div className='NoteEditor'>
            <div>
            <form>
            <InputField props={titleInputProps}/>
            <InputField props={bodyInputProps}/>
            <Colours colour={colour} colourChangeHandler={setColour}/>
            <div className='SaveButton'>
            {isSaving ? <ReactLoading type="spin" color="#3D74F4"/>: 
            <Button text={"Save Note"} onclickHandler={handleSaveNote}/>}
            </div>
            </form>
            </div>
        </div>
    );
}

export default NoteEditor;