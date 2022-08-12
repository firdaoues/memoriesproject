
import React , { useEffect }from 'react'



import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getUsers} from "../../actions/posts";
const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    console.log(users);
   
    useEffect (() => {
        dispatch(getUsers());
      }, [dispatch])
  return (
    <>
          
   <div> </div>
    { users.map((user) => (
        
        <div>
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          
          </div>
      ))}
 
    </>
  )
    }

export default Users