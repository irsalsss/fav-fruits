import React, { useEffect } from 'react';
import shallow from 'zustand/shallow';
import useStoreFavorite from '../store/favorite';
import { isEmpty } from '../utils/general';

const Login = () => {
  const {
    favorite,
    setInitialFavorite
  } = useStoreFavorite(
    (state) => ({
      favorite: state.favorite,
      setInitialFavorite: state.setInitialFavorite
    }),
    shallow
  );

  useEffect(() => {
    if (isEmpty(favorite)) {
      setInitialFavorite()
    }
  }, [])
  return (
    <div>Login</div>
  )
}

export default Login