const initialState = {
  todos: [
    {
      id: '1',
      title: 'test title',
      detail: 'test detail. this is sentence.',
      done: false,
    }, {
      id: '2',
      title: 'test title',
      detail: 'test detail. this is sentence.',
      done: false,
    },],
  todo: {
    id: '0',
    title: "",
    detail: "",
    done: false,
  }
}

// action value
const GET_BY_ID = "GET_BY_ID";
const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const DONE_TODO = "DONE_TODO";


// action creator
export const getById = (payload) => {
  return {
    type: GET_BY_ID,
    payload,
  }
};
export const addTodo = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  }
};
export const delTodo = (payload) => {
  return {
    type: DEL_TODO,
    payload,
  }
};
export const doneTodo = (payload) => {
  return {
    type: DONE_TODO,
    payload,
  }
}



const todos = (state = initialState, action) => {
  switch (action.type) {
    case GET_BY_ID:
      return {
        ...state,
        todo: state.todos.find((v) => {
          return v.id === action.payload;
        })
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };

    case DEL_TODO:
      return {
        ...state,
        todos: state.todos.filter((v) => v.id !== action.payload),
      };

    case DONE_TODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              done: !todo.done,
            };
          } else {
            return todo;
          }
        }),
      };

    default:
      return state;
  }
}

export default todos;