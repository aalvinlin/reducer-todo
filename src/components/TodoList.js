import React, { useState } from "react";
import ListItem from "./ListItem";

const TodoList = ({state}) => {

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
                <button onClick={() => dispatch(1, 2)}>Add</button>
            </form>

            <div className="listItems">

                {state.map(task => (

                    <ListItem item={task.item} completed={task.completed} key={"task" + task.id} />
                ))}

            </div>
            
        </div>
    )
}

export default TodoList;