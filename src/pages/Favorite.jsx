import React from 'react';
import shallow from 'zustand/shallow';
import useStoreFavorite from '../store/favorite';

const Favorite = () => {
  const {
    favorite,
  } = useStoreFavorite(
    (state) => ({
      favorite: state.favorite,
    }),
    shallow
  );

  return (
    <div>Favorite</div>
  )
}

export default Favorite