import Post from "../post/Post";
import "./Posts.css";

export default function Posts(props) {
  return (
    <div className="posts">
      {props.posts.map((p) => {
        return <Post key={p.title} post={p} />;
      })}
    </div>
  );
}
