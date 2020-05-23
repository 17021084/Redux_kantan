const hobbyReducer =(state={},action )=>{
    switch (action.type) {
        case 'ADD_HOBBY':{
            return state;
        }
        case 'SET_ACTIVE_HOBBY':{
            return state;
        }
        default:
            return state;       
    }
}

export default hobbyReducer;