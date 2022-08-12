import React , { useEffect }from 'react'
import { DataGrid } from "@mui/x-data-grid";


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