import { useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
import { useAuth } from '../hooks/AuthProvider';
import { useEffect, useState } from 'react';

interface Post {
  id: number;
  title: string;
  content: string;
  author: { username: string };
}

function App() {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [err, setErr] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
    (async () => {
      try {
        const res = await fetch('https://backend-uoiu.onrender.com/api/posts');

        if (!res.ok) {
          throw new Error('Issue fetching data...');
        }

        const user = localStorage.getItem('user');

        const fetchedPosts = await res.json();
        const userSpecificPosts: Post[] = [...fetchedPosts].filter(
          (post) => post.author.username == user
        );
        setPosts(userSpecificPosts);
        setLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          setErr(e.message);
          console.log(e.message);
        }
      }
    })();
  }, [isAuthenticated, navigate]);

  if (loading) return <span>Loading...</span>;
  if (err !== '') return <span>{err}</span>;

  const handleDelete = (id: number) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div
        className="main posts"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '750px',
          width: '100%',
          padding: '8px',
        }}
      >
        <h2>My Posts</h2>
        {posts.length > 0 ? (
          posts.map((post) => (
            <PostCard {...post} key={post.id} onDelete={handleDelete} />
          ))
        ) : (
          <div>No posts...</div>
        )}{' '}
      </div>
    </div>
  );
}

export default App;
