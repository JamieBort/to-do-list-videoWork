import React from 'react';

// function Search(){
//     const handleChange = (event) => console.log(event);
// }

function AddTodoForm() {
    // const handleChange = (event) => console.log(event); // commented out - for now. Need to focus on the output...
    // const handleMouseOver = (event) => console.log(event); // commented out - for now. Need to focus on the output...
    return (
        <div>
            <form>
                <label>Title: </label>
                <input
                    id="todoTitle"
                    htmlFor="todoTitle"
                    // onChange={handleChange}
                    // onMouseOver={handleMouseOver}
                    >
                    </input>
                <button>Add</button>
            </form>
        </div>
    );
}

export default AddTodoForm;