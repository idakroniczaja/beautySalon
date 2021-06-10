import React, {useState, useEffect} from 'react';


import './Services.css'

export default function Services({changeToServices}) {
const [showing, setShowing] = useState('')
const [clicked, setClicked] = useState(false)


const showDiv = async (e) => {
await setShowing(e.target.innerText);
setClicked(!clicked)
}



    return (

            <div ref={changeToServices} className='content-wrapper services'>

                <h2>Services</h2>
         

                <div className='button-list'>
                <button onClick={(e)=>showDiv(e)}>Nail Care</button>

            {(showing === "Nail Care" && clicked) &&
                    <div className='nailcare' >
                        <div className="info-category">
                            <h4>Callus removal</h4>
                            <p className='price'>$10.00</p>
                        </div>
                        <div className="info-category">
                            <h4>russian pedicure</h4>
                            <p className='price'>$60.00</p>
                        </div>
                        <div className="info-category">
                            <h4>Russian mani/pedi</h4>
                            <p className='price'>$80.00</p>
                        </div>
                        <div className="info-category">
                            <h4>Manicure and Pedicure</h4>
                            <p className='price'>$62.00</p>
                        </div>
                        <div className="info-category">
                            <h4>Callus removal</h4>
                            <p className='price'>$10.00</p>
                        </div>
                    </div>
            }
                <button onClick={()=>setShowing('parafin')}>Parafin</button>
{showing === 'parafin' && 
                <div className='parafin' >
                        <div className="info-category">
                            <h4>Parafin 1</h4>
                            <p className='price'>$10.00</p>
                        </div>
                        <div className="info-category">
                            <h4>Parafin  jdkaj kdsljs</h4>
                            <p className='price'>$60.00</p>
                        </div>
                
                    </div>
}
                <button>Massage</button>
                <button>Makeup</button>
                <button>Skincare</button>
                <button>Eyelashes and Brows</button>
                <button>Permanent Makeup</button>
                <button>Waxing</button>
                <button>Threading</button>
                <button>Hair Care</button>
                </div>
            </div>

    )
}
