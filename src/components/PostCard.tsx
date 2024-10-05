const PostCard = ({
  id,
  title,
  content,
  author,
}: {
  id: number;
  title: string;
  content: string;
  author: { username: string };
}) => {
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
      <div style={{display: 'flex', gap: '5px'}}>
        <a href="#">Delete</a>
        <em>Or</em>
        <a href={`/edit-post/${id}`} style={{ width: 'fit-content' }}>
          Edit
        </a>
      </div>
    </div>
  );
};

export default PostCard;
