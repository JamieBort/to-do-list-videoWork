import React from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const todoList = [
  {
    ObjectID: 1,
    author: "James",
    number_of_pages: 74,
    type: "hard cover",
    isbn: 3323420,
    title: "Señor"
  },
  {
    ObjectID: 2,
    author: "Jackson",
    number_of_pages: 102,
    type: "soft cover",
    isbn: 3483420,
    title: "automobile"
  },
  {
    ObjectID: 3,
    author: "Dwight",
    number_of_pages: 12,
    type: "hard cover",
    isbn: 3322345230,
    title: "house"
  },
]
console.log("The list: ", todoList);


function App() {
  const [searchTerm, setSearchTerm] = React.useState('your search term.');
  const handleSearch = (event) => {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  const searched = todoList.filter(function (term){
    return term.title.includes(searchTerm);
  })

  return (
    <div>
      <h1>To-Do List</h1>
      <AddTodoForm onSearch={handleSearch} searchTerm={searchTerm} />
      {/* <TodoList list={todoList} /> */}
      <TodoList list={searched} />
    </div>
  );
}

export default App;
