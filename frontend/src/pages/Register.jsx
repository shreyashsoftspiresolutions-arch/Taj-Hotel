import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaHotel, FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css"; /* Reuse auth page styles */

export default function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  // Simple password strength indicator
  const getPasswordStrength = () => {
    const p = user.password;
    if (p.length === 0) return { level: 0, text: "", color: "" };
    if (p.length < 6) return { level: 1, text: "Weak", color: "var(--danger)" };
    if (p.length < 10) return { level: 2, text: "Medium", color: "var(--warning)" };
    return { level: 3, text: "Strong", color: "var(--success)" };
  };

  const strength = getPasswordStrength();

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", user);
      if (response.data.success) {
        alert("Registration Successful!");
        navigate("/login");
      }
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message || "Registration failed");
      } else {
        alert("An error occurred during registration. Is the server running?");
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
            Join our team. Create an account to access the hotel management
            dashboard and start delivering excellence.
          </p>
          <div className="auth-brand-features">
            <span>✦ Instant Access</span>
            <span>✦ Secure Platform</span>
            <span>✦ Full Management Suite</span>
          </div>
        </div>
      </div>

      {/* Right Form Panel */}
      <div className="auth-form-panel">
        <form className="auth-form" onSubmit={handleRegister} autoComplete="off">

          <div className="auth-form-header">
            <h2>Create Account</h2>
            <p>Fill in your details to get started</p>
          </div>

          <div className="input-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              autoComplete="off"
              value={user.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              placeholder="you@tajpalace.com"
              autoComplete="new-email"
              value={user.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <div className="password-wrap">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Create a strong password"
                autoComplete="new-password"
                value={user.password}
                onChange={handleChange}
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
            {/* Password Strength Indicator */}
            {user.password.length > 0 && (
              <div className="password-strength">
                <div className="strength-bars">
                  {[1, 2, 3].map((bar) => (
                    <div
                      key={bar}
                      className="strength-bar"
                      style={{
                        background: bar <= strength.level ? strength.color : "var(--gray-200)",
                      }}
                    ></div>
                  ))}
                </div>
                <span style={{ color: strength.color, fontSize: "12px", fontWeight: 600 }}>
                  {strength.text}
                </span>
              </div>
            )}
          </div>

          <button type="submit" className="auth-submit-btn">
            Create Account
          </button>

          <p className="auth-switch">
            Already have an account?{" "}
            <Link to="/login">Sign In</Link>
          </p>

        </form>
      </div>

    </div>
  );
}