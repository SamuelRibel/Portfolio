import Github from "../assets/Icons/github.svg"
import Linkedin from "../assets/Icons/linkedin.svg"
import CV from "../assets/Icons/CV.svg"
import F1 from "../assets/Icons/F1.svg"


export function Header(){
    return( 
    <header className="header">
        <nav className="navbar">
            <div className="navdiv">
                <div className="navname">Samuel Ribeiro</div>
                <div>
                    <a href="https://www.formula1.com" target="_blank">
                        <button className="f1-button">
                            <img src={F1} alt="#" />
                            <span className="f1-text">Experience</span>
                        </button>
                    </a> 
                </div>
                <div>
                    <a href="https://github.com/SamuelRibel" target="_blank">
                        <img className="navicon" src={Github} alt="Github"  />
                    </a>
                    <a href="https://www.linkedin.com/in/sam-ribel/" target="_blank">
                        <img className="navicon" src={Linkedin} alt="Linkedin" />
                    </a>
                    <a href="/Samuels_CV.pdf" target="_blank">
                        <img className="navicon" src={CV} alt="Resume" />
                    </a>
                </div>
            </div>
        </nav>
    </header>
        
    )
}

