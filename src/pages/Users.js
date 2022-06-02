import React, { useContext, useEffect, useState } from 'react';

import UserTable from '../components/usertable/userTable.component';
import { getUsers } from '../utils/firebase/firebase.utils';
import { UserContext } from '../contexts/user.context';

const Users = () => {
  const [users, setUsers] = useState([]);
  const { currentUser } = useContext(UserContext);
  if (currentUser) {
    (async () => {
      try {
        const userData = await getUsers(currentUser.uid);
        setUsers(userData);
      } catch (e) {
        console.log(e);
      }
    })();
  }

  return (
    <>
      {users.length > 0 ? <UserTable data={users} /> : null}
      users
    </>
  );
};

export default Users;
