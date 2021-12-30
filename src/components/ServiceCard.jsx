import react from "react";

function ServiceCard(props) {

            return(<div className="eachCard">
                <img src={props.img} alt={props.alt}/>
                <h3>{props.serviceName}</h3>
            </div>);
    
}
export default ServiceCard;