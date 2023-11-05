import Post from "../post/post";
import "./posts.css";
import img from '../../images/card1.png';
export default function Posts({post}) {
  return (
    <div className="posts">
      {/* {post.map((p) => (
        <Post post={p} />
      ))} */}
      {/* <Post/>
      <Post/>
      <Post/>
      <Post/> */}
    </div>
  );
}