import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../services/postServices';

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPosts().then(setPosts).finally(() => setLoading(false));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>
      {loading ? (
        <p>Loading posts...</p>
      ) : (
        posts.map(post => (
          <div key={post._id} className="mb-4 p-4 border">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600">{post.content.slice(0, 150)}...</p>
            <Link to={`/posts/${post._id}`} className="text-blue-600">Read More</Link>
          </div>
        ))
      )}
    </div>
  );
}
