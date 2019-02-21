import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';
import './App.css';

class App extends Component {
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
        <React.Fragment>
            <NavBar 
                totalCounters = { this.state.counters.filter(c => c.value > 0).length }
            />
            <main className="container">
            <Counters
                counters = { this.state.counters }
                onReset = { this.handleReset }
                onIncrement = { this.handleIncrement }
                onDelete = { this.handleDelete }
            />
            </main>
        </React.Fragment>
        );
    }
}

export default App;
