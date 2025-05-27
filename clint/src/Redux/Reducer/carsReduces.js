const initialState = {
    cars: [],
    loading: false,
  };
  
  const carreducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ALL_CARS':
        return {
          ...state,
          cars: action.payload,
        };
  
      case 'LOADING':
        return {
          ...state,
          loading: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default carreducer;
  