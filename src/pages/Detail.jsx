import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../redux/modules/todos";

import styled from "styled-components";

function Detail() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id))
  }, [dispatch, id])

  return (
    <DetailBox>
      <DetailHead>
      <div>ID : {id}</div>
      <Link to={"/"}> <BtnPrev>Prev</BtnPrev> </Link>
      </DetailHead>
      <DetailTitle>{todos.title}</DetailTitle>
      <span>{todos.detail}</span>
    </DetailBox>
  )
}

export default Detail;

const DetailBox = styled.div`
  width: 600px;
  height: 600px;
  margin: auto;
  text-align: center;
  box-shadow: 0 0px 15px 10px white;
  border-radius: 10px;
`;

const DetailHead = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
  padding: 25px;
  font-weight: bold;
`

const DetailTitle = styled.div`
  font-size: 24px;
  font-weight: bold;
  padding: 10px;
`
const BtnPrev = styled.button`
  font-size: 18px;
  font-weight:bold;
  border-radius: 10px;
  border: 0.5px solid white;
  background: none;
  font-size: 14px;
  width: 100px;
  height: 30px;
  color: white;
  cursor: pointer;
  &:hover{
    color: white;
    background: linear-gradient(180deg, black 0%, white);
    text-shadow: -5px 0px 5px white, 5px 0px 5px white;
    border: 2px solid white;
  }
`;