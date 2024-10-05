type author = { username: string };
interface Post {
  id: number;
  title: string;
  content: string;
  author: author;
}

const placeholder: Post[] = [
    {
      id: 1,
      title: 'Introduction to React',
      content:
        'React is a popular JavaScript library for building user interfaces.',
      author: { username: 'johnDoe' },
    },
    {
      id: 2,
      title: 'The Benefits of Meditation',
      content: 'Meditation has been shown to reduce stress and improve focus.',
      author: { username: 'janeSmith' },
    },
    {
      id: 3,
      title: 'The Best Programming Languages for Beginners',
      content:
        'Some of the best programming languages for beginners include Python, JavaScript, and HTML/CSS.',
      author: { username: 'bobJohnson' },
    },
    {
      id: 4,
      title: 'The Importance of Exercise',
      content: 'Regular exercise can help improve physical and mental health.',
      author: { username: 'aliceWilliams' },
    },
    {
      id: 5,
      title: 'The Top 5 Books for Learning React',
      content:
        'Some of the top books for learning React include "React: Up & Running" and "React in Action".',
      author: { username: 'mikeDavis' },
    },
    {
      id: 6,
      title: 'The Benefits of Learning a New Language',
      content:
        'Learning a new language can improve cognitive skills and open up new career opportunities.',
      author: { username: 'emilyChen' },
    },
    {
      id: 7,
      title: 'The Best Ways to Improve Your Writing Skills',
      content:
        'Some of the best ways to improve your writing skills include reading widely and practicing regularly.',
      author: { username: 'davidLee' },
    },
    {
      id: 8,
      title: 'The Top 5 Tools for Web Development',
      content:
        'Some of the top tools for web development include Visual Studio Code and Chrome DevTools.',
      author: { username: 'sarahTaylor' },
    },
    {
      id: 9,
      title: 'The Importance of Time Management',
      content:
        'Effective time management can help improve productivity and reduce stress.',
      author: { username: 'kevinWhite' },
    },
    {
      id: 10,
      title: 'The Benefits of Learning to Code',
      content:
        'Learning to code can improve problem-solving skills and open up new career opportunities.',
      author: { username: 'oliviaBrown' },
    },
  ];

export default placeholder;