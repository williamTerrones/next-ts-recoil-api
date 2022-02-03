import React from 'react';
import { Col, ListGroup, Row } from 'react-bootstrap';
import { Todo } from '../../models/todo';
import TodoItem from './Item';

interface Props {
    todos: Todo[],
}

const TodosList = ({ todos }: Props) => {
    return (
        <ListGroup>
            <Row>
                {
                    todos.map(e => {
                        return (
                            <Col md="6" key={e.id}>
                                <TodoItem todo={e} />
                            </Col>
                        )
                    })
                }
            </Row>

        </ListGroup>
    )
};

export default TodosList