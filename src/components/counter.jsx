import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0,
        tags : ["tag1", "tag2", "tag3"]
    };

    styles = {
        fontSize : 12,
        fontWeight : 'bold'
    };

    handleIncrement() {
        console.log("handleIncrement", this);
    }

    render() { 
        return ( 
            <React.Fragment>
                <span style = { this.styles } className = { this.getBadgeClasses() }> { this.formatCount() }</span>
                <button onClick = {this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>           
            </React.Fragment>
         );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;