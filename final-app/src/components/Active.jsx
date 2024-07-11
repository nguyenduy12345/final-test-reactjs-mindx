import {useCallback, useState}from 'react'
import Header from "/src/components/Header.jsx";

import './Active.css'
const Active = () => {
  const getCompleTed = localStorage.getItem("DONE") ? JSON.parse(localStorage.getItem("DONE")) : []
  const getToDoList = localStorage.getItem("TODO")
    ? JSON.parse(localStorage.getItem("TODO"))
    : [];
  const [toDo, setToDo] = useState(getToDoList);
  const [check, setCheck] = useState([])
  const changeInput = (e) => {
    e.preventDefault();
    setToDo([...toDo, e.target["0"].value]);
    localStorage.setItem(
      "TODO",
      JSON.stringify([...toDo, e.target["0"].value])
    );
  };
  const changeCheckItem = useCallback((item) => {
    setCheck(item)
    setCheck(item) 
    const getToDo = localStorage.getItem("TODO")
    ? JSON.parse(localStorage.getItem("TODO"))
    : [];
    const updateToDo = getToDo.filter(toDoItem => toDoItem != item)
    if(updateToDo && updateToDo.length > 0 ) {
      setToDo(updateToDo)
      localStorage.setItem(
        "TODO",
        JSON.stringify(updateToDo)
      );
    }else{
      setToDo([])
      localStorage.setItem(
        "TODO",
        JSON.stringify(updateToDo)
      );
    }
    const result = getCompleTed.findIndex(toDoItem => toDoItem == item)
    if(result > -1){
      return
    }else{
      localStorage.setItem("DONE", JSON.stringify([...getCompleTed, item]))
    }
    }, [check])
  return (
    <>
      <div className="todo">
        <div className="todo__title">#TODO</div>
        <Header />
        <div className="todo__input">
          <form onSubmit={changeInput}>
            <input type="text" placeholder='add-details'  ></input>
            <button>Add</button>
          </form>
        </div>
        <ul className="todo__item">
          {toDo.map((item, index) => (
            <li key={index}>
              <input type="checkbox" onClick={() =>changeCheckItem(item)}/>
              <label>{item}</label>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Active
