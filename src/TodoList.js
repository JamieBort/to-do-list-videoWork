import React from 'react';
import Item from './Item';

function TodoList(props) {
    // console.log(typeof(props.list))
    const todoList = props.list.map((list) =>
        <li key={list.ObjectID}>
            {list.title}
            <ul>
                <Item list={list} />
            </ul>
        </li>
    );
    return (
        <div>
            <ul>
                {todoList}
                {/* {props.list} */}
            </ul>
        </div>
    );
}

export default TodoList;