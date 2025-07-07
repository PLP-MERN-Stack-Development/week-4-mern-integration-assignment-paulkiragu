import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { createPost, updatePost, getPostById } from '../services/postServices';

export default function PostForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (id) {
      getPostById(id).then(post => {
        setTitle(post.title);
        setContent(post.content);
      });
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postData = { title, content };
      if (id) {
        await updatePost(id, postData);
      } else {
        await createPost(postData);
      }
      navigate('/');
    } catch (error) {
      alert('Error saving post');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-full max-w-lg"
      >
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
          {id ? 'Edit Post' : 'Create Post'}
        </h2>

        <input
          className="w-full border border-gray-300 p-3 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          className="w-full border border-gray-300 p-3 rounded mb-6 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded font-semibold transition duration-200"
        >
          {id ? 'Update Post' : 'Create Post'}
        </button>
      </form>
    </div>
  );
}
