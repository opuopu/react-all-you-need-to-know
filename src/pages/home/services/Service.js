import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './ser.css'
import { services } from './Services';
const Service = (props) => {
    const{name,img,price,id} = props.service || {}
//     const service = services
//     console.log(service);


    return (

    
           <Col md={4} className="p-5">
    <img src={img} alt="" />
          <h3>{name}</h3>
          <p>price: {price}</p>
          <Link to={`/booking/${id}`}>
          <button className=" btn btn-info text-white">book our services</button>
          </Link>
           </Col>
        
    
    

    );
};

export default Service;