import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delTodo, doneTodo } from "../redux/modules/todos";


function Render({ id, title, detail, done }) {
  const dispatch = useDispatch();
  const changeDel = (id) => {
    dispatch(delTodo(id));
  };
  const changeDone = (id) => {
    dispatch(doneTodo(id))
  };
  
  return (
    <div>
      <Link to={`/${id}`}>
        <h3>{title}</h3>
      </Link>
      <span>{detail}</span>
      <button onClick={() => { changeDel(id) }}>Delete</button>
      <button onClick={() => { changeDone(id) }}>{
        done? "Cancel" : "Complete" 
      }</button>
    </div>
  )
}

export default Render;