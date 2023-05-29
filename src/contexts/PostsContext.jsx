import { createContext, useContext, useState } from "react";
import { useRequestData } from "../hooks/useRequestData";
import { UserContext } from "./UserContext";

export const PostsContext = createContext();

export function PostsContextProvider({ children }) {

  const { token, headers, userId } = useContext(UserContext);
  const { requestData } = useRequestData();
  const [ posts, setPosts] = useState([]);
  const [ post, setPost ] = useState(undefined);
  const [ newPost, setNewPost ] = useState([]);
  const [ newLikeOrDislikePost, setNewLikeOrDislikePost ] = useState(undefined);
  const [ newComment, setNewComment ] = useState([]);
  const [ newLikeOrDislikeComment, setNewLikeOrDislikeComment ] = useState(undefined)
  const [ likesDislikesPosts, setLikesDislikesPosts ] = useState([]);
  const [ likesDislikesComments, setLikesDislikesComments ] = useState([]);


  const fetchPosts = async () => {
      if(token){
        const response = await requestData("posts", "GET", headers);
        setPosts(response.data);
      }
  };

  const getLikesDislikesOnPosts = async () => {
    if (userId){
        const response = await requestData(`users/${userId}/posts/likes`, "GET", headers)
        setLikesDislikesPosts(response.data)
    }
  }
  
  const getLikesDislikesOnCommentsByPostId = async (params) => {
    if (userId){
        const response = await requestData(`users/${userId}/posts/${params}/comments/likes`, "GET", headers)
        setLikesDislikesComments(response.data)
    }
  }

  const fetchPostById = async (params) => {
    const response = await requestData(
      `posts/${params}`,
      "GET",
      headers
      );
      setPost(response.data);
  };

  return (
      <PostsContext.Provider
        value={{posts, post, setPost, newPost, setNewPost, newComment, setNewComment, newLikeOrDislikePost, setNewLikeOrDislikePost,newLikeOrDislikeComment, setNewLikeOrDislikeComment, likesDislikesPosts, likesDislikesComments, getLikesDislikesOnCommentsByPostId, fetchPostById, fetchPosts, getLikesDislikesOnPosts}}
      >
        {children}
      </PostsContext.Provider>
    );
}