import type { NextPage } from 'next'
import { useEffect } from 'react'
import Loading from '../components/Loading'
import todosStore from '../store/todos'
import TodosList from '../components/Todos/List';

const Home: NextPage = () => {
  const { todos, getTodos, loading } = todosStore()

  useEffect(() => {
    getTodos()
  }, [])

  if(loading) return <Loading /> 

  return (
    <div>
      <TodosList todos={todos} />
    </div>
  )

}

export default Home
