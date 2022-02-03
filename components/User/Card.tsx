import React from 'react';
import { Card } from 'react-bootstrap';
import { User } from '../../models/user';

interface Props {
  user: User
}

const BodyCard = ({ user }: Props) => {
  return (
    <div className='mt-3'>
      <div>
        <h5>Address:</h5>
        <p>{user.address.city}</p>
        <p>{user.address.street}</p>
        <p>{user.address.suite}</p>
        <p>{user.address.zipcode}</p>
      </div>
      <div>
        <h5 className='pb-2'>Contact info</h5>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>
        <p>Websote: {user.website}</p>
      </div>
    </div>
  )
}

export default function UserCard({ user }: Props) {

  return (
    <Card>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <BodyCard user={user} />
      </Card.Body>
    </Card>

  )
}
