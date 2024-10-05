import { useNavigate } from 'react-router-dom';
import PostCard from '../components/PostCard';
import placeholder from '../dummy/dummy';
import { useAuth } from '../hooks/AuthProvider';
import { useEffect } from 'react';

function App() {
  const {isAuthenticated} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

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
        {placeholder.length > 0 ? (
          placeholder.map((post) => <PostCard {...post} key={post.id} />)
        ) : (
          <div>No posts...</div>
        )}{' '}
      </div>
    </div>
  );
}

export default App;
