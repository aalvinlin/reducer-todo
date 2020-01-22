import React, { useState } from "react";
import ListItem from "./ListItem";

const TodoList = ({state, dispatch}) => {

    const [userInput, setUserInput] = useState("");

    const handleInput = (event) => {

        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {

        event.preventDefault();
    }

    return (
        <div className="todoListContainer">
            <h1>Todo List</h1>
            <form name="todoList" onSubmit={handleSubmit}>

                <input type="text" value={userInput} placeholder="New task" onChange={handleInput} />
                <button onClick={() => dispatch({type: "ADD_TASK", payload: userInput})}>Add</button>
            </form>

            <div className="listItems">

                {state.map(task => (

                    <ListItem key={"task" + task.id} item={task.item} completed={task.completed} id={task.id} state={state} dispatch={dispatch} />
                ))}

            </div>
            
        </div>
    )
}

export default TodoList;