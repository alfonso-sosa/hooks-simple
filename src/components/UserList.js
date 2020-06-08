import React from 'react';
import useResources from './useResources';

const UserList = () => {
  return (
    <ul>
      {
        useResources('users').map(
          user => {
            return <ul key={user.id}>{user.name}</ul>
          })
      }
    </ul>
  );
};

export default UserList;
