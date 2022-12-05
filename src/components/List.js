import React from "react";
import Render from "./Render";
import { useSelector } from "react-redux";

import styled from "styled-components";

function List() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <TodoBox>
      <div>
        <h2>Work</h2>
        <CardsBox>
          {todos.map((v) => {
            if (!v.done) {
              return (
                // <div key={v.id}>
                //   <Link to={`/${v.id}`}>
                //     <h3>{v.title}</h3>
                //   </Link>
                //   <span>{v.detail}</span>
                //   <button onClick={() => { changeDel(v.id) }}>Delete</button>
                //   <button onClick={() => { changeDone(v.id) }}>Complete</button>
                // </div>
                  <Render key={v.id} id={v.id} title={v.title} detail={v.detail} done={v.done} />
              )
            } else return null;
          })}
        </CardsBox>
      </div>
      <div>
        <h2>Done</h2>
        <CardsBox>
          {todos.map((v) => {
            if (v.done) {
              return (
                  <Render key={v.id} id={v.id} title={v.title} detail={v.detail} done={v.done} />
              )
            } else return null;
          })}
        </CardsBox>
      </div>
    </TodoBox>
  )
}

export default List;

const TodoBox = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const CardsBox = styled.div`
  height: 200px;
  width: auto;
  display: flex;
  gap: 20px;
  /* overflow: auto; */
  flex-wrap: wrap;
  overflow: auto;
  white-space:nowrap;
  grid-template-columns: 1fr 1fr 1fr;
`;