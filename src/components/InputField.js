import './InputField.css'
import { useState } from 'react';
import { useRef } from 'react';

//Auto Adjust the height of text area
function adjustHeight(textarea){
    //console.log(`The Current Height = ${textarea.current.style.height}`);
    textarea.current.style.height = "0px";
    textarea.current.style.height = textarea.current.scrollHeight + "px";
    //textarea.current.removeAttribute('style');
}

function InputField({props}){

    const DEFAULT_COLOUR = "#3D74F4";
    const RED_COLOUR = "red";

    const reference = useRef(null);

    let [count, setCount] = useState(0);
    let [colour, setColour] = useState(DEFAULT_COLOUR);



    function handleTyping(e){

        e.preventDefault();
        adjustHeight(reference);
        let charCount = e.target.value.length;
        props.dataHandler(e.target.value);
        if(charCount>props.limit){
            setColour(RED_COLOUR);
        }else{
            setColour(DEFAULT_COLOUR);
        }
        setCount(charCount);
    }

    return (
        <div className="InputField">
            
            <textarea ref={reference} className='TextInput' placeholder={props.placeholder}
            onChange={(e)=>{handleTyping(e)}} style={
                {
                    fontSize: props.fontSize,
                    fontWeight: props.fontWeight,
                    minHeight: props.height
                }
            }></textarea>
            <p style={{
                color: colour
            }}>{count} / {props.limit}</p>
        </div>
    );
}

export default InputField;
