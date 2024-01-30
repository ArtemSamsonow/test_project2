
function AllUsers ({user, index}) {
    return (
        <div className="user" key={index}>
            <h3>{`${user.first_name} ${user.last_name}`}</h3>
            <p>{user.email}</p>
            <img src={user.avatar} alt="Аватарка пользователя"/>
        </div>
    )
}

export default AllUsers