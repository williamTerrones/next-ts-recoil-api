import { CSSProperties } from "react"
import { ListGroup } from "react-bootstrap"
import { Todo } from "../../models/todo"
import todosStore from "../../store/todos"
import { pointer } from "../../styles/global"

const deleteStyles:CSSProperties = {
    color:'white',
    background:'red',
    borderRadius:10,
    width:20,
    height:20,
    textAlign:'center',
    marginLeft:10,
}

const IconDelete = ({id}:{id:number}) => {

    const {deleteTodo} = todosStore()

    return (
        <div style={{...pointer,...deleteStyles}} onClick={() => deleteTodo(id) }>
            X
        </div>
    )
}

const TodoItem = ({ todo }: { todo: Todo }) => {

    const variant = todo.completed ? 'success' : 'light'

    return (
        <ListGroup.Item variant={variant} className="d-flex justify-content-between align-items-center my-1">
            {todo.title}
            <IconDelete id={todo.id} />
        </ListGroup.Item>
    )
}

export default TodoItem