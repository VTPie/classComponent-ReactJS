import React from "react";
import './ListUser.scss'
import { withRouter } from "react-router";
//Axios: giúp kết nối đến với BE hoặc các services.
import axios from "axios";
//Website fake request API: https://reqres.in/
class ListUser extends React.Component {
    state = {
        listUser: []
    }

    //Cách 1: promises
    // componentDidMount() {
    //     axios.get('https://reqres.in/api/users?page=1')
    //         .then(res => {
    //             console.log('>>>check res: ', res.data.data)
    //         })
    // }

    //Cách 2: async/await
    async componentDidMount() {
        let res = await axios.get('https://reqres.in/api/users?page=1')
        this.setState({
            listUser: res && res.data && res.data.data ? res.data.data : []
            //Nếu res, res.data, res.data.data tồn tại thì listUser: res.data.data; Ngược lại thì listUser: []
        })
    }

    handleDetailUser = (user) => {
        this.props.history.push(`/user/${user.id}`)
    }
    render() {
        let { listUser } = this.state;
        return (
            <div className="list-user-container">
                <div className="list-user-title">
                    User List
                </div>
                <table className="list-user-content">
                    <tr>
                        <th>No</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                    {listUser && listUser.length > 0 &&
                        listUser.map((item, index) => {
                            return (
                                <tr onClick={() => this.handleDetailUser(item)}>
                                    <td>{index + 1}</td>
                                    <td>{item.first_name}</td>
                                    <td>{item.last_name}</td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>
        )
    }
}
export default withRouter(ListUser)