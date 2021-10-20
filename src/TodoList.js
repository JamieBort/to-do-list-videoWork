// Inside /src directory, create a new file called TodoList.js
//  Open /src/TodoList.js
//  Create a new functional React component (see below)
//  Import React from "react" npm package
//  Declare a function named TodoList
//  Export TodoList function as default module
//  Add a multi-line return statement to your TodoList function (this is where we will insert JSX)
// hint: use parenthesis for multi-line return
//  Move list JSX from App.js to TodoList.js (see below)
//  Open /src/App.js
//  Cut (copy and remove) the entire list element (<ul>) code
//  Open /src/TodoList.js
//  Inside the multi-line return, paste the list element (<ul>) code

import React from 'react';

const todoList = [
    {
        ObjectID: 1,
        author: "James",
        type: "hard cover",
        isbn: 3323420,
        title: "Señor"
    },
    {
        ObjectID: 2,
        author: "Jackson",
        type: "soft cover",
        isbn: 3483420,
        title: "automobile"
    },
    {
        ObjectID: 3,
        author: "Dwight",
        type: "hard cover",
        isbn: 3322345230,
        title: "house"
    },
]

const todoListItems = todoList.map((item) =>
    <li key={item.ObjectID}>
        {item.type}
        <ul>
            <li>{item.isbn}</li>
            <li>{item.title}</li>
        </ul>
    </li>
);

function TodoList() {
    return (
        <div>
            <h1>To-Do List</h1>
            <ul>
                {todoListItems}
            </ul>
        </div>
    );
}

export default TodoList;