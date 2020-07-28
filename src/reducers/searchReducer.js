const InitialData = {
    active:null,
    history:[]
}

const searchReducer = (state=InitialData, action) =>{
    switch(action.type){
        case 'SEARCH':
            return {
                ...state,active:action.value,history:[action.value,...state.history].splice(0,5)
            }
        case 'DELETE_SEARCH':
            state.history.splice(action.index,1)
            return {
                ...state,history:[...state.history]
            }
        default:
            return state
    }
}

export default searchReducer;