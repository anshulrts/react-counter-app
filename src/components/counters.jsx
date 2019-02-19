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
    render() { 
        return (
            <div>
                { this.state.counters.map(
                    // All of the attributes of <Counter ... /> will be available in the Child component using this.props
                    // But we can also associate child property to props in between <Counter>...</Counter>
                    // Here, we are setting it to
                    counter =>
                    <Counter key={ counter.id } value = { counter.value } id = { counter.id }>
                        <h2>Title</h2>
                    </Counter>
                    )
                }
            </div>
        );
    }
}
 
export default Counters;