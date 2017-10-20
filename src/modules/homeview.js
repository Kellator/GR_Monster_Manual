import React from 'react';

// div with search or enter
const HomeView = () => (
    // add logic to change return from default to advanced search or monster creation input component
    // if state = default show homeview div
    // if state = creation show input
    // if state = search show advanced search
    // if state = results show results list
    // if state = card show monster card
    // print?
    <div>
        <div>
            <h2>Search by name or type of creature.</h2>
            <input placeholder="Wight"></input><button>Submit</button><br></br>
            {/* buttons should send to route with advanced search for name & type & level */}
            <button>Advanced Search</button>
        </div>
        <div>
            {/* button should sent to route with input for new monster card */}
            <button>Enter New Monster</button>
        </div>
    </div>
);
export default HomeView;