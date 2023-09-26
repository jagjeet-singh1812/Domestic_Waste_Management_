import React from 'react'
import "./AdminApt.css"
import avatar from "../../Assets/avatar.jpg"

const AdminApt = () => {
    return (
        <>

            <h2 style={{ textAlign: "center", marginTop: 70, marginBottom: 50 }}>Allocating Apartment to Apartment collector</h2>
            <div className='grid-aptc'>
                <div className="container-aptc">
                    <img className='img-aptc' alt="building" src={avatar} />
                    <div className="heading-aptc">
                        Name : Sagar Singh
                        <select style={{ padding: 7, borderRadius: 30, margin: 10 }}>
                            <option>S&M Home</option>
                            <option>Sun Darshan</option>
                            <option>Elite Tower</option>
                            <option>Panchasheel</option>
                        </select>
                        <button className='btn-aptc'>
                            Submit
                        </button>
                    </div>
                </div>
                <div className="container-aptc">
                    <img className='img-aptc' alt="building" src={avatar} />
                    <div className="heading-aptc">
                        Name : Vivek
                        <select style={{ padding: 7, borderRadius: 30, margin: 10 }}>
                            <option>S&M Home</option>
                            <option>Sun Darshan</option>
                            <option>Elite Tower</option>
                            <option>Panchasheel</option>
                        </select>
                        <button className='btn-aptc'>
                            Submit
                        </button>
                    </div>
                </div>
                <div className="container-aptc">
                    <img className='img-aptc' alt="building" src={avatar} />
                    <div className="heading-aptc">
                        Name : Jagjeet Singh
                        <select style={{ padding: 7, borderRadius: 30, margin: 10 }}>
                            <option>S&M Home</option>
                            <option>Sun Darshan</option>
                            <option>Elite Tower</option>
                            <option>Panchasheel</option>
                        </select>
                        <button className='btn-aptc'>
                            Submit
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AdminApt