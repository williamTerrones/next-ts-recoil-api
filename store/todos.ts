import { atom, useRecoilState } from "recoil";
import jsonPlaceholderApi from "../api/jsonPlaceholderApi";
import { Todo } from '../models/todo';

const todosState = atom<Todo[]>({
    key: 'todosState',
    default: [],
})

const loadingTodosState = atom({
    key: 'loadingTodosState',
    default: true,
})

const todosStore = () => {

    const [todos, setTodos] = useRecoilState(todosState)
    const [loading, setLoading] = useRecoilState(loadingTodosState)

    const getTodos = async () => {

        if(todos.length) return

        const {data} = await jsonPlaceholderApi.get('/todos')
        
        setTimeout(() => {
            setTodos(data)
            setLoading(false)   
        },500)

    }

    const deleteTodo = (id:number) => {
        setTodos(e => e.filter(todo=>todo.id!==id) )
    }

    return {
        todos,
        getTodos,
        loading,
        deleteTodo,
    }

}

export default todosStore