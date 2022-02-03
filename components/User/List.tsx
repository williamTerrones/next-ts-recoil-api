import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { User } from '../../models/user';
import UserCard from './Card';

interface Props {
  users: User[],
}

export default function UserList({ users }: Props) {
  return (
    <Row className='mt-4'>
      {
        users.map(e => {
          return (
            <Col md="6" lg="4" key={e.id} className="my-2">
              <UserCard user={e} />
            </Col>
          )
        })
      }
    </Row>
  )
}
