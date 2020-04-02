import React from 'react';
import Tabs from './Tabs';
import './App.css';

function Header() {
  return (
    <Tabs>
      <div label="About Me">
        <h2 className="color">Hello I am Vijay Yadav</h2>
      </div>
      <div label="contact me">
        <p className="color">I am reachable #2269782803<br/>
          Mailing Address<br/>
          Apt no-1108, 
          11 Overlea Drive<br/>
          Kitchener, Ontario, Canada- N2M5C8<br/>
        Email id: vijay.yadav.d1rv@gmail.com
        </p>
      </div>
      
      <div label="Social Media">
        <p><a className="color" href="https://www.w3schools.com/">LinkedIn</a><br />
        <a className="color" href="https://www.w3schools.com/">Instagram</a>
        </p>
      </div>
       
      <div label="Work Experience">
        <h2 className="color">Under Construction...</h2>
      </div>


    </Tabs>
    
  );
}

export default Header;
