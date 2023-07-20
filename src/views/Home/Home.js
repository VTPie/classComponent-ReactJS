import React from "react";
import '../App.scss'
import logo from '../logo.svg';
import { withRouter } from "react-router";
import Color from "../HOC/Color";
import { connect } from "react-redux";

class Home extends React.Component {
    // componentDidMount() {
    //     setTimeout(() => {
    //         this.props.history.push('/todo')
    //     }, 3000)
    // }

    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user);
    }
    handleAddUser = () => {
        this.props.addUserRedux()
    }

    render() {
        let listUser = this.props.dataRedux
        return (
            <div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Simple React App
                </p>
                <div>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <div key={item.id}>
                                    {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>x</span>
                                </div>
                            )
                        })
                    }
                    <button onClick={() => this.handleAddUser()}>Add</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteUserRedux: (userDelete) => dispatch({ type: 'DELETE_USER', payload: userDelete }),
        addUserRedux: () => dispatch({ type: 'ADD_USER' })
    }
}

//HOC: Higher Order Component
// export default withRouter(Home)
export default connect(mapStateToProps, mapDispatchToProps)(Color(Home))
// Color => Gọi biến Color đã khởi tạo.
// Color() => Gọi Expression Function ứng với biến Color đã khởi tạo.
// connect(): Giúp React và Redux connect với nhau trong component Home.