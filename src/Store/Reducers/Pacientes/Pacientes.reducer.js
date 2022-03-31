const defaultPacientes = {
  pacientes: [],
  isLoading: false,
  errors: [],
  totalPages:0,
  currentPage:0,
  itemXPage:10,
  totalItems:0
}

export const pacientesReducer = (state = defaultPacientes, action)=>{
  const {type, payload} = action;
  switch(type){
    case 'PACIENTES_LOADING':
      return {...state, isLoading: true};
    case 'PACIENTES_FAILED':
      return {...state, isLoading: false, errors:['Error al cargar pacientes']};
    case 'PACIENTES_SUCCESS':
      return {
        ...state,
        pacientes:[...payload.pacientes],
        isLoading: false,
        errors:[]
      };
    case 'PACIENTES_CLEAR':
      return {
        ...state,
        pacientes: [],
        isLoading: false,
        errors: []
      };
    default:
      return state;
  }
}
