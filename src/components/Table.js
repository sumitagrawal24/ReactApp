import React from 'react';
// import axios from "axios";

function Table () {
    // let [responseData, setResponseData] = React.useState([]);
    // let [offSet, setOffSet] = React.useState(1);
    // let [isNext, isNextFunc] = React.useState(false);

    // const fetchData = () => {
    //     axios
    //       .get(`http://localhost:8080/1805351/retriveTable?offset=${offSet}`)
    //       .then((response) => {
    //         setResponseData([...responseData, ...response.data]);
    //         isNextFunc(true);
    //         setOffSet(offSet + 1);
    //       })
    //       .catch((error) => {
    //         console.log(error);
    //       });
    //   };

    const responseData= [{
      Sl_no:"1",
      meeting_name:"A",
      no_of_people_attending:"1",
      date:"23/04/2021",
      start_time:"9pm",
      end_time:"10pm",
      
    },
    {
      Sl_no:"2",
      meeting_name:"B",
      no_of_people_attending:"15",
      date:"24/04/2021",
      start_time:"8pm",
      end_time:"10pm",
    },
    {
      Sl_no:"3",
      meeting_name:"C",
      no_of_people_attending:"5",
      date:"24/04/2021",
      start_time:"6pm",
      end_time:"8pm",
    },
    {
      Sl_no:"4",
      meeting_name:"D",
      no_of_people_attending:"25",
      date:"24/04/2021",
      start_time:"9pm",
      end_time:"10pm",
    },
    {
      Sl_no:"5",
      meeting_name:"E",
      no_of_people_attending:"15",
      date:"24/04/2021",
      start_time:"12pm",
      end_time:"1pm",
    },
  
  ]
    
    
      const data= responseData.map((row) => [
        row.Sl_no,
        row.meeting_name,
        row.no_of_people_attending,
        row.date,
        row.start_time,
        row.end_time,
        row.actions
      ]);
      
return(  
<div style={{background:"white",color:"black", padding:"2rem",margin:"2rem"}} >
     <table style={{fontSize:"1rem", display:"initial"}}>
          <thead style={{color:" #0b5369"}}>
             <tr>
                <th>Sl.no. </th>
                <th>Meeting Name </th>
                <th>No. of People attending</th>
                <th>Date</th>
                <th>Start time </th>
                <th>End time</th>
                <th>Actions</th>
                <th></th>
             </tr>
           </thead>
           <tbody>
             {
               responseData.map((row)=>{
                 if(row)
                 return(
                <tr style={{padding:"1rem"}}>
                  <td>{row.Sl_no}</td>
                  <td>{row.meeting_name}</td>
                  <td>{row.no_of_people_attending}</td>
                  <td>{row.date}</td>
                  <td>{row.start_time}</td>
                  <td>{ row.end_time}</td>
                  <td><button>X</button></td>
                </tr>

                 )
               })
             }  
                
          </tbody>
       </table>
       
</div>
)}
export default Table;
