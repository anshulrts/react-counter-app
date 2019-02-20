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
    }

    // In order to implement delete button functionality, we have to delete the counter from the state of Counters component
    // Therefore, on the click of delete button, we will raise an onDelete Event from the Counter component and pass the id to be
    // deleted
    handleDelete = counterId => {
        console.log('Event Delete called.', counterId);
        const counters = this.state.counters.filter(row => row.id != counterId);
        this.setState({ counters });
    }
    
    render() { 
        return (
            <div>
                <button onClick = {this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button><br />
                { this.state.counters.map(
                    // All of the attributes of <Counter ... /> will be available in the Child component using this.props
                    // But we can also associate child property to props in between <Counter>...</Counter>
                    counter =>
                    <Counter key={ counter.id } onDelete = { this.handleDelete } counter = { counter } />
                    )
                }
            </div>
        );
    }
}
 
export default Counters;