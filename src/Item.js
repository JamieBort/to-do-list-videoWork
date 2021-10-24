import React from 'react';

function Item(props) {
    const method_2_array = [];
    console.log("props.list: ", props.list);
    // console.log("Object.keys(props.list): ", Object.keys(props.list));
    // console.log("Object.keys(props.list)[0]: ", Object.keys(props.list)[0]);

    for (var key in props.list) {
        method_2_array.push(props.list[key]);
    }

    const list = method_2_array.map((item, index) => {
        return (
            <li
                key={index}
            >
                {Object.keys(props.list)[(method_2_array.length + index) - method_2_array.length]}: {item}
            </li>)
    });
    
    return (
        <div>
            {list}
        </div>
    );
}

export default Item;