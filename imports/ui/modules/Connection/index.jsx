import React, {useState, useCallback} from 'react';
import {Meteor} from 'meteor/meteor';
import {Link} from 'react-router-dom';
import Fields from './Fields/Fields';


const Connection = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const update = useCallback((e, {name, value}) => {
        switch (name) {
            case 'username':
                setUsername(value);
                break;
            case 'password':
                setPassword(value);
                break;
        }
    }, [setUsername, setPassword]);

    const signin = useCallback(() => {
        Meteor.loginWithPassword(username, password, (err) => {
            if (err)
                console.log(err);
        });
    }, [username, password]);

    return (
        <div>
            <h1>Connexion</h1>
            <Fields
                update={update}
                state={{
                    username,
                    password,
                }}
            />
            <button onClick={signin}>Signin</button>
            <Link to="/signup">Inscription</Link>
        </div>
    );
};

export default Connection;