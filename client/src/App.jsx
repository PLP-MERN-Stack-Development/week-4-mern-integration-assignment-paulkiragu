import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';

// Components & Pages
import Navbar from './components/Navbar';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import PostForm from './pages/PostForm';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />

          {/* Protected Create/Edit Routes */}
          <Route
            path="/create"
            element={user ? <PostForm /> : <Navigate to="/login" />}
          />
          <Route
            path="/edit/:id"
            element={user ? <PostForm /> : <Navigate to="/login" />}
          />

          {/* Auth Pages */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}
