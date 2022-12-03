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


// style
const FormBox = styled.form`
  display: flex;
  padding: 20px;
  border-radius: 10px;
  background-color: none;
  justify-content: space-between;
  box-shadow: 0 10px 25px 0 rgba(100, 225, 255, 0.5);
`;

const InputBox = styled.div`
  display: flex;
  gap: 20px;
  font-size: 16px;
`;

const TextBox = styled.input`
  font-size: 16px;
  padding: 5px;
  border-radius: 10px;
  border: none;
  background-color: black;
  box-shadow: 0 10px 25px 0 rgba(255, 220, 100, 0.5);
  color: white;
`;

const AddButton = styled.button`
  width: 120px;
  height: 30px;
  justify-content: flex-end;
  border-radius: 10px;
  border: 5px solid ;
  background-color: black;
  color: white;
  &:hover{
    background-color: white;
    color: black;
  }
`;
