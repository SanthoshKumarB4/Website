import React from 'react';
import Welcome from "../welcome/welcome";
// import Contact from "../contact/contact";
import Mobile from "../mobile/mobile";
import "./home.css"; // Import CSS for styling

function App() {
  return (
    <div className="app-container"> 
      <div id="welcome"><Welcome/></div>
      <div id="mobile"><Mobile/></div>
      {/* <div id="contact"><Contact/></div> */}
    </div>
  );
}

export default App;
