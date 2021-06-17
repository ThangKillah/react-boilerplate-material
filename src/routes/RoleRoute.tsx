import React, { FC, useEffect, lazy } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

// configs
import { PATH_NAME } from 'configs';

// selectors
import { roleSelector } from 'selectors/auth.selector';

const Error404View = lazy(() => import('features/Error404View'));

type IProps = {
  requireRoles: string[] | [];
};

const RoleRoute: FC<IProps> = ({ children, requireRoles = [] }) => {
  const history = useHistory();
  const role = useSelector(roleSelector);
  console.log(role);
  let component = children;
  if (role && !requireRoles.includes(role) && requireRoles.length > 0) component = <Error404View />;

  /* useEffect(() => {
    if (!role || requireRoles.length === 0) return;

    const checkRole = requireRoles.includes(role);
    if (!checkRole) {
      history.replace(PATH_NAME.PLAY_BACKGROUND);
      // eslint-disable-next-line no-alert
      alert('Permission denied');
    }
  }, [history, role, requireRoles]); */

  return <>{component}</>;
};

export default RoleRoute;
