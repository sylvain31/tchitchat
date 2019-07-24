import {Meteor} from "meteor/meteor";

export const roomsRemove = (id) => Meteor.call('rooms.remove', {owner_id}, (err) => {
    if (err) console.log(err);
});