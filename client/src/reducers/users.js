import { FETCH_USER, FETCH_USERS  } from '../constants/actionTypes';

export default ( users = [] , action ) => {
    switch (action.type) {

        case FETCH_USERS:
          
          return  action.payload;

        case FETCH_USER:
          return  { 
            user : action.payload,
          };
          

        default:
        return users;

}
}