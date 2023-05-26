import plus from '../assets/plus.png'
import './CreateNote.css'
function CreateNote(){
    return(
        <button className='CreateNote'>
            <img src={plus} alt='add-note-button'></img>
        </button>
    );
}

export default CreateNote;
