import { useState } from "react";
import Header from "/src/components/Header.jsx";

import "./Completed.css";

const Completed = () => {
  const getCompleTed = localStorage.getItem("DONE") ? JSON.parse(localStorage.getItem("DONE")) : []
  const [itemDone, setItemDone] = useState(getCompleTed)
  const deleteItem = (data) =>{
    const result = itemDone.filter(item => item != data)
    setItemDone(result)
    localStorage.setItem("DONE", JSON.stringify(result))
  }
  const deleteAll = () => {
    localStorage.removeItem("DONE")
    setItemDone([])
  }
  return ( 
    <>
      <div className="todo">
        <div className="todo__title">#TODO</div>
        <Header />
        <ul className="todo__done">
          {itemDone && itemDone.map((item, index) =>(
            <li key={index}>
            <input  type="checkbox" />
            <label>{item}</label>
            <i onClick={() => deleteItem(item)} className="icon__delete fa-regular fa-square-minus"></i>
          </li>
          ))}
          <button onClick={deleteAll}>delete all <i className="fa-regular fa-square-minus"></i></button>
        </ul>
      </div>
    </>
  );
};

export default Completed;
