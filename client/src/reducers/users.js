import { FETCH_USERS  } from '../constants/actionTypes';

export default ( users = [] , action ) => {
    switch (action.type) {

        case FETCH_USERS:
          
          return  action.payload;

        default:
        return users;
}
}