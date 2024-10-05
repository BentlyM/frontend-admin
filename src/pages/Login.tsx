import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/AuthProvider";
import React, { useEffect, useState } from "react";

const Login = () => {
  const {isAuthenticated, login} = useAuth();
  const [err , setErr] = useState<void | string>();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    const target = e.currentTarget as HTMLFormElement & {
      email: { value: string };
      password: { value: string };
    };
  
    const email = target.email.value;
    const password = target.password.value;
    

    setErr(await login({email, password}));
  };

  return (
    <div className="main login"  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      <form style={{width: 'fit-content'}} method="POST" onSubmit={handleLogin}>
        <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
          <label htmlFor="email" style={{display: 'flex', flexDirection: 'column'}}>
            email
            <input
              type="email"
              name="email"
              title="email required to login"
              required
            />
          </label>
          <label htmlFor="password" style={{display: 'flex', flexDirection: 'column'}}>
            password
            <input
              type="password"
              name="password"
              title="Special characters and spaces are not allowed"
              required
            />
          </label>
          <button style={{width: 'fit-content'}}>Login</button>
          <div className="errors" style={{color: 'red'}}>{String(err ? err : '')}</div>
        </div>
      </form>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <span>Don't have an account?</span>
        <Link to={"/register"}>Register</Link>
      </div>
    </div>
  );
};

export default Login;
