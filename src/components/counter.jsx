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
        // Changing variable name count -> value in order to maintain consistency.
        // Basically, the attributes defined in the parent component can be accessed in the child component using
        // this.props object
        value : this.props.value,
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
        this.setState( {value : this.state.value + 1 } )
    };

    render() {
        console.log(this.props);
        return (
            <React.Fragment>
                {/* Accessing props in Child Component */}
                {/* <h2>Counter # {this.props.id} </h2> */}
                <span style = { this.styles } className = { this.getBadgeClasses() }> { this.formatCount() }</span>
                <button onClick = { () => this.handleIncrement({id : 1}) } className="btn btn-secondary btn-sm">Increment</button>
                <br />           
            </React.Fragment>
         );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
}
 
export default Counter;