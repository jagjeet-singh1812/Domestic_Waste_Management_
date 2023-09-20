import React from 'react'

const Admin = () => {
  return (
    <>
        <h2 style={{textAlign:"center",margin:40}}> Options </h2>
        <br></br>
        <a href="/adminlocal"><h4 style={{textAlign:"center"}}>Allocate Locality to Locality Collector</h4></a>
        <br></br>
        <a href="/adminapt"><h4 style={{textAlign:"center",marginBottom:20}}>Allocate Apartment to Apartment Collector</h4></a>
    </>
  )
}

export default Admin