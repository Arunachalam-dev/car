const initialState = {
  bookings: [],
  loading: false
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALL_BOOKINGS':
      return {
        ...state,
        bookings: action.payload // ✅ must match useSelector
      };
    case 'LOADING':
      return {
        ...state,
        loading: action.payload
      };
    default:
      return state;
  }
};

export default bookingReducer;
