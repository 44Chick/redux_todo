import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../redux/modules/todos";


function Detail() {
  const { id } = useParams();
  const todos = useSelector((state) => state.todos.todo);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getById(id))
  }, [dispatch, id])

  return (
    <div>
      Detail
      <h3>
        {todos.title}
      </h3>
      <span>
        {todos.detail}
      </span>
      <Link to={"/"}> prev </Link>
    </div>
  )
}

export default Detail;