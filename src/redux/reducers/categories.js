const InitialState = {
  isLoading: false,
  items: [],
  selectedCategory: null,
};

const foods = (state = InitialState, action) => {
  if(action.type === 'SET_CATEGORIES'){
    return{
      ...state,
      items: action.payload
    }
  }
  if(action.type === 'SET_SELECTED_CATEGORY'){
    return{
      ...state,
      selectedCategory: action.payload
    }
  }
  if(action.type === 'SET_CATEGORIES_IS_LOADING'){
    return{
      ...state,
      isLoading: action.payload
    }
  }
  return state
}

export default foods;