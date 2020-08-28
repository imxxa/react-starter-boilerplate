import React from 'react';

import { actions } from 'models/users/slice';
import useAction from 'hooks/useAction';
import useSelector from 'hooks/useSelector';
import useComponentDidMount from 'hooks/useComponentDidMount';

import {
  collectionSelector,
  isFetchingSelector,
  isCollectionFetchedSelector,
} from 'models/users/selectors';

import Users from './Users';

const UsersContainer = () => {
  const onFetchUsers = useAction(actions.fetchUsers);
  const users = useSelector(collectionSelector);
  const fetching = useSelector(isFetchingSelector);
  const collectionFetched = useSelector(isCollectionFetchedSelector);

  useComponentDidMount(() => {
    if (!collectionFetched) {
      onFetchUsers();
    }
  });

  return <Users list={users} fetching={fetching} />;
};

export default UsersContainer;
