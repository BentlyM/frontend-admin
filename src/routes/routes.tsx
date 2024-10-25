import { RouteObject } from 'react-router-dom';
import Navbar from '../components/NavBar';
import Login from '../pages/Login';
import Register from '../pages/Register';
import EditPostPage from '../pages/EditPostPage';
import App from '../pages/App';
import AuthProvider from '../hooks/AuthProvider';
import AddPostPage from '../pages/AddPostPage';

interface Route {
  path?: string;
  element: React.ReactNode;
  index?: boolean;
  children?: Route[];
}

const routes: Route[] = [
  {
    path: '/',
    element: (
      <AuthProvider>
        <Navbar />
      </AuthProvider>
    ),
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/edit-post/:id',
        element: <EditPostPage />,
      },
      {
        path: '/add',
        element: <AddPostPage />
      }
    ],
  },
];

export default routes as RouteObject[];
