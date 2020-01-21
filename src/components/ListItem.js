import React from "react";

const ListItem = ( {taskName} ) => {

    return (
        <div className="listItem">
            { taskName }
        </div>
    )
}

export default ListItem;