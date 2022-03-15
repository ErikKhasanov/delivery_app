const InitialState = {
  items: [],
  isLoading: true
};

const foods = (state = InitialState, action) => {
  if(action.type === 'SET_FOODS'){
    return{
      ...state,
      items: action.payload
    }
  }
  if(action.type === 'SET_IS_LOADING'){
    return{
      ...state,
      isLoading: action.payload
    }
  }
  return state
}

export default foods;