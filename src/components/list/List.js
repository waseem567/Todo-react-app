import { useState } from "react";
import Todo from "./Todo";

const List = (props) => {
    const [done, setDone] = useState([]);

    // on click todo
    function onTodoClickHandler(index) {
        props.onDoneTodo(index);
        setDone((prev) => props.todos.filter(t => t.done === true));
    };
    // onedit props 
    const todoEditHandler = (index) => {
        props.onEditTodo(index);
    };
    // on clear all handler
    const onClearAllHandler = () => {
        props.onClearAllTodos();
    };
    return <div className="bg-card rounded-md p-5">
        <div className="flex justify-start items-center gap-5 py-5 border-b border-gray-800">
            <p className="flex justify-center items-center">All <span className="flex justify-center items-center px-1 bg-blue-700 text-white rounded min-h-[25px] min-w-[25px] ml-3">{props.todos !== null && props.todos.length > 0 ? props.todos.length - done.length : 0}</span></p>
            <p className="flex justify-center items-center">Done <span className="flex justify-center items-center px-1 bg-blue-700 text-white rounded min-h-[25px] min-w-[25px] ml-3">{done !== null && props.todos.length > 0 ? done.length : 0}</span></p>
            <div className="ml-auto"><button className="bg-red-600 py-1 px-2 rounded hover:opacity-90" onClick={onClearAllHandler}>Clear All</button></div>
        </div>
        {props.todos !== null ?  props.todos.map((todo, i) => {
            return <div>
                <Todo  key={Math.random()} todo={todo} index={i} onDone={onTodoClickHandler} onEdit={todoEditHandler}/></div>
        }) : <h1 className="text-white font-extrabold text-center py-5">No Todo Created!</h1>}

    </div>
};

export default List;