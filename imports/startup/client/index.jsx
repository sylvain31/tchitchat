import React from 'react';
import {Meteor} from 'meteor/meteor';
import {Hydrate} from 'react-dom';
import App from './App';

Meteor.startup(() => {
    Hydrate(<App/>, document.getElementById('react-target'));
});