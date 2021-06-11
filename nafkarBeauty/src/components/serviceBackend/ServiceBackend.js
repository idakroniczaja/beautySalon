import React, { useEffect, useState } from 'react';

import sanityClient from '../../client.js'


export default function ServiceBackend({services}) {
    const [serviceType, setServiceType] = useState(null);




    useEffect(()=>{
        sanityClient
        .fetch(`*[_type == "services"]{
            title,
            slug,
            price,
            serviceType,
        }`)
        .then(res=>{
        const results = res.filter(elem=>elem.serviceType.toLowerCase()===services.current.previousElementSibling.innerText.toLowerCase())
        setServiceType(results)   
        })
        .catch(console.error)
    },[])

    return (

    <div className='service-box' ref={services}>


    {!serviceType && <h2>Loading...</h2> ||
    
    serviceType.map(elem=>{
        return (
            <div className="service-box-info">
                <h4>{elem.title}</h4>
                <p className='price'>$ {elem.price}</p>
            </div>
)
    }
        )  
        
        
    }

         

    </div>
    )
}
