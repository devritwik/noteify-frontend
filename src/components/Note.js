import "./Note.css"

function Note({notes}){


    const color = ["#77C4ED", "#9373F0", "#F35C7B", "#F3815A", "#D8477F"];
    let s = {
        borderColor: color[Math.floor(Math.random()*color.length)]
    }



    return (
        <div className="Note" style={s}>
            <h2>{notes.title}</h2>
            <p>{notes.body}</p>
            <div className="note-footer">
                <p>{notes.author}</p>
                <p>{notes.date}</p>
            </div>
        </div>
    );
}

export default Note;
