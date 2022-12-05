import React, { useState } from "react";
import nextId from "react-id-generator";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/modules/todos";

import styled from "styled-components";

function InputForm() {
  // initial value
  const initalTodo = {
    id: 0,
    title: '',
    detail: '',
    done: false,
  }

  // origin ID value
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
    <FormBox onSubmit={submitInput}>
      <InputBox>
        <div>제목</div>
        <TextBox required type="text" name="title" value={todo.title} onChange={changeInput}></TextBox>
        <div>내용</div>
        <TextBox required type="text" name="detail" value={todo.detail} onChange={changeInput}></TextBox>
      </InputBox>
      <AddButton>Add</AddButton>
    </FormBox>
  )
}

export default InputForm;

// color pallet
const color = [
  'rgba(100, 225, 255, 0.8)',
  'rgba(255, 220, 100, 0.8)'
]


// style
const FormBox = styled.form`
  display: flex;
  padding: 20px;
  border-radius: 10px;
  background-color: none;
  justify-content: space-between;
  box-shadow: 0 0px 15px 10px ${color[0]};
`;

const InputBox = styled.div`
  display: flex;
  gap: 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  align-items: center;
`;

const TextBox = styled.input`
  font-size: 16px;
  padding: 5px;
  border-radius: 10px;
  border: none;
  background-color: black;
  box-shadow: 0 0px 10px 5px ${color[1]};
  height: 30px;
  color: white;
`;

const AddButton = styled.button`
  font-weight:bold;
  border-radius: 10px;
  border: 0.5px solid ${color[1]};
  background: linear-gradient(180deg, black 75%, ${color[1]});
  font-size: 14px;
  width: 120px;
  /* height: 40px; */
  color: white;
  cursor: pointer;
  &:hover{
    color: white;
    background: linear-gradient(180deg, black 0%, ${color[1]});
    text-shadow: -5px 0px 5px white, 5px 0px 5px white;
    border: 2px solid ${color[1]};
  }
`;
