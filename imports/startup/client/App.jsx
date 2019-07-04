import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from '/imports/ui/Home';
import Accounts from '/imports/ui/modules/Accounts';
import Users from '/imports/ui/modules/Users';
import Rooms from '/imports/ui/modules/Rooms';
import MyRoute from '/imports/ui/components/MyRoute';

const App = () => (
    <Router>
        <Switch>
            <MyRoute path="/home" component={Home} logged/>
            <MyRoute path="/signup" component={Inscription}/>
            <MyRoute path="/signin" component={Connection}/>
            <MyRoute path="/articles/add" component={ArticleForm} logged/>
            <MyRoute path="/articles/edit/:id" component={ArticleForm} logged/>
        </Switch>
    </Router>
);

export default App;

// TODO : Modification des chemins