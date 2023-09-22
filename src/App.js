import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import FirstSection from './components/FirstSection';
import SecondSection from './components/SecondSection'

function App() {
  return (
   <>
     <Navbar />
     <FirstSection />
     <SecondSection />
   </>
  );
}
//<div className="calendly-inline-widget" data-url="https://calendly.com/araskouti6/book-an-appointment?background_color=1a1a1a&text_color=ffffff" style={{minWidth:'320px', height:'700px'}}></div>

export default App;
