import React from 'react';
import ReactDOM from 'react-dom';
import Landing from './component/Landing';
import Login from './component/Login';
import Register from './component/Register';

function App() {
    return (
        <div className="container">
            <Register />
            <Landing />
            <Login />
        </div>
    );
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
