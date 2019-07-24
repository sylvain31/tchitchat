import React, {useCallback} from 'react';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router-dom';
import {withTracker} from 'meteor/react-meteor-data';
import { roomsRemove } from '/imports/utils/helpers.js';

import Room from './Room';
import Loader from '../components/Loader';

import Rooms from '/imports/api/rooms';

const Home = ({user, userId, loading, rooms}) => {

    const REMOVE = useCallback(({target: {id}}) => {
        roomsRemove(id);
    }, []);

    return (
        <div>
            <h1>Hello {user.username} !</h1>
            <button
                onClick={() => Meteor.logout()}
            >Logout
            </button>
            <Link to="/rooms/add">Create an room</Link>
            <Loader
                loading={loading}
                render={rooms.map(room =>
                    <Room
                        key={room._id}
                        room={room}
                        userId={userId}
                        remove={REMOVE}
                    />
                )}
            />
        </div>
    );
};

export default withTracker(() => {
    const roomsCreate = Meteor.subscribe('rooms.lasts');
    const loading = !roomsCreate.ready();
    const articles = Rooms.find({}, {sort: {createdAt: -1}}).fetch();
    return {
        userId: Meteor.userId(),
        user: Meteor.user() || {},
        loading,
        rooms,
    }
})(Home);
