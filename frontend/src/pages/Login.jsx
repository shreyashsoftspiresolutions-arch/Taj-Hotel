import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaHotel, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("isAdmin", "true"); // Adjust based on your role logic
        alert("Login Successful");
        navigate("/admin");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message || "Invalid Email or Password");
      } else {
        alert("An error occurred during login. Is the server running?");
      }
    }
  };

  return (
    <div className="auth-page">

      {/* Left Brand Panel */}
      <div className="auth-brand">
        <div className="auth-brand-content">
          <FaHotel className="auth-brand-icon" />
          <h1>Taj Palace</h1>
          <p>
            Welcome back. Sign in to manage your hotel dashboard and deliver
            world-class hospitality.
          </p>
          <div className="auth-brand-features">
            <span>✦ Real-time Analytics</span>
            <span>✦ Room Management</span>
            <span>✦ Guest Services</span>
          </div>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="auth-form-panel">
        <form className="auth-form" onSubmit={handleLogin} autoComplete="off">

          <div className="auth-form-header">
            <h2>Welcome Back</h2>
            <p>Sign in to your admin account</p>
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="you@tajpalace.com"
              autoComplete="new-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrap">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                autoComplete="new-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
                aria-label="Toggle password visibility"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          <button type="submit" className="auth-submit-btn">
            Sign In
          </button>

          <p className="auth-switch">
            Don&apos;t have an account?{" "}
            <Link to="/register">Create Account</Link>
          </p>

        </form>
      </div>

    </div>
  );
}