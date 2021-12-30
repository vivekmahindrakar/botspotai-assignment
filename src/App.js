import logo from './logo.svg';
import './App.css';
import Header from "./components/header"
import HeadingSlogan from "./components/HeadingSlogan"
import Card from "./components/Card"
import WhyUs from "./components/WhyUs"
import Services from "./components/Services"
function App() {
  return (
    <div className='App'><Header/>
    <div className='main-home-page'>
      <HeadingSlogan/>
    </div>
    <div>
      <Card/>
      <WhyUs />
      <Services/>
    </div>
    
      <footer>
        Copyright © BotspotAi 
      </footer>
    </div>

  );
}

export default App;
