import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Landing from './component/Landing';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Profile from './component/Profile';
import Register from './component/Register';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Route exact path="/" component={ Landing }>
                    <div className="container">
                        <Route exact path="/register" component={ Register } />
                        <Route exact path="/login" component={ Login } />
                        <Route exact path="/profile" component={ Profile } />
                    </div>
                </Route>
            </div>
        </Router>
    );
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
