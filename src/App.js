import Header from "./Components/Header";
import ImagesSlider from "./Components/ImagesSlider";
import "./App.css";
import Mission from "./Components/Mission";
import CardSection from "./Components/CardSection";
import MillionPeople from "./Components/MillionPeople";
import TwoImages from "./Components/TwoImages";
import SecondCardData from "./Components/SecondCardData";
import Thirdcards from "./Components/Thirdcards";
import FourthCard from "./Components/FourthCard";
import HelpCard from "./Components/HelpCard";
import SecondImageSlider from "./Components/SecondImageSlider";
import NewsCard from "./Components/NewsCard";
import Location from "./Components/Location";
import BottomHeader from "./Components/BottomHeader";
import Copyright from "./Components/Copyright";
// import Firstcard from "./Components/Firstcard";
function App() {
  return (
    <div className="App">
     <Header/>
     <ImagesSlider/>
     <Mission/>
     <CardSection/>
    <MillionPeople/>
    <TwoImages/>
    <SecondCardData/>
    <Thirdcards/>
    <FourthCard/>
    <HelpCard/>
    <SecondImageSlider/>
    <NewsCard/>
    <Location/>
    <BottomHeader/>
    <Copyright/>
    
    </div>
  );
}

export default App;
