import { useMemo } from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import shallow from 'zustand/shallow';
import Authenticated from './routes/Authenticated';
import Unauthenticated from './routes/Unauthenticated';
import useStoreFavorite from './store/favorite';
import { getCookie, isEmpty } from './utils/general';

const App = () => {
  const {
    activeUser
  } = useStoreFavorite(
    (state) => ({
      activeUser: state.activeUser
    }),
    shallow
  );

  const isActiveUserExist = useMemo(() => !isEmpty(activeUser), [])
  const currCookie = getCookie('jwtToken')

  return (
    <Router>
      {currCookie && isActiveUserExist ? (
        <Authenticated />
      ) : (
        <Unauthenticated />
      )}
    </Router>
  )
}

export default App
