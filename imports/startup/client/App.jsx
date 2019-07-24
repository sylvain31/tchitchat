import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from '/imports/ui/Home';
import Inscription from '/imports/ui/modules/Inscription';
import Connection from '/imports/ui/modules/Connection';
//import Parameters from '/imports/ui/modules/Parameters';
//import Missing from '/imports/ui/modules/Missing';
//import Verify from '/imports/ui/modules/Verify';
import MyRoute from '/imports/ui/components/MyRoute';

const App = () => (
    <Router>

        <Switch>
            {<MyRoute path="/rooms" component={Home} logged/>}
            <MyRoute path="/signup" component={Inscription}/>
            <MyRoute path="/signin" component={Connection}/>
            {/*<MyRoute path="/settings" component={Parameters} logged/>
            <MyRoute path="/missing" component={Missing}/>
            <MyRoute path="/verify" component={Verify} logged/>*/}
        </Switch>
    </Router>
);

export default App;

// TODO : Décommenter les imports et les routes au fur et à mesure de l'avancer des dossiers