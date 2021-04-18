import React from 'react';
import searchIcon from '../../src/search_icon.svg';
function Header () {
const [name, setName] = React.useState("");
return(  
<div style={{display:'flex',background:"white",color:"black", margin:"2rem"}}>
    
    <div style={{display:'flex',margin:"1rem"}}>
    <form action='getbyname' method='get' id="searchForm">
      <input
      type="text"
      id="name" 
      name='name' 
      placeholder="Enter name"
      value={name}
      onChange={(event) =>setName(event.target.value)}
      />
     </form>

    <div style={{paddingLeft:"1rem"}}>
        <label for="fromdate">From: </label>
        <input type="date"  id="fromdate" name='fromdate' />
    </div>

    <div style={{paddingLeft:"1rem"}} >
        <label for="todate" >To: </label>
        <input type="date"  id="todate" name='todate' />
    </div>
    </div>
            
</div>
)}
export default Header;