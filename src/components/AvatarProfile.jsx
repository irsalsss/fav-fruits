import React from 'react'
import { message } from 'antd';
import shallow from 'zustand/shallow';
import { deleteCookie } from '../utils/general';
import Avatar from '../components/Avatar';
import Dropdown from '../components/Dropdown';
import useStoreFavorite from '../store/favorite';

const AvatarProfile = () => {
  const {
    activeUser,
    setActiveUser,
  } = useStoreFavorite(
    (state) => ({
      activeUser: state.activeUser,
      setActiveUser: state.setActiveUser,
    }),
    shallow
  );

  const logoutOption = [
    { key: 'logout', label: 'Logout' }
  ]

  const onLogout = () => {
    message.success('Successfully logout, please wait a moment', 1, () => {
      location.href = '/login';
    });
    setTimeout(() => {
      setActiveUser({});
      deleteCookie('jwtToken')
    }, 1000)
  }

  return (
    <Dropdown options={logoutOption} onClick={onLogout}>
      <Avatar
        text={activeUser.username}
        wrapperClassname="cursor-pointer"
      />
    </Dropdown>
  )
}

export default AvatarProfile