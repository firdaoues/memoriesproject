import React, { useEffect  } from 'react'

import { Paper, Typography, CircularProgress, Divider } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import { useParams, useHistory } from 'react-router-dom';

import { getUser, getPosts, getPost } from '../../../actions/posts'
import useStyles from './styles';

const User = () => {


  const dispatch = useDispatch();
  const history = useHistory();

  const classes = useStyles();
  const { posts } = useSelector((state) => state.posts);
  const user  = useSelector((state) => state.users)
  

  const { id } = useParams();


  useEffect(() => {
    dispatch(getPosts());
    dispatch(getUser(id));
  }, [id]);



  const pubPosts = posts.filter((post) => post.creator === user._id);

console.log(posts)
  const openPost = (_id) => history.push(`/posts/${_id}`);
  return (
    <Paper style={{ padding:'20px', borderRaduis:'15px'}} elevation={6}>
    
    <div>
        <Typography variant="h3" component="h2">{user.name}</Typography>
        <Typography variant="h6"> {user.email}</Typography>
        </div>
    
        {pubPosts.length && ( 
        <div >
        <Typography gutterBottom variant="h5"> {user.name} has also published : </Typography>
        <Divider />
          <div >
           {pubPosts.map((post) =>(
            <div style={{margin: '20px', cursor:'pointer'}} onClick ={() => openPost(post._id)} key={post._id}> 

            <Typography gutterBottom variant="h6"> {post.title} </Typography>
            <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
            
           
            <img src={post.selectedFile} width="200px" />
            
             </div>
           ))}
          </div>
          </div>
        
       
      )}
    </Paper>
  )
}

export default User