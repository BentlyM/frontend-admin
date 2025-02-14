import { Link, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/AuthProvider';

const Navbar = () => {
  const { isAuthenticated, logout } = useAuth();
  const user = localStorage.getItem('user');

  return (
    <>
      <nav
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: 'purple',
          boxShadow: '2px 10px 0 -7px #d946ef',
          paddingBottom: '5px',
          width: '100%',
          color: 'white',
        }}
      >
        <div>
          <h2 style={{ margin: 0 }}>
            <a
              style={{ textDecoration: 'none', color: 'white' }}
              href={!isAuthenticated ? '/login' : '/'}
            >
              Author's oasis
            </a>
          </h2>
          <span>
            <ul
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                listStyle: 'none',
                padding: 0,
                margin: 0,
                gap: '5%'
              }}
            >
              <li>
                <a style={{ textDecoration: 'none', color: 'white' }} href="/">
                  {isAuthenticated && 'My Post'}
                </a>
              </li>
              <li>
                <a style={{ textDecoration: 'none', color: 'white' }} href="/add">
                  {isAuthenticated && 'Add Post'}
                </a>
              </li>
            </ul>
          </span>
        </div>

        {isAuthenticated ? (
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <span>Welcome {user}!</span>
            <button
              onClick={() => logout()}
              className="btn-submit"
              style={{ width: 'fit-content', height: 'fit-content' }}
            >
              logout
            </button>
          </div>
        ) : (
          <div>
            <ul style={{ listStyle: 'none', display: 'flex', gap: '15px' }}>
              <li>
                <Link
                  to={'/login'}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to={'/register'}
                  style={{ textDecoration: 'none', color: 'white' }}
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
