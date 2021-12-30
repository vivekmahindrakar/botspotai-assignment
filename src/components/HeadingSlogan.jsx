import React from "react";
import Video from "./Video"
import ai from "./images/ai-computer.svg"
import AOS from "aos"
import "aos/dist/aos.css"
import "./componentStyle.css"
import Buttons from "./Buttons"

AOS.init();
function HeadingSlogan() {

    return(
        <div className="Slogan">
            <span data-aos="slide-right"  data-aos-duration="1000">
            <h1>THE SOUL OF THE WORLD</h1>
            <h2>A SIMPLE SOLUTION</h2>
            </span>
            <div className="main-img">
            {/* <Video height="auto" width="60%" src="https://cdn.videvo.net/videvo_files/video/free/2014-12/large_watermarked/Metal_Wind_Chimes_at_Sunset_preview.mp4"/> */}
            <img src={ai} alt="aiComputer" height="auto" width="50%"/>
            </div>
            
            <p data-aos="slide-right" data-aos-delay="100" data-aos-duration="1200">For businesses and organization - you can build comunities and engage audiences with one 
            easy to use mobile app platform</p>

            <div className="reach-btn">
            <Buttons text="Know More" type="submit" className="button-without-arrow" img="none"/>
            <Buttons text="Contact Us" type="submit" className="button-without-arrow" img="none"/>
            </div>
            
        </div>
    )
    
}
export default HeadingSlogan;