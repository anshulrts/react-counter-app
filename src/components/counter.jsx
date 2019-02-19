import React, { Component } from 'react';

class Counter extends Component {

    // When we call onClick event from render(), we cannot directly refer to 'this' object of Counter class from inside of
    // handleIncrement(). There are 2 ways of handling it :-
    // 1. Use bind() in the constructor
    // 2. Use arrow function. It doesn't lose the scope of this. This way is preferred.
    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    state = { 
        count : 0,
        tags : ["tag1", "tag2", "tag3"]
    };

    styles = {
        fontSize : 12,
        fontWeight : 'bold'
    };

    handleIncrement = product => {
        // We do not directly increase the count object of Counter class.
        // Doing so would not increase the count on UI as React VirtualDOM is not informed about the increment.
        // this.state.count++;

        // We have to call setState() of React in order to inform VirtualDOM about the increase in counter
        // While calling it, we pass a new object which replaces the state {}
        this.setState( {count : this.state.count + 1 } )
        console.log(product);
    };

    render() { 
        return (
            <React.Fragment>
                <span style = { this.styles } className = { this.getBadgeClasses() }> { this.formatCount() }</span>
                <button onClick = { () => this.handleIncrement({id : 1}) } className="btn btn-secondary btn-sm">Increment</button>           
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