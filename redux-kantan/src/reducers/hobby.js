const initialState = {
  list: [],
};

// Reducer will recevie 2 props which is State and Action then process give new state
// In the first time, we have to pass initial state


const hobbyReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_HOBBY": {
      const newList = [...state.list];
      newList.push(action.payload);
      return {
        ...state,
        list: newList,
      };
    }
    case "SET_ACTIVE_HOBBY": {
      const hobby = action.payload;
      const newHobby = {
        ...hobby,
        active: !hobby.active,
      };
      const index = state.list.indexOf(hobby);
      const newList = [
        ...state.list.slice(0, index),
        newHobby,
        ...state.list.slice(index + 1),
      ];

      //other way but splice doesnt mutate address object
      // const newList= [...state.list];
      // newList.splice(index,1, newHobby)

      return {
        ...state,
        list: newList,
      };
    }
    default:
      return state;
  }
};

export default hobbyReducer;
