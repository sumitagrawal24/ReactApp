import React from 'react';
import Header from './Header';
import Table from './Table';
function Home () {

return(  
<div>
    <h1 style={{color:"black",textAlign:"left",margin:"2rem"}}>My Meetings</h1>
    <Header />
    <Table />
    </div>
)}

export default Home;