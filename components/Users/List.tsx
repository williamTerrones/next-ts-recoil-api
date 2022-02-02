import React from 'react';
import { User } from '../../models/user';
import UsersCard from './Card';

interface Props {
    users:User[],
}

export default function UsersList({users}:Props) {
  return (
      <div>
        {
          users.map(e => <UsersCard user={e} key={e.id} />  )
        }
      </div>
  )
}
