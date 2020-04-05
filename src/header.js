import React from 'react';
import Tabs from './Tabs';
import './App.css';

function Header() {
  return (
    <Tabs>
      <div label="Vijay Yadav">
        <h2>Hello I am Vijay Yadav</h2>
        <h2><p className="a">An IT Professional with 6+ Years of </p>
        experience in Devops Engineering
        industry specialized in Scrum, <br/>
        Agile and Kanban methodology.</h2>
      </div>
      <div label="contact me">
        <h2><p className="b">I am reachable #2269782803<br/>
          Mailing Address<br/>
          Apt no-1108, 
          11 Overlea Drive<br/>
          Kitchener, Ontario, Canada- N2M5C8<br/>
        Email id: vijay.yadav.d1rv@gmail.com
        </p></h2>
      </div>
      
      <div label="Social Media">
        <p><a className="color" href="https://linkedin.com/in/vijay-yadav-a58765119">LinkedIn</a><br />
        <a className="color" href="https://github.com/vijayw19">GitHub</a>
        </p>
      </div>
      <div label="Work Experience">
        <h2 className="color">Under Construction...</h2>

      </div>


    </Tabs>
    
  );
}

export default Header;
