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


    // We have to make the Counter component a controlled component because the value of counter must be maintained
    // at one place only. Figured this out while implementing reset functionality. Therefore, all of the event of count
    // will go to parent component and they will be called just like onDelete
    // state = { 
    //     // Changing variable name count -> value in order to maintain consistency.
    //     // Basically, the attributes defined in the parent component can be accessed in the child component using
    //     // this.props object
    //     value : this.props.counter.value,
    //     tags : ["tag1", "tag2", "tag3"]
    // };

    styles = {
        fontSize : 12,
        fontWeight : 'bold'
    };

    render() {
        return (
            <React.Fragment>
                {/* Accessing props in Child Component */}
                {/* <h2>Counter # {this.props.counter.id} </h2> */}
                <span
                style = { this.styles }
                className = { this.getBadgeClasses() }
                >
                    { this.formatCount() }
                </span>
                <button onClick = { () => this.props.onIncrement(this.props.counter) } className="btn btn-secondary btn-sm">Increment</button>
                {/* Passing the id to be deleted to parent component, as this entry needs to be deleted from 
                Counters.state.list */}
                <button onClick = { () => this.props.onDelete(this.props.counter.id) } className="btn btn-danger btn-sm m-2">Delete</button>
                <br />           
            </React.Fragment>
         );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    };

    formatCount() {
        const value = this.props.counter.value;
        return value === 0 ? 'Zero' : value;
    };
}
 
export default Counter;