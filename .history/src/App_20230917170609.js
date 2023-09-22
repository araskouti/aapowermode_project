import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import FirstSection from './components/FirstSection';

function App() {
  return (
   <>
     <Navbar />
     <FirstSection />
     <div class="calendly-inline-widget" data-url="https://calendly.com/araskouti6/book-an-appointment?background_color=1a1a1a&text_color=ffffff" style={{min-width:320px;height:700px;}}></div>



   </>
  );
}

export default App;
