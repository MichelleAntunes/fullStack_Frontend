import { CardPost } from "../../components/CardPost";
import { Header } from "../../components/Header";
import { Textarea } from "../../components/Textarea";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import loading_orange from "../../assets/loading_orange.svg";
import { PostsContext } from "../../contexts/PostsContext";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function Posts() {
  useProtectedPage();

  const { userId, token } = useContext(UserContext);
  const {
    posts,
    newPost,
    setNewPost,
    newLikeOrDislikePost,
    fetchPosts,
    getLikesDislikesOnPosts,
  } = useContext(PostsContext);
  const [ordination, setOrdination] = useState("newest-post");

  useEffect(() => {
    fetchPosts();
  }, [token, newPost, newLikeOrDislikePost]);

  useEffect(() => {
    getLikesDislikesOnPosts();
  }, [userId, token, posts, newLikeOrDislikePost]);

  return (
    <>
      <Header />
      <main className="flex flex-col min-h-full items-center p-8 gap-4">
        <Textarea
          placeholder={"Escreva seu post..."}
          button={"Postar"}
          path={"posts"}
          setNewContent={setNewPost}
        />

        <hr className="hr h-0.5" />

        <div className="flex flex-col items-center gap-2 pt-4">
          <div className="flex gap-x-4 items-center mb-5">
            <label htmlFor="ordination" className="text-sm text-dark-gray">
              Classificar por:{" "}
            </label>
            <select
              id="ordination"
              className="w-32 text-sm text-dark-blue-gray font-semibold bg-transparent border-0 border-b-2 border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-200"
              value={ordination}
              onChange={(e) => setOrdination(e.target.value)}
            >
              <option className="text-xs sm:text-sm" value="newest-post">
                Recentes
              </option>
              <option className="text-xs sm:text-sm" value="most-liked">
                Populares
              </option>
            </select>
          </div>
          {!posts.length || posts === "token: Required" ? (
            <img
              src={loading_orange}
              alt="Carregando sua requisição"
              className="inline w-6 h-6 mr-3 animate-spin"
            />
          ) : posts.length > 0 ? (
            posts
              .sort((a, b) => {
                switch (ordination) {
                  case "newest-post":
                    return new Date(b.createdAt) - new Date(a.createdAt);
                  case "most-liked":
                    return b.likes - a.likes;
                  default:
                    return posts;
                }
              })
              .map((post) => {
                return <CardPost key={post.id} post={post} />;
              })
          ) : (
            <p>Ooops. Parece que não tem posts para serem mostrados.</p>
          )}
        </div>
      </main>
    </>
  );
}
