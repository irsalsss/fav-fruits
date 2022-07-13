import { useNavigate } from 'react-router-dom';

const useRoute = () => {
  const navigate = useNavigate();
  const to = (url = '/') => {

    navigate(`/${url}`);
  }

  return {
    to
  }
}

export default useRoute;