import { useNavigate, useParams } from "react-router";
import PostContainer from "../../components/Post/PostContainer/PostContainer";
import { userAPI } from "../../services/UserService";
import style from "./posts.module.scss";

const Posts = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    isLoading,
    isError,
    data: posts,
  } = userAPI.useFetchUserPostsQuery(+id!);

  console.log(posts);

  return (
    <div className={style.container}>
      <button onClick={() => navigate(-1)} className={style.backButton}>Go back</button>
      <h1>Posts list</h1>
      {isLoading && <h3>Loading...</h3>}
      {isError && <h3>Omg we have a problem...</h3>}
      {posts && <PostContainer posts={posts} />}
    </div>
  );
};

export default Posts;
