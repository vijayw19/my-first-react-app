import React from 'react';
import Tabs from './Tabs';
import './App.css';

function Header() {
  return (
    <Tabs>
      <div label="About Me">
        Hello, <em>I am vijay Yadav</em>!
      </div>
      <div label="contact me">
        <p>I am reachable #2269782803</p>
        Mailing Address
          <p>Apt no-1108</p>
          <p>11 Overlea Drive</p>
          <p>Kitchener, Ontario, Canada- N2M5C8</p>
        Email id: vijay.yadav.d1rv@gmail.com
      </div>
      
      <div label="Social Media">
        <p><a href="https://www.w3schools.com/">LinkedIn</a></p>
        <p><a href="https://www.w3schools.com/">Instagram</a></p>
      </div>
       
      <div label="Work Experience">
        Under construction <em>Work Experience</em>!
      </div>


    </Tabs>
    
  );
}

export default Header;
