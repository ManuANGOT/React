import Welcome from "./Welcome/Welcome";
import "./app.css";
import Contact from "./Contact/Contact";
import { useState } from "react";
import personnes from "./data";
import Count from "./Count";

function App() {

  const paragraphe = true;

 
  
  return (
    <> 
      <h1 className={paragraphe? "para" : "dauphin"}> Contacts</h1>
      <Count />
      
      {personnes.map((personne, index) => (
        <Contact key={index} {...personne} />
      ))}
    </>
  );
}

export default App;
