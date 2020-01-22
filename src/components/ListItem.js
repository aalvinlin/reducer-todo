import React from "react";

const ListItem = ( {item, completed, state, dispatch} ) => {

    return (
        <div className={"listItem" + ((completed) ? " taskCompleted" : "")}
            onClick={() => dispatch({ type: "TOGGLE_COMPLETION_STATUS", payload: item}) } >
            
            <p>
                { item } { completed ? " (completed)" : ""}
            </p>

            <p>
                <button onClick={(event) => { event.stopPropagation(); dispatch({ type: "DELETE_TASK", payload: item}) }}>X</button>
            </p>

        </div>
    )
}

export default ListItem;