import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import Useauth from '../../../context/Useauth';

const Privateroute = ({children,...rest}) => {
    const {user,loading} = Useauth()
    // if(loading){
    //     return   <Spinner animation="border" variant="success" />
    // }
    return (
        
<div>
{
    loading ? <Spinner animation="border" variant="success" /> : 

<Route

{...rest}
render={({ location }) =>
 user?.email ? (
       children
     ) : (
       <Redirect
         to={{
           pathname: "/login",
           state: { from: location }
         }}
       />
     )
   }
>

</Route>
}
</div>
    );
};

export default Privateroute;