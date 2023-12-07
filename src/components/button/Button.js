import { useState } from "react";

const Button = (props) => {
  const [showForm , setShowForm] = useState(false);
  const showFormHandler =()=> {
    if(props.buttonTextToggle){
      return;
    }
    setShowForm(prev => {
      return !showForm;
    });
  };
  props.showAddForm(showForm);
    return <div className="text-center py-2" onClick={showFormHandler}>
    <button className="cursor-pointer bg-btn hover:opacity-80 py-2 px-4 rounded-lg shadow text-white font-medium">{showForm ? "HIDE FORM" : "SHOW FORM"}</button>
  </div>
};
export default Button;