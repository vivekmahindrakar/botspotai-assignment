import React from "react";

function Video(prop) {

    return(<video width={prop.width} height={prop.height} autoPlay loop controls muted>
        <source src={prop.src} typle="video/mp4"/>
    </video>)
    

}
export default Video;