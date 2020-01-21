import React from "react";

const ListItem = ( {item, completed} ) => {

    console.log(item, completed)

    return (
        <div className="listItem">
            { item } { completed }
        </div>
    )
}

export default ListItem;