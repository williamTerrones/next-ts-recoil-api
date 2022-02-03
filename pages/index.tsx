import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Loading from '../components/Loading'
import UsersList from '../components/Users/List'
import userStore from '../store/user'

const Home: NextPage = () => {
  const { users, getUsers, loading } = userStore()

  useEffect(() => {
    getUsers()
  }, [])

  if(loading) return <Loading /> 

  return (
    <div>
      <UsersList users={users} />
    </div>
  )

}

export default Home
