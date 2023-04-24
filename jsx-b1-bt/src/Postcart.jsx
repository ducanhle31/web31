import "./post.css";

export default function PostCard({ post }) {
  post.title = "123asdf";

  return (
    <article className="post">
      <a href={`/posts/${post.id}`} className="post-link">
        <img src={post.image} alt={post.title} className="post-thumbnail" />

        <h3 className="post-title">{post.title}</h3>

        <p className="post-excerpt">{post.excerpt}</p>

        <div className="post-meta">
          <div className="post-view">{post.view}</div>
          <div className="post-published-at">{post.publishedAt}</div>
        </div>
      </a>
    </article>
  );
}
