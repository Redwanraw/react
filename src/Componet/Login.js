import React , {useState} from "react"
import registration from "../img/registration.png"
import lock from "../img/lock.png" 
import add_user from "../img/add-user.png" 
import Register from "./Register"
export default function Login(props){
const [isLoginPage,setisLoginPage]=useState(true)
    return(
        <div className="Login">

        <form className=" mt-5 w-50 text-center position-absolute top-50 start-50 translate-middle " id="forms" action="/index.html">
        <img className="w-50 my-2" src={registration} />
            <div className="input-group mb-3">
                <span className="input-group-text " id="basic-addon1">@</span>
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </div>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">@example.com</span>
            </div>
            <div className="text-start">
                <img src={lock} /> <a href="" className="text-dark me-2 font ">Forgot your password </a>

                        <img src={add_user} /> <a onClick={()=>{props.onClick()}} className="text-dark  font">Create a new account </a>

            </div>
            <button type="button d-block" className="btn btn-light" onClick={(e)=>{
                setisLoginPage(false)
                e.preventDefault()
                }}>Light</button>

            </form>
        </div>
    )
}
