import React from 'react';
import {Link} from "react-router-dom";
import Contact from './Contact/Contact';

import personnes from"../data";

export default function ContactList(){
    return (
        <>
        <Link to={"/Count"}>count</Link>

        {personnes.map((personne, index) => (
        <Contact key={index} {...personne} />
      ))}
        </>

    );

}

