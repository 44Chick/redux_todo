import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { delTodo, doneTodo } from "../redux/modules/todos";

import styled from "styled-components";

function Render({ id, title, detail, done }) {
  const dispatch = useDispatch();
  const changeDel = (id) => {
    dispatch(delTodo(id));
  };
  const changeDone = (id) => {
    dispatch(doneTodo(id))
  };

  return (
    <Cards cardColor= {done? color[0] : color[3]}>
      <Link
        style={{ textDecoration: "none" }}
        to={`/${id}`}>
        <CardTitle>{title}</CardTitle>
      </Link>
      <span>{detail}</span>
      <BtnSet>
        <StBtn mainColor={color[2]} onClick={() => { changeDel(id) }}>Delete</StBtn>
        <StBtn mainColor={color[1]} onClick={() => { changeDone(id) }}>{
          done ? "Cancel" : "Complete"
        }</StBtn>
      </BtnSet>
    </Cards>
  )
}

export default Render;

const color = [
  'rgba(100, 225, 255, 0.8)',
  'rgba(50, 225, 50)',
  'rgba(255, 50, 50)',
  'rgba(255, 225, 100, 0.8)',
]

const CardTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
  color: white;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover{
    text-shadow: 5px 5px 5px ${color[0]}, -5px -5px 5px ${color[0]};
    ;
  }
`;

const Cards = styled.div`
  box-shadow: 0px 0px 15px 15px ${(props)=> props.cardColor};
  min-width: 275px;
  max-width: 275px;
  height: 120px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 20px; 
  overflow: hidden;
  text-overflow: ellipsis;
  margin: 20px;
`;

const BtnSet = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 20px;
  gap: 20px;
`;

const StBtn = styled.button`
  font-weight:bold;
  border-radius: 10px;
  border: 0.5px solid ${(props) => props.mainColor};
  background: linear-gradient(180deg, black 75%, ${(props) => props.mainColor} );
  font-size: 14px;
  width: 120px;
  height: 40px;
  color: white;
  cursor: pointer;
  &:hover{
    color: white;
    background: linear-gradient(180deg, black -50%, ${(props) => props.mainColor} );
    text-shadow: -5px 0px 5px white, 5px 0px 5px white;
    border: 2px solid ${(props) => props.mainColor};
  }
`;