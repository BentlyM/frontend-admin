import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  const auth = undefined;

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
            <a style={{ textDecoration: 'none', color: 'white' }} href={!auth ? '/login' : '/'}> 
              Author's oasis
            </a>
          </h2>
          <span>
            <a style={{ textDecoration: 'none', color: 'white' }} href="/">
              {auth && 'My Post' }
            </a>
          </span>
        </div>

        {typeof auth != 'undefined' ? (
          <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap: '10px'}}>
            <span>Welcome {undefined}!</span>
            <button onClick={() => {}} className="btn-submit" style={{width: 'fit-content', height: 'fit-content'}}>
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
