import {SEARCH_JAM} from '../actions/types';

const initialState = {
    text:'',
    jams:[],
    loading: false,
    jam:[]

}
export default function(state = initialState, action){
    switch (action.type){
        case SEARCH_JAM:
            return{
                ...state,
                text: action.payload,
                loading: false
            }
        default:
            return state;    
            

    }
}