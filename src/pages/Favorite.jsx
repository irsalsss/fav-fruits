import React from 'react';
import shallow from 'zustand/shallow';
import AvatarProfile from '../components/AvatarProfile';
import useStoreFavorite from '../store/favorite';

const Favorite = () => {
  const {
    activeUser,
    favorite,
  } = useStoreFavorite(
    (state) => ({
      favorite: state.favorite,
      activeUser: state.activeUser,
    }),
    shallow
  );

  return (
    <div id="container-favorite">
      <div className='fixed top-[16px] right-[16px]'>
        <AvatarProfile />
      </div>
    </div>
  )
}

export default Favorite