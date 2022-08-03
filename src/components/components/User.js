import './User.css';

const User = ({user}) => {

    return (
        <div className="userCard">
            <img className="userImg" src={user.UserImageURL} />
            <p className="userName">{user.UserFirstname} {user.UserLastname}</p>

        </div>
    )
}

export default User;