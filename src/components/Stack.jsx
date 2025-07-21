import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";

export function Stack(){
    return(
        
        <div className="container">
            
            <div className="content-box">
                <h3 className="stack-name">Front-End</h3>
                <div className="stack-front">
                    <div className="tech-front">
                        <span ><FaHtml5 /></span>
                        <span>HTML</span>
                    </div>
                    <div className="tech-front">
                        <span ><FaCss3 /></span>
                        <span>CSS</span>
                    </div>
                    <div className="tech-front">
                        <span ><FaReact /></span>
                        <span>React</span>
                    </div> 
                </div>
            </div>
            <div className="content-box">
                <h3 className="stack-name">Back-end</h3>
            </div>
            <div className="content-box">
                <h3 className="stack-name">Others</h3>
            </div>
            
        </div>
    )
}