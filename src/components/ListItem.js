import React from "react";

const ListItem = ( {item, completed, id, state, dispatch} ) => {

    return (
        <div className={"listItem" + ((completed) ? " taskCompleted" : "")}
            onClick={() => dispatch({ type: "TOGGLE_COMPLETION_STATUS", payload: id}) } >
            
            <p>
                { item } { completed ? " (completed)" : ""}
            </p>

            <p>
                <button onClick={(event) => { event.stopPropagation(); dispatch({ type: "DELETE_TASK", payload: id}) }}>X</button>
            </p>

        </div>
    )
}

export default ListItem;