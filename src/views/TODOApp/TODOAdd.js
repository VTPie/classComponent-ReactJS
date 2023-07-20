import React from "react";
import { toast } from "react-toastify";
import './TODOList.scss'

class TODOAdd extends React.Component {
    state = {
        title: ''
    }

    handleChangeTitle = (event) => {
        this.setState({
            title: event.target.value
        })
    }

    handleAddNewTODO = () => {
        if (!this.state.title) {
            toast.error('Missing required param!')
            return
        }
        let todo = {
            id: Math.floor(Math.random() * 101),
            title: this.state.title
        }
        this.props.addNewTODO(todo)
        toast.success("Add new TODO succeed")
        this.setState({
            title: ''
        })

    }

    render() {
        //Destructuring object
        let { title } = this.state
        return (
            <div className="add-todo">
                <input value={title} onChange={(event) => this.handleChangeTitle(event)}></input>
                <button className="btnAdd" onClick={() => this.handleAddNewTODO()}>Add</button>
            </div>
        )
    }
}
export default TODOAdd