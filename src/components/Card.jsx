import react from "react";
import Buttons from "./Buttons";
 function Card(props) {
     return(
         <div className="info-card">

            <h2>Why choose BOTSPOT AI? <br/> We are so glad you asked!</h2>

            <div className="info-btns">
            <Buttons text="GET STARTED TODAY" type="submit" className="button-with-arrow" img="none"/>
            <Buttons text="OUR SERVICES" type="submit" className="button-with-arrow" img="none"/>
            </div>
            
         </div>
     )
     
 }
 export default Card;