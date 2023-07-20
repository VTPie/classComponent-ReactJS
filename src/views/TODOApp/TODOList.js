import React from "react"
import TODOAdd from "./TODOAdd"
import { toast } from "react-toastify"
import './TODOList.scss'

class TODOList extends React.Component {
    state = {
        todolist: [
            { id: '1', title: 'Eat' },
            { id: '2', title: 'Sleep' },
            { id: '3', title: 'Code' },
        ],
        edittodo: {}
    }

    handleEditTODO = (todo) => {
        let { todolist, edittodo } = this.state
        let isEmptyObj = Object.keys(edittodo).length === 0
        if (isEmptyObj === false && edittodo.id === todo.id) {
            let todolistCopy = todolist
            let objIndex = todolistCopy.findIndex((item => item.id === todo.id))
            todolistCopy[objIndex].title = edittodo.title
            this.setState({
                todolist: todolistCopy,
                edittodo: {}
            })
            toast.success("Edit TODO succeed")
            return
        }
        this.setState({
            edittodo: todo
        })
    }

    handleChangeEditTODO = (event) => {
        let edittodoCopy = this.state.edittodo
        edittodoCopy.title = event.target.value
        console.log(edittodoCopy)
        this.setState({
            edittodo: edittodoCopy
        })
    }

    addNewTODO = (todo) => {
        let newlist = this.state.todolist
        newlist.push(todo)
        this.setState({
            todolist: newlist
        })
    }

    handleDeleteTODO = (todo) => {
        // let newlist = this.state.todolist.filter((item) => item.id != todo.id)
        let newlist = this.state.todolist
        newlist = newlist.filter((item) => item.id !== todo.id)
        this.setState({
            todolist: newlist
        })
        toast.success("Delete TODO succeed")
    }

    render() {
        //Destructuring object
        let { todolist, edittodo } = this.state
        let isEmptyObj = Object.keys(edittodo).length === 0
        return (
            <div className="list-todo-container">
                <p>ToDo List</p>
                <TODOAdd addNewTODO={this.addNewTODO}></TODOAdd>
                <div className="list-todo-content">
                    {todolist.map((item, index) => {
                        return (
                            <div className="todo-child">
                                {isEmptyObj === false && edittodo.id === item.id
                                    ?
                                    <span>
                                        {index + 1} - <input value={edittodo.title} onChange={(event) => this.handleChangeEditTODO(event)}></input>
                                    </span>
                                    :
                                    <span>{index + 1} - {item.title}</span>
                                }

                                <button className="btnEdit" onClick={() => this.handleEditTODO(item)}>
                                    {isEmptyObj === false && edittodo.id === item.id
                                        ?
                                        'Save'
                                        :
                                        'Edit'
                                    }
                                </button>
                                <button onClick={() => this.handleDeleteTODO(item)}>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}
export default TODOList