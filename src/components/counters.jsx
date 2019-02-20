import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = { 
        counters : [
            {id : 1, value : 4},
            {id : 2, value : 0},
            {id : 3, value : 0},
            {id : 4, value : 0}
        ]
     };


    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters });
    }

    // In order to implement delete button functionality, we have to delete the counter from the state of Counters component
    // Therefore, on the click of delete button, we will raise an onDelete Event from the Counter component and pass the id to be
    // deleted
    handleDelete = counterId => {
        console.log('Event Delete called.', counterId);
        const counters = this.state.counters.filter(row => row.id != counterId);
        this.setState({ counters });
    }

    handleIncrement = counter => {
        // We do not directly increase the count object of Counter class.
        // Doing so would not increase the count on UI as React VirtualDOM is not informed about the increment.
        // this.state.count++;

        // We have to call setState() of React in order to inform VirtualDOM about the increase in counter
        // While calling it, we pass a new object which replaces the state {} 
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState( { counters } )
    };
    
    render() { 
        return (
            <div>
                <button onClick = {this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button><br />
                { this.state.counters.map(
                    // All of the attributes of <Counter ... /> will be available in the Child component using this.props
                    // But we can also associate child property to props in between <Counter>...</Counter>
                    counter =>
                    <Counter
                    key={ counter.id }
                    onIncrement = { this.handleIncrement }
                    onDelete = { this.handleDelete }
                    counter = { counter }
                    getBadgeClasses = { this.getBadgeClasses }
                    formatCount = { this.formatCount }
                    />
                    )
                }
            </div>
        );
    }
}
 
export default Counters;