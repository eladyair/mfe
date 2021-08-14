import React from 'react';
import { Switch, Route } from 'react-router-dom';

// 3rd Parties
import { StylesProvider } from '@material-ui/core/styles';

// Components
import Landing from './components/Landing';
import Pricing from './components/Pricing';

const App = () => {
    return (
        <div>
            <StylesProvider>
                <Switch>
                    <Route exact path='/pricing' component={Pricing} />
                    <Route path='/' component={Landing} />
                </Switch>
            </StylesProvider>
        </div>
    );
};

export default App;
