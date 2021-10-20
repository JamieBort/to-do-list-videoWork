import React from 'react';

const todoList = [
  {
    ObjectID: 1,
    type: "Person",
    title: "Señor"
  },
  {
    ObjectID: 2,
    type: "vehicle",
    title: "automobile"
  },
  {
    ObjectID: 3,
    type: "home",
    title: "house"
  },
]

// *** The function can be outside of App() ***
// const todoListItems = todoList.map((item) =>
//     <li key={item.ObjectID}>{item.title}</li>
//   );

function App() {
  // *** The function can be inside of App() ***
  // const todoListItems = todoList.map((item) =>
  //   <li key={item.ObjectID}>{item.title}</li>
  // );

  return (
    <div>
      <h1>To-Do List</h1>
      <ul>
        {/* *** This is used for the todoListItems map function *** */}
        {/* {todoListItems} */}

        {/* *** this is used when the todoListItems map function isn't defined ahead of time. *** */}
        {todoList.map((item) => <li key={item.ObjectID}>{item.title}</li>)}
      </ul>
    </div>

  );
}

export default App;
