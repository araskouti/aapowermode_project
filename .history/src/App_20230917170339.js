import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import FirstSection from './components/FirstSection';

function App() {
  const CalendarWidget = () => {
    useEffect(() => {
      // Load the Calendly script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
  
      // Append the script to the document
      document.body.appendChild(script);
  
      // Clean up the script when the component unmounts
      return () => {
        document.body.removeChild(script);
      };
    }, []);
  return (
   <>
     <Navbar />
     <FirstSection />
     <div className="calendly-inline-widget" data-url="https://calendly.com/araskouti6/book-an-appointment?background_color=1a1a1a&text_color=ffffff" style={{ minWidth: '320px', height: '700px' }}>
    </div>
   </>
  );
}

export default App;
