const UsersList = ({users,getUserInfo}) => {
  return(
    <ul>
      {users.map(user => {
        return <>
          <li>
            {`${user.name} > `}
            <button onClick={getUserInfo}
                    data-id={user.id}>
              Show info</button>
          </li>
        </>})}
    </ul>
  )
}

export default UsersList;