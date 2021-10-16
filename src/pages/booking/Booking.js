import Tabs from '@restart/ui/esm/Tabs';
import React, { useEffect, useState } from 'react';
import { Tab } from 'react-bootstrap';
import { useParams } from 'react-router';
import Services, { services } from '../home/services/Services';

const Booking = () => {
    const [count, setCount] = useState(55);
    const[users,setuser] = useState([])
    const[cata,setcata] = useState([])
    const {id} = useParams()

      useEffect(()=>{
          fetch('/user.JSON')
          .then(res =>res.json())
          .then(data => setuser(data))
      },[])
    //   -------------------the best way to find user using useparams id---------------------
      useEffect(()=>{
        const catagorys = users.filter(cat=> cat.catagory==="breakfast")
     setcata(catagorys)
    },[users])
// --------------------------------------------------------
  const service = services.find(single=> single.id === id)

const{name,img} = service || {}

const handle = ()=>{
if(count < 385){
    return setCount(count + 55)
}



}





    return (
        <div>
          
            <div className="text-center">
          <h3>name: {cata.length}</h3>
          {
              cata.map(c=> <div>

                  <h3>{c.name}</h3>
              </div> )
          }
          <h2>booking page  {id}</h2>
                <p>{name}</p>
                <img src={img} alt="" />

            <div>
            <p>You clicked {count} times</p>
      <button onClick={handle}>
        Click me
      </button>
            </div>

            </div>
         
        </div>
    );
};

export default Booking;