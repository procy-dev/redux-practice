import React from 'react';
import HomePage from './Components/HomePage/HomePage'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route>404 Page Not Found</Route>
                </Switch>
                
            </div>
        </Router>
        
    );
}

export default App;
