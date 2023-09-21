import React from 'react'
import "./AdminLocality.css"
import avatar from "../../Assets/avatar.jpg"

const AdminLocality = () => {
    return (
        <>
           <h2 style={{ textAlign: "center", marginTop: 70 , marginBottom:50 }}>Allocating Locality to Locality collector</h2>
            <div className='grid-local'>
                <div className="container-local">
                    <img className='img-local' alt="building" src={avatar} />
                    <div className="heading-local">
                        Name : Sagar Singh
                        <select style={{ padding: 7, borderRadius: 30, margin: 10 }}>
                            <option>Sector 10</option>
                            <option>Sector 12</option>
                            <option>Sector 14</option>
                            <option>Sector 18</option>
                        </select>
                        <button className='btn-local'>
                            Submit
                        </button>
                    </div>
                </div>
                <div className="container-local">
                    <img className='img-local' alt="building" src={avatar} />
                    <div className="heading-local">
                        Name : Vivek 
                        <select style={{ padding: 7, borderRadius: 30, margin: 10 }}>
                            <option>Sector 10</option>
                            <option>Sector 12</option>
                            <option>Sector 14</option>
                            <option>Sector 18</option>
                        </select>
                        <button className='btn-local'>
                            Submit
                        </button>
                    </div>
                </div>
                <div className="container-local">
                    <img className='img-local' alt="building" src={avatar} />
                    <div className="heading-local">
                        Name : Jagjeet Singh
                        <select style={{ padding: 7, borderRadius: 30, margin: 10 }}>
                            <option>Sector 10</option>
                            <option>Sector 12</option>
                            <option>Sector 14</option>
                            <option>Sector 18</option>
                        </select>
                        <button className='btn-local'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLocality