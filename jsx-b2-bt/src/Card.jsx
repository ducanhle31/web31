
export default function Card({ post }) {


  return (
    <article className="post">
      <a href={`/users/${post.id}`} className="post-link">
        <img src={post.avatar} className="post-thumbnail" />
        <h3>{post.email}</h3>
        <h3 className="post-title">{post.first_name}</h3>

        <p className="post-excerpt">{post.last_name}</p>

      
      </a>
    </article>
  );
}
