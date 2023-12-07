import { useState } from "react";
import "./Todo.css";
const Todo = (props) => {
    const [strike, setStrike] = useState(false);
    // on todo click
    const onClickHandler = () => {
        console.log("click on")
        props.onDone(props.index);
        setStrike(true);
    };
    // todo edit handler
     const onEditTodoHandler = (event) => {
        event.stopPropagation();
         props.onEdit(props.index);   
     };
    return <div onClick={onClickHandler} className={`relative bg-todo ${strike && "line-through"} px-3 py-5 shadow-xl cursor-pointer my-3`}>
        <h1 className={`${strike && "line-through"} font-bold`}>{props.todo.heading}</h1>
        <p>{props.todo.details}</p>
        <span className="text-white block text-right"><i className="fa-regular fa-pen-to-square" onClick={onEditTodoHandler}></i></span>
    </div>
};

export default Todo;