const defaultSecurity = {
  email: '',
  jwtToken: '',
  roles: [],
  _id: '',
  errors: []
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
      break;
    case 'ON_LOGIN_SUCCESS':
      break;
    case 'ON_LOGIN_ERROR':
      break;
    default:
      return state;
  }
}
