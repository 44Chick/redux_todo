import React , {useState} from "react";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

function InputForm() {
  const initalTodo = {
    id: 0,
    title: '',
    detail: '',
    done: false,
  }
  const id = nextId();
  const dispatch = useDispatch();
  const [todo, setTodo] = useState(initalTodo);
  const changeInput = (e) => {
    const { name, value } = e.target;
    setTodo({ ...todo, [name]: value })
  }
  const submitInput = (e) => {
    console.log(id)
    e.preventDefault();
    dispatch(addTodo({ ...todo, id }))
    setTodo(initalTodo)
  }

  return (
    <form onSubmit={submitInput}>
      <input required type="text" name="title" value={todo.title} onChange={changeInput}></input>
      <input required type="text" name="detail" value={todo.detail} onChange={changeInput}></input>
      <button>Add</button>
    </form>
  )
}

export default InputForm;