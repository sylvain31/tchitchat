import { Mongo } from 'meteor/mongo';

export default Room = new Mongo.Collection('room');
export default Message = new Mongo.Collection('message');
