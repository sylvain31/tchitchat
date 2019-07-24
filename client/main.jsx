import React from 'react';
import { Meteor } from 'meteor/meteor';
import { hydrate } from 'react-dom';
import App from '/imports/startup/client/App'

Meteor.startup(() => {
  hydrate(<App />, document.getElementById('react-target'));
});