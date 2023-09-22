import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
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

    // Return null or an empty element because this component doesn't render any JSX directly
    return null;
  };

  return (
    <div className="App">
      <Navbar />
      <FirstSection />
      {/* Call the CalendlyWidget function to render the widget */}
      <CalendlyWidget />
    </div>
  );
}

export default App;
