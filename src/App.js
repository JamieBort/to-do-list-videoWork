import React from 'react';

const todoList = [
  {
    id: 1,
    title: "Complete assignment"
  },
  {
    id: 2,
    title: "Random title"
  },
  {
    id: 3,
    title: "Parts list"},
]

function App() {
  const todoListItems = todoList.map((item) =>
  <li key={item.id}>{item.title}</li>
);

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
      {todoListItems}
      {/* {listItems} */}
      </ul>
    </div>

    );
}

export default App;
