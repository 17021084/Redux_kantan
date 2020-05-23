const initialState = {
  list: [],
};

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
