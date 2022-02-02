import React from 'react';
import { User } from '../../models/user';

interface Props {
  user:User
}

export default function UsersCard({user}:Props) {
  
  return (
    <div>
      <h1>{JSON.stringify(user.name)}</h1>
    </div>
  )
}
