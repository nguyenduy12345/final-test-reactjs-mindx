import {useCallback, useState}from 'react'
import Header from "/src/components/Header.jsx";

import './Active.css'
const Active = () => {
  const getCompleTed = localStorage.getItem("DONE") ? JSON.parse(localStorage.getItem("DONE")) : []
  const getToDo = localStorage.getItem("TODO")
    ? JSON.parse(localStorage.getItem("TODO"))
    : [];
  const [todo, setToDo] = useState(getToDo);
  const [check, setCheck] = useState([])
  const changeInput = (e) => {
    e.preventDefault();
    setToDo([...todo, e.target["0"].value]);
    localStorage.setItem(
      "TODO",
      JSON.stringify([...todo, e.target["0"].value])
    );
  };
  const changeCheckItem = useCallback((item) => {
    setCheck(item)
    const result = getCompleTed.findIndex(todoItem => todoItem == item)
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
          {todo.map((item, index) => (
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
