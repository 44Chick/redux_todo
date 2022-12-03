import React from "react";
import Render from "./Render";
import { useSelector } from "react-redux";

function List() {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      <div>
        <h2>Work</h2>
        <div>
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
                <Render key={v.id} id={v.id} title={v.title} detail={v.detail} done={v.done}/>
              )
            } else return null;
          })}
        </div>
      </div>
      <div>
        <h2>Done</h2>
        <div>
          {todos.map((v) => {
            if (v.done) {
              return (
                <Render key={v.id} id={v.id} title={v.title} detail={v.detail} done={v.done}/>
              )
            } else return null;
          })}
        </div>
      </div>
    </div>
  )
}

export default List;