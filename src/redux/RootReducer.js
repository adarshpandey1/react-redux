import {combineReducers} from 'redux' 
import CakeReducer from './cakes/CakeReducer'
import IcecreamReducer from './icecreams/IcecreamReducer'
import UserReducer from './user/UserReducer'
const RootReducer = combineReducers({
     CakeReducer,
     IcecreamReducer,
     UserReducer
})

export default RootReducer