import logo from './logo.svg';
import './App.css';
import FirstScreen from './screens/FirstScreen';
import image1 from "./images/מירב בישולים רקע 1.png"
import image2 from "./images/מירב בישולים רקע 2.png"
import image3 from "./images/מירב בישולים רקע 11.png"
import image4 from "./images/מירב בישולים רקע 12.png"
import image5 from "./images/מירב בישולים רקע 5.png"

import image7 from "./images/מירב בישולים רקע 13.png"

import image9 from "./images/מירב בישולים רקע 14.png"
import image10 from "./images/מירב בישולים רקע 15.png"
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';
import FifthScreen from './screens/FifthScreen';
import ForthScreen from './screens/ForthScreen';
import SixthScreen from './screens/SixthScreen';
import ByMe from './components/ByMe/ByMe';
import WhoAmI from './components/me/Me';
import PrivacyPolicy from './components/privacy/Privacy';
function App() {
  const images=[image1,image2,image3,image4,image5,image7,image9,image10]
  return <>
  <SecondScreen/>
  <FirstScreen images={images}/>
  <FifthScreen/>
  <ForthScreen/>
 <SixthScreen/>
 <WhoAmI/>
 <PrivacyPolicy 
  ownerName="מירב רוקח" 
  email="meravr70@gmail.com" 
  phone="+972 52-393-6547" 
  domain="https://meirav-bishulim.co.il/" 
/>
<ByMe/>

  </>
}

export default App;
