import React, { useEffect, useState } from 'react';

const Statewise = () => {
  const [data, setData] = useState([]);
  const getApi = async () =>{
      const res = await fetch("https://data.covid19india.org/data.json");
      const Apidata = await res.json();
      setData(Apidata.statewise);
  }
  useEffect(()=>{
      getApi();
  }, []); 

  return (
    <>
      <div className='container-flude mt-5'>
        <div className='main-heading'>
           <h1 className='mb-5 text-center'><span className="font-weight-bold text-primary"> INDIA </span> COVID-19 Details</h1>
        </div>
        <div className='table-responsive'>
            <table className='table table-hover'>
              <thead className='thead-dark'>
                <tr>
                    <th>State</th>
                    <th>Confirmed</th>
                    <th>Recovered</th>
                    <th>Deaths</th>   
                    <th>Active</th>   
                    <th>Lastupdatedtime</th>   
                </tr>
              </thead>
              <tbody>
                {
                    data.map((e, ind) => {
                        return(
                            <tr key={ind}>
                            <th>{e.state}</th>
                            <td>{e.confirmed}</td>
                            <td>{e.recovered}</td>
                            <td>{e.deaths}</td>
                            <td>{e.active}</td> 
                            <td>{e.lastupdatedtime}</td> 
                        </tr>
                        )
                    })
                }
             
              </tbody>
            </table>
        </div>
      </div>
    </>
  )
}

export default Statewise;
