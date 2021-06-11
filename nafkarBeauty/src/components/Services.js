import React, {useState, useEffect, useRef} from 'react';


import './Services.css'

import ServiceBackend from './serviceBackend/ServiceBackend'

export default function Services({changeToServices}) {
const [showing, setShowing] = useState('')
const [clicked, setClicked] = useState(false);

const services = useRef(null);



const showDiv = async (e) => {
await setShowing(e.target.innerText);


}



    return (

            <div ref={changeToServices} className='content-wrapper services'>

                <h2>Services</h2>
         

                <div className='button-list' >
                <button  onClick={(e)=>showDiv(e)}>Nail Care</button>

            {(showing === "Nail Care") &&
            <ServiceBackend services={services}/>
            }
                <button  onClick={(e)=>showDiv(e)}>Parafin</button>
                {(showing === "Parafin") &&
                <>
            <ServiceBackend services={services}/>
            
                </>
            }

                <button>Massage</button>
                <button>Makeup</button>
                <button>Skincare</button>
                <button>Eyelashes and Brows</button>
                <button>Permanent Makeup</button>
                <button>Waxing</button>
                <button>Threading</button>
                <button onClick={(e)=>showDiv(e)}>Hair Care</button>
                {(showing === "Hair Care" ) &&
            <ServiceBackend services={services}/>
            }
                </div>
            </div>

    )
}
