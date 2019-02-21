import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        return (
            <div>
                <button onClick = {this.props.onReset} className="btn btn-primary btn-sm m-2">Reset</button><br />
                { this.props.counters.map(
                    // All of the attributes of <Counter ... /> will be available in the Child component using this.props
                    // But we can also associate child property to props in between <Counter>...</Counter>
                    counter =>
                    <Counter
                        key={ counter.id }
                        onIncrement = { this.props.onIncrement }
                        onDelete = { this.props.onDelete }
                        counter = { counter }
                    />
                    )
                }
            </div>
        );
    }
}
 
export default Counters;