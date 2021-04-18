import React from 'react';
import Table from './Table';
function AboutMe () {

return(  
<div>
<h1 style={{color:"black",textAlign:"left",margin:"2rem"}}>About Me</h1>
<div style={{padding:"1rem",background:"white",color:"black", margin:"2rem"}}>
    
    <div style={{paddingLeft:"1rem"}}>
        <p style={{color:"black",textAlign:"left",fontSize:"1rem"}}>Name: Sumit Agrawal</p>
        <p style={{color:"black",textAlign:"left",fontSize:"1rem"}}>Roll: 1805351</p>
        <p style={{color:"black",textAlign:"left",fontSize:"1rem"}}>Github Profile: <a href="https://github.com/sumitagrawal24"><i> https://github.com/sumitagrawal24</i></a></p>
        <p style={{color:"black",textAlign:"left",fontSize:"1rem"}}>Skills: Javascript, HTML, React, JAVA, C, C++, Python, DS, DBMS, Web Development, Android Development, Digital Marketing.</p>
    </div>

    <div>
    <h2  style={{color:"black",textAlign:"left",margin:"1rem"}}>Projects</h2>
    <ol style={{fontSize:"1rem",textAlign:"left"}}>
    <li>React/Java <br></br>
        <i>Minor Project, Full Stack Development<br></br>
	FinTech B2B Invoice Management Application</i></li><br></br>
    <li>Android Development<br></br>
		<i>Minor Project, Chatting/Messaging App, Online</i></li><br></br>
    <li>Web Development<br></br>
	<i>Front End, Back-end Developer, Offline, Group Project</i></li><br></br>
    <li>Adhyayan<br></br>
    <i>Philanthropy, Digital Marketing</i></li><br></br>
    <li>DBMS<br></br>
	<i>College Based Group Project, Offline, Coder</i></li><br></br>
    </ol>
    </div>
    </div>
            
</div>
   
)}

export default AboutMe;