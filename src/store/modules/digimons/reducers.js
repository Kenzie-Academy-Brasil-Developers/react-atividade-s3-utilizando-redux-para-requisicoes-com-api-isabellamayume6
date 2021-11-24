import { ADD_DIGIMONS } from './actionTypes'

export {ADD_DIGIMONS} from './actionTypes'

const digimonsReducers = (state=[], action)=>{
    switch (action.type){
        case ADD_DIGIMONS:
            return [...state, action.digimon];

        default:
            return state;
    }
};
export default digimonsReducers;