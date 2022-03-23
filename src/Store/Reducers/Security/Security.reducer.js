import { setJWT } from '../../../Lib/apiClient';
const defaultSecurity = {
  email: '',
  jwtToken: '',
  roles: [],
  _id: '',
  errors: [],
  isLoading: false
}

export const securityReducer = (state = defaultSecurity, action) => {
  const {type, payload} = action || {};
  switch(type){
    case 'ON_SIGN_IN_LOADING':
      break;
    case 'ON_SIGN_IN_SUCCESS':
      break;
    case 'ON_SIGN_IN_ERROR':
      break;
    case 'ON_LOGIN_LOADING':
      return {...state, isLoading:true, errors:[]};
    case 'ON_LOGIN_SUCCESS':
      setJWT(payload.jwtToken);
      return {...state, ...payload, isLoading:false, errors:[]};
    case 'ON_LOGIN_ERROR':
      return {...state, errors: payload.errors, isLoading:false};
    default:
      return state;
  }
}
