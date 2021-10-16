import Button from '@restart/ui/esm/Button';
import React from 'react';
import { useForm } from 'react-hook-form';
import reactDom from 'react-dom';
import { Link } from 'react-router-dom';
import Useauth from '../../context/Useauth';
import Initialize from '../../firebase/init';
import {useLocation,useHistory } from 'react-router-dom'

Initialize()

const Login = () => {
  const {googlesignin,setuser} = Useauth()
  const location = useLocation()
  const redirect_url = location.state?.from || '/home'
  console.log(location.state?.from);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data)
  const history = useHistory()
 
    // hanldegoogle

    const Handlegoogle = () =>{
      googlesignin()
      .then(result=>{
            history.push(redirect_url)
        })

       
     
  
  }
    return (
        <div className="container">
            <h1>please log in here</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
   
      <input defaultValue="abcd@gmail.com" {...register("example")} />
      
     
      <input placeholder="enter password" {...register("exampleRequired", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}
      
      <input type="submit" />
    </form> <br />
            <button className="btn btn-info" onClick={Handlegoogle}>google sign in</button>
            <br /> <br />
            <p> <Link to="/register">new here? register now</Link> </p>
        </div>
    );
    
};

export default Login;