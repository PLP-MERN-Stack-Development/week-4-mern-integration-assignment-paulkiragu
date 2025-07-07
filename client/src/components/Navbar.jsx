import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between">
      <div className="flex gap-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        {user && <Link to="/create" className="hover:text-gray-400">Create Post</Link>}
      </div>
      <div className="flex gap-4">
        {user ? (
          <>
            <span>{user.email}</span>
            <button onClick={logout} className="hover:text-gray-400">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="hover:text-gray-400">Login</Link>
            <Link to="/register" className="hover:text-gray-400">Register</Link>
          </>
        )}
      </div>
    </nav>
  );
}
