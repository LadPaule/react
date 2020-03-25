import{ SEARCH_JAM} from './types';

export const searchJam = text => dispatch =>{
    dispatch({
        type: SEARCH_JAM,
        payload: text

    });
}