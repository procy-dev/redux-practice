import Axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { createSelector } from 'reselect';
import styled from 'styled-components';
import { setUser } from './actions'
import { makeSelectUser } from './selectors';

const UserContainer = styled.div`
    width: 100%;
    displaly: flex;
    justify-content: center;
`;

const UserWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const UserImage = styled.div`
    width: 7em;
    height: 7em;

    img {
        width: 100%;
        height: 100%
    }
`;

const UserName = styled.h3`
    font-size: 20px;
    color: #000;
    margin: 0;
`;

const UserEmail = styled.h3`
    font-size: 18px;
    color: grey;
    margin: 0;
`;

const stateSelector = createSelector(makeSelectUser, (user) => ({
    user
}));

const actionDispatch = (dispatch) => ({
    setUser: (user) => dispatch(setUser(user))
});

const UserPage = () => {
    const { user } = useSelector(stateSelector);
    const { setUser } = actionDispatch(useDispatch());
    const { id } = useParams();

    const fetchUser = async () => {
        const response = await Axios.get(`https://reqres.in/api/users/${id}`).catch((err) => console.log(err));

        if(response) setUser(response.data.data);
    }

    useEffect(() => {
        if(id && id !== '') fetchUser(id);
    }, [id]);

    if(!user) return <div>Loading...</div>

    return (
        <UserContainer>
            <UserWrapper>
                <UserImage>
                    <img src={user.avatar} />
                </UserImage>
                <UserName>{user.first_name} {user.last_name}</UserName>
                <UserEmail>{user.email}</UserEmail>
            </UserWrapper>
        </UserContainer>
    );
}

export default UserPage;
