import './Button.css';


function Button({text, onclickHandler}){
    return(
        <button className="btn" onClick={onclickHandler}>
            {text}
        </button>
    );
}

export default Button;