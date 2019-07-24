import {Meteor} from 'meteor/meteor';
import Rooms from '..';

Meteor.methods({
    "rooms.create"({title, content}) {
        if (!this.userId) {
            throw new Meteor.Error('403', 'You must be connected');
        }

        Rooms.insert({
            title,
            content,
            createdAt: new Date(),
            userId: this.userId,
        });
    },

    "rooms.update"({id, title, content}) {
        if (!this.userId) {
            throw new Meteor.Error('403', 'You must be connected');
        }

        const room = Rooms.findOne(id);

        if (room.userId !== this.userId) {
            throw new Meteor.Error('403', 'You must be the owner of article');
        }

        Rooms.update(id, {$set: {title, content}});
    },

    "rooms.remove"({id}) {
        if (!this.userId) {
            throw new Meteor.Error('403', 'You must be connected');
        }

        const room = Rooms.findOne(id);

        if (room.userId !== this.userId) {
            throw new Meteor.Error('403', 'You must be the owner of article');
        }

        Rooms.remove(id);
    },
});
