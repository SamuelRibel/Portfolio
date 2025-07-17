import Github from "../assets/Icons/github.svg"
import Linkedin from "../assets/Icons/linkedin.svg"
import CV from "../assets/Icons/CV.svg"
import F1 from "../assets/Icons/F1.svg"


export function Header(){
    return( 
    <header className="header">
        <nav className="navbar">
            <div className="navdiv">
                <div className="navname">S.R.</div>
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

