import React, { useEffect } from 'react'
import * as api from './api/index'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { commitUsers, removeUsers } from './reducers/usersReducer'
import { userType } from './types/index'

type RootState = {
    users: Array<userType>
}

const App = () => {
  const dispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users)

  const handleDeletion = (id: number) => dispatch(removeUsers(id))

  useEffect(() => {
      (
          async () => {
              const response = await api.fetchUsers()
              dispatch(commitUsers(response.data))
          }
      )()
  }, [])

  return (
    <div>
        {
            users.map(item =>
                <div>
                    { item.id }
                    <button onClick={ () => handleDeletion(item.id) }>Удалить</button>
                </div>
            )
        }
    </div>
  )
}

export default App
