import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPostById } from '../services/postServices';

export default function PostDetail() {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPostById(id).then(setPost);
  }, [id]);

  return (
    <div className="p-4">
      {post ? (
        <>
          <h1 className="text-2xl font-bold mb-2">{post.title}</h1>
          <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
        </>
      ) : (
        <p>Loading post...</p>
      )}
    </div>
  );
}
