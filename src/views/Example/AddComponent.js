import React from "react";

class AddComponent extends React.Component {

    state = {
        inc: '',
        salary: '',
    }

    handleChangeInc = (event) => {
        this.setState({
            inc: event.target.value
        })
    }
    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
        if (!this.state.inc || !this.state.salary) {
            alert('Missing required params')
            return;
        }
        this.props.addNewJob({
            id: Math.floor(Math.random() * 101),
            inc: this.state.inc,
            salary: this.state.salary,
        })
        this.setState({
            inc: '',
            salary: '',
        })
    }

    render() {
        return (
            <form>
                <label htmlFor="inc">Inc:</label>
                <br></br>
                <input type="text" value={this.state.inc} onChange={(event) => this.handleChangeInc(event)}></input>
                <br></br>
                <label htmlFor="salary">Salary:</label>
                <br></br>
                <input type="text" value={this.state.salary} onChange={(event) => this.handleChangeSalary(event)}></input>
                <br></br>
                <input type="submit" value="Submit" onClick={(event) => this.handleSubmit(event)}></input>
            </form>
        )
    }
}

export default AddComponent;