import React, { Component } from 'react';


// Stateless Functional Component
// Since the Navbar doesn't have any state and is just displaying a prop, we can make it a SFC.
// In SFC, we don't necessarily need a class to import from Component. A function is enough. And they receive props in parameters
const NavBar = (props) => {
    return ( 
        <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
                Total Count <span className="badge badge-pill badge-secondary">{ props.totalCounters }</span>
            </a>
        </nav>
     );
};
 
export default NavBar;