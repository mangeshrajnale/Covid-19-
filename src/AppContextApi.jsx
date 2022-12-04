import React, { createContext } from 'react';
import ComA from '../src/ContextApi/ComA';

const FirstName = createContext();
const LastName = createContext();

const AppContextApi = () => {
  return (
    <>
    <FirstName.Provider value={"Mangesh"}>
     <LastName.Provider value={"Rajnale"}>
     <ComA />
     </LastName.Provider>
    </FirstName.Provider>
    </>
  )
 
}

export default AppContextApi;
export { FirstName, LastName };
