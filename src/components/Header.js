import logo from "../assets/logo.png"
import "./Header.css"

function Header(){
    return(
        <header>
            <div>
                <div>
                    <img src={logo} alt="logo" className="logo"/>
                    <h1>Noteify</h1>
                </div>
            </div>

        </header>
    );
}

export default Header;
