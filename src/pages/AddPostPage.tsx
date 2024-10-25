import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostCreateForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [err, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (title === '' && content === '' && !isPublished) {
      return setError("All fields can't be blank");
    }

    try {
      const res = await fetch('https://backend-uoiu.onrender.com/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          authorization: `Bearer ${localStorage.getItem('jwt')}`,
        },
        body: JSON.stringify({ title, content, published: isPublished }),
      });

      if (!res.ok) throw new Error('Error creating post');

      const data = await res.json();
      console.log(data);
    } catch (e) {
      if (e instanceof Error) {
        console.log(e.message);
      }
    }
    return navigate('/');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <br />
      <label>
        Content:
        <textarea
          style={{ resize: 'vertical', height: '275px', width: '100%' }}
          value={content}
          onChange={(event) => setContent(event.target.value)}
        />
      </label>
      <br />
      <label>
        Published:
        <input
          type="checkbox"
          checked={isPublished}
          onChange={(event) => setIsPublished(event.target.checked)}
        />
      </label>
      <br />
      <span style={{ color: 'red' }}>{err}</span>
      <br />
      <button type="submit">Create Post</button>
    </form>
  );
};

const AddPostPage = () => {
  return (
    <div
      style={{
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          maxWidth: '700px',
          width: '100%',
          padding: '8px',
        }}
      >
        <h1>Add Post</h1>
        <PostCreateForm />
      </div>
    </div>
  );
};

export default AddPostPage;
