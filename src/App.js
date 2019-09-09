import React, {useState,useEffect } from 'react';
import './App.css';
import LineGraph from './Components/LineGraph';
import SignalGraph from './Components/SignalGraph';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    const newData = [
      {
        data : [1,2,1,0,1,2,1,8,9,8,1,2,0,2,1,2,3,1,2,0,8,9,2,0,3,0,2,1,2,3,8,10,2,1,2,3,0,1,2,1,2,7,6,9,1,2,0,1,2,1],
        signal: [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0],
      },
      {
        data: [0,2,1,2,3,10,12,1,1,2,3,0,1,2,1,2,7,6,9,1,2,0,1,2,1,2,1,3,0,2,3,1,1,2,3,10,9,12,0,2,3,1,2,0,1,7,11,0,1,2],
        signal: [0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0],
      },
      {
        data: [2,1,3,0,2,2,9,7,2,3,1,2,9,8,2,3,1,2,0,1,2,3,0,10,9,1,2,1,0,1,2,1,8,9,8,1,2,0,2,1,2,1,14,10,0,1,1,2,0,3],
        signal: [0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0],
      }
    ];
    if(!data.length)
    setData(newData);
  });

  return (
    <div className="App">
      <h2> Data Visualisation</h2>
      { data.map( (d, i) => {
         return (
           <div className="series" >
             <h4 style={{color:"green", fontFamily: "Georgia"}}> Series {i+1} </h4>
              <LineGraph data={d.data} index={i}/>
              <SignalGraph data={d.signal}  index={i}/> 
            </div>
          )
      } )}
      
    </div>
  );
}

export default App;
