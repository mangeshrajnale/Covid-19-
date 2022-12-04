import React, { useEffect, useState } from 'react'

const Apicall = () => {
    const [data, setData] = useState([]);
    const getApi = async () =>{
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        const Apidata = await res.json();
        setData(Apidata);
    }
    useEffect(()=>{
        getApi();
    }, []);
  return ( 
   <>
     {
        data.map((e,ind) =>{ 
            return(
           
            <tr key={ind}>
             <td>{e.id}</td>
             <td>{e.name}</td>
             <td>{e.username}</td>
             <td>{e.email}</td> 
           </tr>
            
            )
        })
     }
   </>
  )
}

export default Apicall;