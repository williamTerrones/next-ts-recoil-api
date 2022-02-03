import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { User } from '../../models/user';
import UsersCard from './Card';

interface Props {
  users: User[],
}

export default function UsersList({ users }: Props) {
  return (
    <Row className='mt-4'>
      {
        users.map(e => {
          return (
            <Col md="6" lg="4" key={e.id} className="my-2">
              <UsersCard user={e} />
            </Col>
          )
        })
      }
    </Row>
  )
}
