import React from 'react';
import { useState } from 'react';

export default function checkbox() {
  const [on, setOn]= useState(true);

  const change = ()=> {
    setOn(!on);
    return (
      <input type = "checked" checked ={on} on/>
    );
  }
}
