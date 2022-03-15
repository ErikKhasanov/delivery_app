const InitialState = {
  isLoading: false,
  items: [],
  selectedCategory: 0,
};

const categories = (state = InitialState, action)  => {
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

export default categories;