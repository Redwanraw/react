import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import React, { useState } from 'react';
import './App.css';
import Lickcount from './Componet/Lickcount';
import Abut from './Componet/Abut';
import jsimg from './img/1.png';
import Register from './Componet/Register';
import Login from './Componet/Login';
function App() {

{/*



  const areyy=[
   {name:"redwan",age:'25', img:jsimg },
   {name:"ragb",age:'30' ,img:jsimg},
   {name:"mohmd",age:'40', img:jsimg},
   
  ]


  const areyy2 = areyy.map((elem , i)=>{
    return <Abut obj={elem} key={i} />
  });
{/*
  const areyy3 = areyy.map((elem , i)=>{

  return <Lickcount obj={elem} key={i}/>

  });
*/}

const [ isLoginPage,setisLoginPage]=useState(true)

  return (

    <div className="App">
      {/*
<Abut  name="redwan" pothsn="scrept" obj={{age:20,lack:50}}/>
<Abut name="ragb" pothsn="full" obj={{age:30,lack:60}} />
<Abut name="mohmd" pothsn="strac" obj={{age:40,lack:70}}/>
      */}
{
  isLoginPage ?
  (<div>
   <Register/>
   <input type="button" className="btn btn-light position-absolute top-100 start-50 translate-middle" value="I have an account" onClick={()=>{setisLoginPage(false)}}/>

  </div>):
  (
    <>
    <Login/>
<input type="button" className="btn btn-light position-absolute top-100 start-50 translate-middle" value="Create an account" onClick={()=>{setisLoginPage(true)}}/>

    </>
  )
}

</div>
  );
}

export default App;
