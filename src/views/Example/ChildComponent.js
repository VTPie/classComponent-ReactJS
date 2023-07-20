import React from "react";
import './style.scss'

//Class component - Statefull
class ChildComponent extends React.Component {

    state = {
        showJob: true,
    }

    handleShowHide = () => {
        this.setState({
            showJob: !this.state.showJob
        })
    }
    handleDeleteJob = (job) => {
        this.props.deleteJob(job)
    }

    render() {

        let { arrJobs } = this.props;
        let { showJob } = this.state;
        /*
        Tên biến trong object trên phải trùng với tên của key trong props.
        Nếu khác nhau thì phải đặt tên từng biến.
        let name = this.props.name; let age = this.props.age;
        Tương đương với
        let {name, age} = this.props
        */

        return (
            <>
                {
                    showJob === false
                        ?
                        <div>
                            <button onClick={() => this.handleShowHide()} className="btn">Show</button>
                        </div>
                        :
                        <>
                            <div className="job-lists">
                                {
                                    arrJobs.map((item, index) => {
                                        return (
                                            <div key={item.id}>
                                                {item.inc} - {item.salary}
                                                <span onClick={() => this.handleDeleteJob(item)}> x</span>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <div>
                                <button onClick={() => this.handleShowHide()}>Hide</button>
                            </div>
                        </>
                }
            </>
        )
    }
}

//Function Component - Stateless
// const ChildComponent = (props) => {
//     let { arrJobs } = props;
//     return (
//         <>
//             <div className="job-lists">
//                 {
//                     arrJobs.map((item, index) => {
//                         return (
//                             <div key={item.id}>
//                                 {item.inc} - {item.salary}
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </>
//     )
// }

export default ChildComponent;