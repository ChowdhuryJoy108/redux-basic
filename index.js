const redux = require('redux');

const initState = {
    num:0
}
//console.log(redux);
//Reducer

const rootReducer = (state=initState,action) =>{
    if(action.type === 'INC_NUM'){
        return{
            ...state,
            num: state.num + 1
          }
    }
    if(action.type === 'ADD_NUM'){
        return{
            ...state,
            num:state.num + action.value
        }
    }
    return state;
}
//store

const store = redux.legacy_createStore(rootReducer);

console.log(store.getState());

//Dispatching Action

store.dispatch({
    type:'INC_NUM'
})
store.dispatch({
    type:'ADD_NUM',
    value:34
})



console.log(store.getState());