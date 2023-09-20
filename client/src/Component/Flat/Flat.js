import React from 'react'
import "./Flat.css"

const Flat = () => {
    return (
        <>

            <div class="flat-apt">

            <h2 style={{textAlign:"center",marginBottom:30}}>Building name</h2>

                <ul class="showcase" style={{marginBottom:30}}>
                    <li>
                        <div class="seat"></div>
                        <small>No points</small>
                    </li>
                    <li>
                        <div class="seat selected"></div>
                        <small>2 points</small>
                    </li>
                    <li>
                        <div class="seat occupied"></div>
                        <small>5 points</small>
                    </li>
                </ul>
                <div class="container-flat">
                    <div class="row">
                    <p style={{paddingRight:"20px"}}>Ground Floor</p>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                    </div>
                    <div class="row">
                        <p style={{paddingRight:"20px"}}>1 st Floor</p>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat occupied"></div>
                        <div class="seat occupied"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                    </div>
                    <div class="row">
                    <p style={{paddingRight:"20px"}}>2nd Floor</p>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat occupied"></div>
                        <div class="seat occupied"></div>
                    </div>
                    <div class="row">
                    <p style={{paddingRight:"20px"}}>3 rd Floor</p>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                    </div>
                    <div class="row">
                    <p style={{paddingRight:"20px"}}>4 th Floor</p>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat occupied"></div>
                        <div class="seat occupied"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                    </div>
                    <div class="row">
                    <p style={{paddingRight:"20px"}}>5 th Floor</p>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat"></div>
                        <div class="seat occupied"></div>
                        <div class="seat occupied"></div>
                        <div class="seat occupied"></div>
                        <div class="seat"></div>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Flat