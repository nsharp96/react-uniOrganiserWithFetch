import {API} from '../API/apiRequest';
import { useState, useEffect } from 'react';
import UserList from '../components/UserList.js';

const MyUsers = () => {

    //User State
    const [users, setUsers] = useState(null);
    const [loadingMessage, setLoadingMessage] = useState("Loading Data...");

    //Fetch Users from API
    const fetchUsers = async() => {
        const outcome = await  API.get('Users');
        if (outcome.success) setUsers(outcome.response);
        else setLoadingMessage(`Error ${outcome.response.status}: Users could not be found`);
    }

    useEffect( () => {fetchUsers() }, [] );
    
    return (
        <>

            <h1>My Users</h1>

            {
                !users
                ? loadingMessage
                : users.length === 0 
                    ? <p>No Users Found</p>
                    : 
                        <UserList
                            users = {users}
                        />
            }

        </>
        



    )
    
}

export default MyUsers;