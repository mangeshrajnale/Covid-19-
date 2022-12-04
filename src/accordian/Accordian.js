import React,{useState} from 'react'
import { questions } from './api'
import "./Accordian.css"
import "../node_n  "
import MyAccordian from './MyAccordian';

const Accordian = () => {
    const [data, setData] = useState(questions);
  return (
    <>
   <section className='main-div'>
    <h1>React Interview Question</h1>
   {
        data.map((curElem) =>{
            const {id, question, answer} = curElem;
           return <MyAccordian  key={id} {...curElem} />
        })
    }
   </section>
    </>
  )
}

export default Accordian;