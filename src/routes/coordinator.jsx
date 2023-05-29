export const goToLogin = (navigate) => {
  navigate("/");
};
  
export const goToSignUp = (navigate) => {
  navigate("/signup");
};

export const goToPosts= (navigate) => {
  navigate("/posts");
};

export const goToPostDetails = (navigate, postId) => {
  navigate(`/posts/${postId}`);
};
