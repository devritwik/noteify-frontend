import './ColourSelector.css'



function ColourSelector(){

    let selectedColour = 0;

    function setColour(val){
        console.log(val);
    }

    function onClickHandler(e){
        e.preventDefault();
        setColour(e.target.value);
    }

    return(
        <div className="ColourSelector">
            <div>
            <button className="btn-c1" value={0} onClick={(e)=> onClickHandler(e)}></button>
            <button className="btn-c2" value={1} onClick={(e)=> onClickHandler(e)}></button>
            <button className="btn-c3" value={2} onClick={(e)=> onClickHandler(e)}></button>
            <button className="btn-c4" value={3} onClick={(e)=> onClickHandler(e)}></button>
            <button className="btn-c5" value={4} onClick={(e)=> onClickHandler(e)}></button>
            </div>
        </div>
    );
    
}

export default ColourSelector;
