import React, { useState, useEffect } from 'react';
import { GoogleLogin } from '@react-oauth/google';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Custom CSS file for styles

const BACKEND_URL = "http://127.0.0.1:8000/acc/auth/google/";

function Login() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('access_token');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLoginSuccess = async (credentialResponse) => {
    setError(null);
    setLoading(true);

    try {
      const res = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_token: credentialResponse.credential })
      });

      const data = await res.json();
      setLoading(false);

      if (data.status === 'success') {
        localStorage.setItem('access_token', data.data.access_token);
        localStorage.setItem('refresh_token', data.data.refresh_token);
        localStorage.setItem('user_email', data.data.user.email);
        navigate('/dashboard');
      } else {
        setError(data.message || 'Login failed.');
      }
    } catch (err) {
      setLoading(false);
      setError('Network error: ' + err.message);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Sign in with Google</h2>

        <div className="google-login-wrapper">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={() => setError('Google Sign-In failed')}
          />
        </div>

        {loading && (
          <div className="loading-spinner">
            <div className="spinner"></div>
            <span>Authenticating...</span>
          </div>
        )}

        {error && (
          <p className="login-error">❌ {error}</p>
        )}
      </div>
    </div>
  );
}

export default Login;
