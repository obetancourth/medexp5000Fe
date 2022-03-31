import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import { privateAxios } from '../../../Lib/apiClient';

import Pacientes from './Pacientes';
import Loading from '../../UX/Loading/Loading';

const PacientesPage = ()=>{
  const dispatch = useDispatch();
  useEffect(
    ()=>{
      const loadData = async ()=> {
        dispatch({type:'PACIENTES_LOADING', payload:{}});
        try {
          const { data: {pacientes,  status}} = await privateAxios.get('/api/v1/pacientes/all');
          dispatch({type:'PACIENTES_SUCCESS', payload: {pacientes}});
        } catch(ex){
          console.log(ex);
          dispatch({ type: 'PACIENTES_FAILED', payload: {} });
        }
      }
      loadData();
    }
    ,[]
  );
  const { pacientes, isLoading, errors } = useSelector(state=>state.pacientes);
  return (
    <>
      {isLoading && (<Loading />)}
      <Pacientes pacientes={pacientes} />
    </>
  )
}

export default PacientesPage;
