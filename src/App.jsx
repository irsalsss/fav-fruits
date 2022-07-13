import {
  BrowserRouter as Router,
} from 'react-router-dom';
import Authenticated from './routes/Authenticated';
import Unauthenticated from './routes/Unauthenticated';
import { getCookie } from './utils/general';

const App = () => {
  const currCookie = getCookie('jwtToken')
  console.log('currCookie', currCookie)
  return (
    <Router>
      {currCookie ? (
        <Authenticated />
      ) : (
        <Unauthenticated />
      )}
    </Router>
  )
}

export default App
