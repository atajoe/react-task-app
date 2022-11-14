import React from "react";
import '../App.css'


class Overview extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {message} = this.props;
        const listOfTasks = message.map((item,i) => <li key={i}>Task item: {item}</li>)
        // const listOfTasks = message.map((item,i) -> <div key={i}>Task item: {item}</div>)
        return (
            <div>
                <ul>
                {listOfTasks}
                </ul>
            </div>
        )
    }
}


export default Overview;