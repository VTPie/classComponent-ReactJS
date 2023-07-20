import React from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

class MyComponent extends React.Component {

    state = {
        arrJobs: [
            { id: '1', inc: 'Developer', salary: '2000' },
            { id: '2', inc: 'Manager', salary: '3000' },
            { id: '3', inc: 'Tester', salary: '1000' },
        ]
    }

    addNewJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob.push(job)
        this.setState({
            //Spread Syntax
            // arrJobs: [...this.state.arrJobs, job]
            arrJobs: currentJob
        })
    }
    deleteJob = (job) => {
        let currentJob = this.state.arrJobs
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs: currentJob
        })
    }

    render() {
        return (
            <>
                <p>Job List</p>
                <AddComponent addNewJob={this.addNewJob}></AddComponent>
                <ChildComponent arrJobs={this.state.arrJobs} deleteJob={this.deleteJob}></ChildComponent>
            </>
        )
    }
}
export default MyComponent;