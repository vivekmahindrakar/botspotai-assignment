import react from "react";
import contact from "./images/contact.svg"
import search from "./images/search.svg"
import blackSearch from "./images/search-black.svg"
import "./componentStyle.css"
import hamburger from "./images/hamburger.svg"

var menuFlag=true;
var searchFlag=true;
function showMenu()
{
    if(menuFlag)
    {
        document.getElementById("navigate").style.left="0px"
        menuFlag=false;
    }
    else
    {
        document.getElementById("navigate").style.left="-170%"
        menuFlag=true;
    }
    
}
function showSearchBar()
{
    if(searchFlag)
    {
        document.getElementById("search-bar").style.left="1%"
        searchFlag=false;
    }
    else
    {
        document.getElementById("search-bar").style.left="-100%"
        searchFlag=true;
    }
    
}

function Header()
{
    let header = <header className="main-header">
     <h1> BOTSPOT AI </h1>
    <ul className="navigation" id="navigate">
        <li className="links"><a href="#services">Services</a></li>
        <li className="links"><a href="#">Know more</a></li>
        <li className="links"><a href="#">Contact us</a></li>
        <li className="links"><img src={search} alt="search" id="search-img"/><input type="text" placeholder="try 'Services...'"/></li>
    </ul>
    <div className="icon-links">
    <div className="search-bar" id="search-bar"><img src={blackSearch} alt="search" onDoubleClick={showSearchBar} id="search-img"/><input type="text" placeholder="try 'Services...'"/></div>
    <span>
    <img src={contact} alt="contact"/>
    <img src={search} alt="search" onClick={showSearchBar}/>
    </span>
    <img src={hamburger} alt="hamburger"  onClick={showMenu}/>
    </div>
    
    
    </header>;


    return header;
}
export default Header;