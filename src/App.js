import './App.css';
import Form from './components/form/Form';
import Button from './components/button/Button';
import List from './components/list/List';
import EditForm from './components/form/EditForm';
import { useEffect, useState } from 'react';


function App() {
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todo_app')));
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState({
    isEdit: false,
    todo:{},
    index: null
  });
  // effect to set and retrieve todos from localStorage
  useEffect(()=>{
    const storedArray = JSON.parse(localStorage.getItem('todo_app'));
    if (storedArray) {
      setTodos(storedArray);
    }
  }, []);
  useEffect(()=> {
    localStorage.setItem("todo_app", JSON.stringify(todos));
  }, [todos])
  // form toggler
  const showAddFormHandler = (show) => {
    if(edit.isEdit){
      return;
    }else{
      setShow(show);
    };
    
  };
  // new todo add handler
  const addNewTodoHandler = (todo) => {
    setTodos(prevTodos => {
      if(prevTodos){
        return [...prevTodos, todo]
      } 
      else{
       return [todo];
      } 
    })
  };
  // mark as done handler
  const onDoneTodoHandler = (index) => {
    todos[index].done = true;
  }; 
  // edit handler
  const todoEditHandler = (index) => {
    const editAbleTodo = todos[0];
    setEdit(prev => {
      return {isEdit : true, todo : editAbleTodo, index:index}
    })
 
  };
   //  on edit todo
   const editTodoHandler = (todo) => {
    // destructuring just to not mutate existing but to return new state 
    const newTodos = [...todos];
    console.log(newTodos);
    newTodos[todo.index] = {
      heading: todo.heading,
      details: todo.details,
    }
    setTodos(prevTodo => [...newTodos]);
    setEdit(prev => {
      return {
        isEdit: false,
        todo: {},
        index: null
      };
    })
   };
  //  clearing all handler
  const onClearAllTodosHandler = () => {
    localStorage.clear();
    const emptyArr = [];
    setTodos(prev => [...emptyArr]);
  };
  return (
   <div className='container p-2 mx-auto sm:w-[70%] md:w-[65%] lg:w-[700px]'> 
      <Button showAddForm={showAddFormHandler} buttonTextToggle={edit.isEdit}/>
      {show && !edit.isEdit && <Form addNewTodo={addNewTodoHandler}/>}
      {edit.isEdit && <EditForm editTodo={editTodoHandler} edit={edit}/>}
      <List todos={todos} onDoneTodo={onDoneTodoHandler} onEditTodo={todoEditHandler} onClearAllTodos={onClearAllTodosHandler}/>
    </div>
  )
};

export default App;
