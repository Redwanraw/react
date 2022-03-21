import React , {useState} from "react"
import App from "../App"
export default function Abut(props){

    const [lick,setCount]=useState(1);

    const incCount=()=>{
        console.log('get lack');
        setCount(lick +1);
      };
      const [deslick,setdeslick]=useState(1);

      const endCount=()=>{
        console.log('des lack');
        setdeslick(deslick +1);
      }

    return(
        <div className="abut">
           <img className="img1" src={props.obj.img}/>
           <p className="">my name:{props.obj.name} <br/>age: {props.obj.age}</p>
           <span onClick={incCount} className="">👍 {lick} </span>
           <span onClick={endCount} className=""><dr>👎</dr> {deslick} </span><br/>
           
        </div>
    )
}