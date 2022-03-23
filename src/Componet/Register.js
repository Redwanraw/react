import React , {useState} from "react"
import registration from "../img/registration.png"
import lock from "../img/lock.png" 
import add_user from "../img/add-user.png" 
import Login from "./Login"
export default function Register(props){
const [isLog,setisLog]=useState(true)
    return(
        <div className="Register">
        <form className=" mt-5 w-50 text-center position-absolute top-50 start-50 translate-middle " id="forms" >
        <img className="w-50 my-2" src={registration} />
            <div className="input-group mb-3">
                <span className="input-group-text " id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">@example.com</span>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text " id="basic-addon1">🔑</span>
                <input type="text" className="form-control" placeholder="password" aria-label="password" aria-describedby="basic-addon1" />
            </div>

            <div className="text-start">
                <img src={lock} /> <a  href="" className="text-dark me-2 font ">Forgot your password </a>
           
                        <img src={add_user} /> <a href="" onClick={(e)=>{
                            props.onClick(e)
                            e.preventDefault()}}  className="text-dark  font">login </a>

            </div>
            <button type="button d-block" className="btn btn-light">Light</button>

            </form>

        </div>
    )
}
