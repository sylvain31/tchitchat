import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Rooms from '/imports/ui/modules/Rooms';
import Inscription from '/imports/ui/modules/Inscription';
import Connection from '/imports/ui/modules/Connection';
import Parametre from '/imports/ui/modules/Parametre';
import Missing from '/imports/ui/modules/Missing';
import Verify from '/imports/ui/modules/Verify';
import MyRoute from '/imports/ui/components/MyRoute';

const App = () => (
    <Router>
        <Switch>
            <MyRoute path="/rooms" component={Rooms} logged/>
            <MyRoute path="/signup" component={Inscription}/>
            <MyRoute path="/signin" component={Connection}/>
            <MyRoute path="/settings" component={Parametre} logged/>
            <MyRoute path="/missing" component={Missing}/>
            <MyRoute path="/verify" component={Verify} logged/>
        </Switch>
    </Router>
);

export default App;

// TODO : Modification des chemins