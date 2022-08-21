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

  


  const openPost = (_id) => history.push(`/posts/${_id}`);
  return (
    <Paper style={{ padding:'20px', borderRaduis:'15px'}} elevation={6}>
    
    <div >
        <Typography variant="h3" component="h2">{user.name}</Typography>
        <Typography variant="h6" style={{ padding:'20px'}} > {user.email}</Typography>
        </div>
        <Divider />
        {pubPosts.length && ( 
        <div className={classes.section}>
        <Typography gutterBottom variant="h5"style={{ padding:'20px'}} > {user.name} has also published : </Typography>
        
          <div className={classes.recommendedPosts} >
           {pubPosts.map((post) =>(
            <div style={{margin: '20px', cursor:'pointer'}} onClick ={() => openPost(post._id)} key={post._id}> 

            <img src={post.selectedFile} width="200px" />
            <Typography gutterBottom variant="h6"> {post.title} </Typography>
            <Typography variant="body1">{moment(post.createdAt).fromNow()}</Typography>
            
             </div>
            
           ))}
           
          </div>
          <Divider />
          <div>

          <Typography gutterBottom variant="h5"style={{ padding:'20px'}} > {user.name} has also commented: </Typography>

          </div>

    </div>
        
       
      )}
    </Paper>
  )
}

export default User