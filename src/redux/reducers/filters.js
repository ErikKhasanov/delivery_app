const InitialState = {
  sortBy: 'ALL',
};

const filters = (state = InitialState, action) => {
  if(action.type === 'SET_SORT_BY'){
    return{
      ...state,
      sortBy: action.payload
    }
  }
  return state
}

export default filters;