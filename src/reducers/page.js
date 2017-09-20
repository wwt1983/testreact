import {GET_PHOTOS_REQUEST, GET_PHOTOS_SUCCESS} from '../constants/Page';

const initialState  = {
    year: 2017,
    photos: [],
    fetching: false
}

export default function page (state = initialState, action) {
    console.log('test' + JSON.stringify(state) + ' ' + JSON.stringify(action));

    switch (action.type){
       case GET_PHOTOS_REQUEST:
           return {...state, year: 2012, fetching: true};
       case GET_PHOTOS_SUCCESS:
           return {...state, photos: [1, 2, 3], fetching: false};
       default:
           return state;
   }
}
