const initialState =  {
  children: 'Bonny',
  cats: 'Caty',
  dogs: ['Bethoven']
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'get_cats':
      return {
        ...state,
        cats: action.payload
      }
    
    case 'get_dogs':
      return {
        ...state,
        dogs: action.payload
      }

    case 'add_dog':
      return {
        ...state,
        dogs: [...state.dogs, action.payload]
      }

    default: 
      return state;
  }
}