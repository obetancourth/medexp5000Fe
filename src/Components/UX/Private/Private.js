import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Private = ({children})=>{
  const { email } = useSelector( (state)=>state.security );
  if ( /^\s*$/.test(email)) {
    return (<Navigate to='/login' />);
  }
  return (
      <>
        {children}
      </>
    );
}

export default Private;
