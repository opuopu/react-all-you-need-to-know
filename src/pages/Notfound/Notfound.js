import React from 'react';
import { Link } from 'react-router-dom';
import notfound from '../../images/2452502.jpg'

const Notfound = () => {
    return (
        <div>
            <img style={{width:"100%"}} src={notfound} alt="" />
            <Link to="/home">go home</Link>
        </div>
    );
};

export default Notfound;