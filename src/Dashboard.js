import React from 'react';

function Dashboard() {
  const email = localStorage.getItem('user_email');

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/';
  };

  return (
    <div style={{
      height: '100vh',
      background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'sans-serif'
    }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome to Your Dashboard</h1>
      <p style={{ marginBottom: '2rem' }}>Logged in as <strong>{email}</strong></p>
      <button onClick={handleLogout} style={{
        padding: '10px 20px',
        backgroundColor: '#e53935',
        color: 'white',
        border: 'none',
        borderRadius: '6px',
        cursor: 'pointer'
      }}>
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
