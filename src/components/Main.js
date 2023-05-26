import Note from "./Note";
import NoteFilter from "./NoteFilter";
import CreateNote from "./CreateNote";
function Main(){

    //Fetch All Notes
    //Display All Notes
    let note = {
        title: "This is note title",
        body: "Thisi is note body",
        author: "@ritwikdax",
        date: new Date().toDateString()
    }



    return (
        <div>
            <NoteFilter/>
            <Note notes={note}/>
            <CreateNote/>
        </div>
    );
}

export default Main;