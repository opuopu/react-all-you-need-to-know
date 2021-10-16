import React, { useEffect, useState } from 'react';
import './services.css'
import Service from './Service';
import { Container, Row } from 'react-bootstrap';
 export const services =[
    {name:"learn laptop",price:"4000",id:"1",img:"https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aXQlMjBzZXJ2aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"learn typing",price:"5000",id:"2",img:"https://images.unsplash.com/photo-1621566565292-8b2781208713?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8aXQlMjBzZXJ2aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"hard ware service",price:"5000",id:"3",img:"https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFyZHdhcmUlMjBzZXJ2aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"ssd problem service",id:"4",price:"3000",img:"https://images.unsplash.com/photo-1523655223303-4e9ef5234587?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aGFyZHdhcmUlMjBzZXJ2aWNlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"cable problem service",id:"5",price:"2000",img:"https://images.unsplash.com/photo-1599226335946-faf96a7cc10c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGhhcmR3YXJlJTIwc2VydmljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    {name:"mouse problem service",id:"6",price:"2000",img:"https://images.unsplash.com/photo-1586816879360-004f5b0c51e5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fGhhcmR3YXJlJTIwc2VydmljZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
]

const Services = () => {
    const [service,setservice] = useState([])
  
    return (
        <div>
            <h1>this is our some services {services.length}</h1>
      
            <Container>
       <Row>
       {
                services.map(service => <Service service={service} key={service.id}></Service>)
            }
         
       </Row>
    </Container>
        </div>
    );
};

export default Services;