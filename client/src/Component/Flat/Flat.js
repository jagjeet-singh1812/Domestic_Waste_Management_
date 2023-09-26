import React, { useState } from 'react'
import "./Flat.css"

const Flat = () => {

    const [isopenModal, setisopenModal] = useState(false);

    const openM = () => {
        setisopenModal(!isopenModal)
    }

    return (
        <>
            {isopenModal ?
                <div className='modal-container'>
                    <form className="form_container" >
                        <h1 style={{textAlign:"center", paddingBottom:"10px"}}>Assign Points</h1>
                        <select
                            className="select"
                        >
                            <option>0 points</option>
                            <option>2 points</option>
                            <option>5 points</option>
                        </select>
                        <div style={{display:"flex", flexDirection:"row"}}>
                            <button type="submit" className="green_btn">
                                SUBMIT
                            </button>
                            <button className="red_btn" onClick={openM}>
                                CLOSE
                            </button>
                        </div>
                    </form>
                </div>
                :
                <div class="flat-apt">
                    <h2 style={{ textAlign: "center", marginBottom: 30 }}>Building name</h2>
                    <ul class="showcase" style={{ marginBottom: 30 }}>
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
                            <p style={{ paddingRight: "20px" }}>Ground Floor</p>
                            <div class="seat" onClick={openM}>001</div>
                            <div class="seat" onClick={openM}>002</div>
                            <div class="seat" onClick={openM}>003</div>
                            <div class="seat" onClick={openM}>004</div>
                            <div class="seat" onClick={openM}>005</div>
                            <div class="seat" onClick={openM}>006</div>
                            <div class="seat" onClick={openM}>007</div>
                            <div class="seat" onClick={openM}>008</div>
                        </div>
                        <div class="row">
                            <p style={{ paddingRight: "20px" }}>1 st Floor</p>
                            <div class="seat">101</div>
                            <div class="seat selected">102</div>
                            <div class="seat">103</div>
                            <div class="seat selected">104</div>
                            <div class="seat selected">105</div>
                            <div class="seat selected">106</div>
                            <div class="seat">107</div>
                            <div class="seat">108</div>
                        </div>
                        <div class="row">
                            <p style={{ paddingRight: "20px" }}>2nd Floor</p>
                            <div class="seat">201</div>
                            <div class="seat occupied">202</div>
                            <div class="seat occupied">203</div>
                            <div class="seat">204</div>
                            <div class="seat occupied">205</div>
                            <div class="seat">206</div>
                            <div class="seat occupied">207</div>
                            <div class="seat">208</div>
                        </div>
                        <div class="row">
                            <p style={{ paddingRight: "20px" }}>3 rd Floor</p>
                            <div class="seat occupied">302</div>
                            <div class="seat selected">303</div>
                            <div class="seat">304</div>
                            <div class="seat selected">305</div>
                            <div class="seat occupied">306</div>
                            <div class="seat selected">307</div>
                            <div class="seat">308</div>
                        </div>
                        <div class="row">
                            <p style={{ paddingRight: "20px" }}>4 th Floor</p>
                            <div class="seat">401</div>
                            <div class="seat selected">402</div>
                            <div class="seat selected">403</div>
                            <div class="seat selected">404</div>
                            <div class="seat selected">405</div>
                            <div class="seat selected">406</div>
                            <div class="seat occupied">407</div>
                            <div class="seat">408</div>
                        </div>
                        <div class="row">
                            <p style={{ paddingRight: "20px" }}>5 th Floor</p>
                            <div class="seat occupied">501</div>
                            <div class="seat selected">502</div>
                            <div class="seat selected">503</div>
                            <div class="seat occupied">504</div>
                            <div class="seat selected">505</div>
                            <div class="seat selected">506</div>
                            <div class="seat selected">507</div>
                            <div class="seat occupied">508</div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default Flat