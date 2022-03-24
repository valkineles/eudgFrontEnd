import axios from 'axios';

// import { useAuthContext } from './../../contexts/AuthContext';
const useApi = () => {
  // const { session } = useAuthContext();

  const api = () => {
    return axios.create({
      baseURL: process.env.REACT_APP_API_URL_BASE,
      validateStatus: function (status) {
        return true;
      },
      // headers: {
      //     Authorization: `Bearer ${session.token}`,
      // },
    });
  };
  return {
    api: api(),
  };
};
export default useApi;
