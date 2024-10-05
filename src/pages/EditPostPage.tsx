import { useState } from 'react';
import { useParams } from 'react-router-dom';

const PostUpdateForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isPublished, setIsPublished] = useState(false);
  const [err , setError] = useState('');
  const {id} = useParams();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if(title == '' && content == '' && !isPublished){return setError('all fields cant be blank')};

    try {
        const res = await fetch(`https://backend-uoiu.onrender.com/api/posts/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                title: title,
                content: content,
                published: isPublished,
            })
        })

        if(!res.ok) throw new Error('Error fetching data');

        const data = await res.json();

        console.log(data);
    }catch(e){
        if(e instanceof Error){
            console.log(e.message);
        }
    }
    console.log('Post updated:', { title, content, isPublished });
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
        />
      </label>
      <br/>
      <span style={{color: 'red'}}>{err}</span>
      <br />
      <button type="submit">Update Post</button>
    </form>
  );
};

const EditPostPage = () => {
  return (
    <div style={{width: '100vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
