import {BUY_CAKE} from './CakeType';

const initialState = {
    noOfCakes : 10
}
const CakeReducer = (state=initialState,action) => {
    
   switch(action.type) {
       case BUY_CAKE: return {
           ...state,
           noOfCakes:state.noOfCakes-action.payload
       }
       default : return state
   }
}

export default CakeReducer;