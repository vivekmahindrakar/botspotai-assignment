import react from "react";
import Arrow from "./images/Arrow.svg"
function Buttons(props)
{
    return(
        <button type={props.type} className={props.className}><strong>{props.text} <img src={Arrow} alt="Arrow"/></strong></button>
    )
}
export default Buttons;