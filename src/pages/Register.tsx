import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="main register" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
      <form style={{ width: "fit-content" }} method="POST" onSubmit={undefined}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          <label htmlFor="username" style={{ display: "flex", flexDirection: "column" }}>
            Username
            <input type="text" name="username" title="Special characters and spaces are not allowed" required />
          </label>
          <label htmlFor="email" style={{ display: "flex", flexDirection: "column" }}>
            Email
            <input type="email" name="email" title="Email required" required />
          </label>
          <label htmlFor="password" style={{ display: "flex", flexDirection: "column" }}>
            Password
            <input type="password" name="password" title="Special characters and spaces are not allowed" required />
          </label>
          <button style={{ width: "fit-content" }}>Register</button>
          <div className="errors" style={{ color: "red" }}>{undefined}</div>
        </div>
      </form>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <span>Already have an account?</span>
        <Link to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Register;
