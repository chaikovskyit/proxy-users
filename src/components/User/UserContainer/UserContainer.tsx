import React from 'react'
import { userAPI } from '../../../services/UserService'
import UserItem from '../UserItem/UserItem'
import style from './userContainer.module.scss'

const UserContainer = () => {
  const {isLoading, isError, data: users} = userAPI.useFetchAllUsersQuery('')
  return (
    <div className={style.container}>
        {isLoading && (<h3>Loading...</h3>)}
        {isError && (<h3>Omg we have some errors</h3>)}
        <div className={style.userList} >
          {users && users.map( user => (<UserItem key={user.id} user={user}/>))}
        </div>

    </div>
  )
}

export default UserContainer