import React, { useState } from 'react';
import img1 from '../../images/john-schnobrich-2FPjlAyMQTA-unsplash.jpg'
import img2 from '../../images/images.jpeg'
import img3 from '../../images/2452502.jpg'
import './img.css'
const Img = () => {
    const  [toggle,settoogle] = useState(1)
    const toogle1 =() =>{
        return settoogle(1)
    }
    return(
        <div>

<div>
    {
        toggle===1 && <img src={img1} alt="" /> || toggle===2 && <img src={img2} alt="" /> || toggle===3  && <img src={img3} alt="" />
     }
</div>


<div className="parents">
    <img onClick={toogle1} src={img1} alt="" />
    <img  onClick={()=>settoogle(2)} src={img2} alt="" />
    <img onClick={()=>settoogle(3)}  src={img3} alt="" />
</div>

        </div>
    );
}

export default Img;