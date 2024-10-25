const PostCard = ({
  id,
  title,
  content,
  author,
  onDelete, // New prop to handle post deletion
}: {
  id: number;
  title: string;
  content: string;
  author: { username: string };
  onDelete: (id: number) => void;
}) => {
  const handleClick = async () => {
    try {
      const res = await fetch(
        `https://backend-uoiu.onrender.com/api/posts/${id}`,
        {
          method: 'DELETE',
          headers: {
            authorization: `Bearer ${localStorage.getItem('jwt')}`,
          },
        }
      );

      if (!res.ok) throw new Error('Failed to delete post');
      onDelete(id); // Call the onDelete function passed from the parent
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        backgroundColor: '#fff',
        border: '1px solid gray',
        padding: '8px',
        display: 'flex',
        flexDirection: 'column',
        gap: '3px',
      }}
    >
      <h4
        style={{
          backgroundColor: 'purple',
          boxShadow: '2px 10px 0 -7px #d946ef',
          color: '#fff',
          marginBottom: '8px',
          marginTop: '0px',
        }}
      >
        {title}
      </h4>
      <p>{content}</p>
      <span>
        - by <em>{author ? author.username : 'anonymous'}</em>
      </span>
      <div style={{ display: 'flex', gap: '5px' }}>
        <button
          style={{
            backgroundColor: 'transparent',
            border: 'none',
            fontSize: '15px',
            padding: '0',
            cursor: 'pointer',
            textDecoration: 'underline',
          }}
          onClick={handleClick}
        >
          Delete
        </button>
        <em>Or</em>
        <a href={`/edit-post/${id}`} style={{ width: 'fit-content' }}>
          Edit
        </a>
      </div>
    </div>
  );
};

export default PostCard;
