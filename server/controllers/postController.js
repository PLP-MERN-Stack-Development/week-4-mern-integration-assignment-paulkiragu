const Post = require('../models/Post');

// Get all posts
exports.getPosts = async (req, res) => {
  const posts = await Post.find().populate('author', 'username email');
  res.json(posts);
};

// Get single post
exports.getPost = async (req, res) => {
  const post = await Post.findById(req.params.id).populate('author', 'username email');
  res.json(post);
};

// Create post (protected)
exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'Title and content are required' });

  const post = new Post({ title, content, author: req.user.userId });
  await post.save();
  res.status(201).json(post);
};

// Update post (protected)
exports.updatePost = async (req, res) => {
  const post = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(post);
};

// Delete post (protected)
exports.deletePost = async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.status(204).end();
};
