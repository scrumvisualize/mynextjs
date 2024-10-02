'use client';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; 
import { useAuth } from '../contexts/authContext';

const Navbar = () => {
  
  const router = useRouter();
  const { state, dispatch } = useAuth();

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      const loginName = localStorage.getItem('loginName');
      dispatch({ type: 'LOGIN', payload: loginName});
    }
  }, [dispatch]);
  

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('loginEmail');
    dispatch({ type: 'LOGOUT' });
    router.push('/');
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
        <ul className="flex space-x-4">
          <li>
            <Link href="/" legacyBehavior>
              <a className="text-white">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a className="text-white">About</a>
            </Link>
          </li>
          {state.isAuthenticated && (
            <>
              <li>
                <Link href="/admin" legacyBehavior>
                  <a className="text-white">Admin</a>
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className="text-white">Logout</button>
              </li>
            </>
          )}
          {!state.isAuthenticated && (
            <li>
              <Link href="/login" legacyBehavior>
                <a className="text-white">Login</a>
              </Link>
            </li>
          )}
        </ul>
        {state.isAuthenticated && (
          <div className="ml-auto">
            <span className="text-white">Welcome, {state.loginName}</span>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;