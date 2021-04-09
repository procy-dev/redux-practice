import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';
import { makeSelectUsers } from './selectors';
import Axios from 'axios';
import { setUsers } from './actions'
import UserList from './UserList';

const stateSelector = createSelector(makeSelectUsers, (users) => ({
    users,
}));

const actionDispatcher = (dispatch) => ({
    setUser: (users) => dispatch(setUsers(users))
});

const HomePage = (props) => {
    const { users } = useSelector(stateSelector);
    const { setUser } = actionDispatcher(useDispatch());
    const fetchUsers = async () => {
        const response = await Axios.get('https://reqres.in/api/users').catch(err => console.log(err));

        setUser(response.data.data)
    }

    useEffect(() => {
        fetchUsers();
    }, []);

    console.log('Users: ', users);

    return (
        <div>
            <UserList />
        </div>
    );
}

export default HomePage;
