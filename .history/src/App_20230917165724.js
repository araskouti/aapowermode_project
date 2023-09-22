import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import FirstSection from './components/FirstSection';

function App() {
  const CalendlyWidget = () => {
    useEffect(() => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
  
      // Append the script to the body to load the Calendly widget
      document.body.appendChild(script);
  
      return () => {
        // Remove the script when the component unmounts
        document.body.removeChild(script);
      };
    }, []);
  return (
   <>
     <Navbar />
     <FirstSection />
     <div
      className="calendly-inline-widget"
      data-url="https://calendly.com/araskouti6/book-an-appointment?background_color=1a1a1a&text_color=ffffff"
      style={{ minWidth: '320px', height: '700px' }}
    ></div>
   </>
  );
}

export default App;
