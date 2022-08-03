import './UserList.css';
import User from './User';

const UserList = ({users}) => {

    return (
        <div className="userContainer"> 

        {
            users.map((user) => (
                <User
                    key = {user.UserID}
                    user = {user}
                />
            ))
        }

        </div>
    )
}

export default UserList;