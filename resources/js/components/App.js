import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div className="container">
            <h1>Nice</h1>
        </div>
    );
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}
