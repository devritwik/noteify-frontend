import { Link } from 'react-router-dom';
import plus from '../assets/plus.png'
import './AddBtn.css'
function AddBtn(){
    return(
        <div className='AddBtn'>
        <Link to={`/edit-note`}>
        <button>
            <img src={plus} alt='add-note-button'></img>
        </button>
        </Link>
        </div>
    );
}

export default AddBtn;
