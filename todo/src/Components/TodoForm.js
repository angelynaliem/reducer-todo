import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super()
        this.state = {
            item: ""
        }
    }

    handleInputChange = e => {
        this.setState( { [e.target.name]: e.target.value } )
    }

    submitForm = e => {
        e.preventDefault();
        this.setState( { item: " " } )
        this.props.addTodoItem(e, this.state.item)
    }

    render() {
       
        return (
            <div className="formDiv">
            <form onSubmit={this.submitForm}>
                <input htmlFor = "item"
                id = "item"
                name = "item"
                type = "text"
                value = {this.state.item}
                onChange = {this.handleInputChange}
                className="inputStyle"
                />
                <button>+</button>
                
            </form>
            </div>
        )
    }
}

export default TodoForm;