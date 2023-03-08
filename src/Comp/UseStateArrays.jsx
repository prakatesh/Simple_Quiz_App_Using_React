import React from 'react';
import { useState } from 'react';
 function UseStateArrays(){
  const [data,setData]=useState([])
  const items = ["dhoni", "kohli", "rohit", "rishab"];
  const addPlayers=()=>{
    setData(items);
  };
    return(
    <>
 UseStateArrays
 <br/>
 {data.length && data.map((items) => {
	return <li>{items}</li>;
	})}
 <button onClick={addPlayers}>Add Palyers</button>
    </>
    )
}
export default UseStateArrays;  
