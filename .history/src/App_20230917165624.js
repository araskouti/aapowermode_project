import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import FirstSection from './components/FirstSection';

function App() {
  const style = {
    minWidth: '320px',
    height: '700px'
  }
  return (
   <>
     <Navbar />
     <FirstSection />
    <div class="calendly-inline-widget" data-url="https://calendly.com/araskouti6/book-an-appointment?background_color=1a1a1a&text_color=ffffff" style={style}></div>
    <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
   </>
  );
}

export default App;
