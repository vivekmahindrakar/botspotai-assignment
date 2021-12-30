import react from "react";
import ServiceCard from "./ServiceCard"
import finance from "./images/f&i.svg"
import healthcare from "./images/healthcare.svg"
import construction from "./images/construction.svg"
import wholesale from "./images/shopping.svg"
import eduction from "./images/education.svg"
import energy from "./images/energy.svg"
import entertainment from "./images/entertainment.svg"
import transportation from "./images/transportation.svg"


function Services(){
    return(
        <div className="service-holder" id="services">
            <ServiceCard img={finance} alt="finance" serviceName="Finance and Insuarance"/>
            <ServiceCard img={healthcare} alt="healthcare" serviceName="Health Care"/>
            <ServiceCard img={construction} alt="construction" serviceName="Construction"/>
            <ServiceCard img={wholesale} alt="shopping" serviceName="Wholesale and retail"/>
            <ServiceCard img={eduction} alt="education" serviceName="Education"/>
            <ServiceCard img={energy} alt="energy&resources" serviceName="Energy and Resources"/>
            <ServiceCard img={entertainment} alt="entertainment" serviceName="Entertainment"/>
            <ServiceCard img={transportation} alt="transportation" serviceName="Transportation"/>
            <ServiceCard img={healthcare} alt="healthcare" serviceName="Health Care"/>
        </div>
    );
}
export default Services;