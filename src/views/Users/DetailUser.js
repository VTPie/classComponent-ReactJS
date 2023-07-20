import React from "react";
import { withRouter } from "react-router";
import axios from "axios";

class DetailUser extends React.Component {
    state = {
        user: {}
    }
    async componentDidMount() {
        if (this.props.match && this.props.match.params) {
            let id = this.props.match.params.id
            let res = await axios.get(`https://reqres.in/api/users/${id}`)
            this.setState({
                user: res && res.data.data ? res.data.data : {}
            })
        }
    }
    handleBack = () => {
        this.props.history.push('/user')
    }
    render() {
        let { user } = this.state
        let isEmptyObj = Object.keys(user).length === 0
        return (
            <div>
                This is Detail User component with id: {this.props.match.params.id}
                {
                    isEmptyObj === false &&
                    <div>
                        <p>User 's name: {user.first_name} {user.last_name}</p>
                        <p>User 's email: {user.email}</p>
                        <img src={user.avatar}></img>
                        <div>
                            <button type="button" onClick={() => this.handleBack()}>Back</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default withRouter(DetailUser)