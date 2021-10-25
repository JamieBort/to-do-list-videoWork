import React from 'react';

function AddTodoForm(props) {
    // const [searchTerm, setSearchTerm] = React.useState('your search term.');
    const handleChange = (event) => {
        // console.log(event["nativeEvent"]["data"]); // commented out - for now. Need to focus on the output...
        // console.log(event.target.value);
        // setSearchTerm(event.target.value);
        props.onSearch(event);
    }
    
    return (
        <div>
            <form>
                <label>Title: </label>
                <input
                    id="todoTitle"
                    htmlFor="todoTitle"
                    onChange={handleChange}
                >
                </input>
                <button>Add</button>
                <p>Searching for <strong>{props.searchTerm}</strong></p>
            </form>
        </div>
    );
}

export default AddTodoForm;