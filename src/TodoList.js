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
            <ul>
                {todoListItems}
            </ul>
        </div>
    );
}

export default TodoList;