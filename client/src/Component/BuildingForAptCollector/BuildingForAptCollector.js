import React from 'react'
import "./BuildingForAptCollector.css"
import { useNavigate } from 'react-router-dom'

const BuildingForAptCollector = () => {

    const navigate = useNavigate();
    return (
        <><h2 style={{ textAlign: "center", color: "black" }}>Building Names</h2>
            <div className='grid-apt'>
                <div className="container-apt">
                    <img className='img-apt' alt="building" src="https://picsum.photos/200" />
                    <div className="heading-apt">
                        Jagjeet ka Ghar,Andheri
                        <a href='/flat'><button className='btn-apt'>
                            Points
                        </button>
                        </a>
                    </div>
                </div>
                <div className="container-apt">
                    <img className='img-apt' alt="building" src="https://picsum.photos/200" />
                    <div className="heading-apt">
                        Sagar ka Ghar
                        <button className='btn-apt'>
                            Points
                        </button>
                    </div>
                </div>
                <div className="container-apt">
                    <img className='img-apt' alt="building" src="https://picsum.photos/200" />
                    <div className="heading-apt">
                        Suraj ka ghar
                        <button className='btn-apt'>
                            Points
                        </button>
                    </div>
                </div>
                <div className="container-apt">
                    <img className='img-apt' alt="building" src="https://picsum.photos/200" />
                    <div className="heading-apt">
                        Vivek ka Ghar
                        <button className='btn-apt'>
                            Points
                        </button>
                    </div>
                </div>
                <div className="container-apt">
                    <img className='img-apt' alt="building" src="https://picsum.photos/200" />
                    <div className="heading-apt">
                        Shruti ka ghar
                        <button className='btn-apt'>
                            Points
                        </button>
                    </div>
                </div>
                <div className="container-apt">
                    <img className='img-apt' alt="building" src="https://picsum.photos/200" />
                    <div className="heading-apt">
                        Mera ghar
                        <button className='btn-apt'>
                            Points
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuildingForAptCollector