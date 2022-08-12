import express from "express";
import mongoose from "mongoose";
import User from '../models/user.js';
import PostMessage from "../models/postMessage.js";



const router = express.Router();


export const getUsers = async (req,res)=>{
   
  try {
      
      const users = await User.find();  
     
      console.log("h");
      res.status(200).json(users);
      
    } catch (error) {
  
      res.status(404).json({ message: error.message });
    }
};

export const getPosts = async (req, res) => {
  const {page} =req.query;
  try {



    const LIMIT = 8; //number of posts per page
    const startIndex=(Number(page) -1) * LIMIT;//get the starting index of every page
    const total = await PostMessage.countDocuments({});
    
    const posts = await PostMessage.find().sort({_id: -1}).limit(LIMIT).skip(startIndex);

    res.status(200).json({data: posts, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const getPostsBySearch = async(req, res) => {
 const { searchQuery, tags} = req.query;

  try {
    const title = new RegExp(searchQuery, 'i'); 
    const posts = await PostMessage.find({ $or: [ {title}, {tags : {$in: tags.split(',')}}] });
    res.json({data: posts });
  } catch (error) {
    res.status(404).json({ message: error.message})
  }
}

export const getPost = async (req, res) => {
  const { id } =req.params;
  try {
    
    const post = await PostMessage.findById(id);
    
    
    res.status(200).json(post);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage({ ...post, creator: req.userId, createdAt: new Date().toISOString()});
  try {
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
}

export const updatePost = async (req, res) => {
  const {id: _id} = req.params;
  const post = req.body;
  if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with that id");

 const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id}, { new: true});
 res.json(updatedPost);

}
export const deletePost = async (req, res) => {

  const {id} = req.params;
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with that id");

 await PostMessage.findByIdAndRemove(id);
 res.json({message : 'Post Deleted Successfully'})

}

export const likePost = async (req, res) => {

  const {id} = req.params;

  if(!req.userId) {
    return res.json({ message : 'Unauthenticated' });
  }
  if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with that id: ${id}`);

  const post = await PostMessage.findById(id);

  const index = post.likes.findIndex((id) => id === String(req.userId));
  if(index === -1) {
    //likepost
    post.likes.push(req.userId)
  } else {
  
    //dislike post 
    post.likes = post.likes.filter((id) => id !== String(req.userId));
  }

  const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});

 return res.status(200).json(updatedPost);
}

export const commentPost = async (req, res) => {
   const { id } = req.params;
   const { value } = req.body;
       
    const post = await PostMessage.findById(id);
    post.comments.push(value);

    const updatedPost = await PostMessage.findByIdAndUpdate(id, post, {new: true});
     
    
    return res.json(updatedPost);

}



export default router;