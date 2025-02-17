import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostUpdateForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [err, setError] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://backend-uoiu.onrender.com/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setIsPublished(data.published);
        setIsLoading(false);
      });
  }, [id]);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (title == '' && content == '' && !isPublished) {
      return setError('all fields cant be blank');
    }
    console.log(
      JSON.stringify({
        title: title,
        content: content,
        published: isPublished,
      })
    );

    try {
      const res = await fetch(
        `https://backend-uoiu.onrender.com/api/posts/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
          body: JSON.stringify({
            title: title,
            content: content,
            published: isPublished,
          }),
        }
      );

      if (!res.ok) throw new Error('Error fetching data');

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
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          disabled={isLoading}
        />
      </label>
      <br />
      <label>
        Content:
        <textarea
          style={{ resize: 'vertical', height: '275px', width: '100%' }}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
          disabled={isLoading}
        />
      </label>
      <br />
      <label>
        Published:
        <input
          type="checkbox"
          checked={isPublished}
          onChange={(event) => {
            setIsPublished(event.target.checked);
          }}
          disabled={isLoading}
        />
      </label>
      <br />
      <span style={{ color: 'red' }}>{err}</span>
      <br />
      <button type="submit">Update Post</button>
    </form>
  );
};

const EditPostPage = () => {
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
        <h1>Edit Post</h1>
        <PostUpdateForm />
      </div>
    </div>
  );
};

export default EditPostPage;
