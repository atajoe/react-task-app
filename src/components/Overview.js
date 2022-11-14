import React from "react";
import '../App.css'


class Overview extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        const {message} = this.props;
        // const listOfTasks = message.map((item,i) => <div key={i}>Task item: {item}</div>)
        return (
            <div>
                {message.map((item,i) => <div key={i}>Task item: {item}</div>)}
            </div>
        )
    }
}


export default Overview;