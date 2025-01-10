import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [error, setError] = useState('');
  const [isAdding, setIsAdding] = useState(false); // Bug: Unused state creates confusion

  useEffect(() => {
    fetch('http://localhost:5001/users')
      .then((response) => response.json())
      .then((data) => {
        // Ensure users is always an array
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error('Invalid data format:', data);
          setUsers([]); // Fallback to an empty array
        }
      })
      .catch((err) => {
        console.error('Error fetching users:', err);
        setError('Failed to fetch users!');
      });
  }, []);

  const addUser = () => {
    if (!username) {
      setError('Username is required!');
      return;
    }

    setIsAdding(true); // Bug: Never set back to false

    fetch('http://localhost:5001/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to add user');
        }
        return response.json();
      })
      .then((data) => {
        setUsers([...users, data]);
        setUsername('');
        setError('');
      })
      .catch((err) => setError(err.message));
  };

  const clearAllUsers = () => {
    fetch('http://localhost:5001/users', {
      method: 'DELETE',
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to clear users');
        }
        setUsers([]);
      })
      .catch((err) => setError(err.message));
  };

  const searchUsers = () => {
    if (!searchQuery) {
      setError('Search query cannot be empty!');
      return;
    }

    fetch(`http://localhost:5001/users?query=${searchQuery}`)
      .then((response) => response.json())
      .then((data) => {
        // Ensure users is always an array
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          console.error('Invalid data format:', data);
          setUsers([]); // Fallback to an empty array
        }
      })
      .catch((err) => setError('Search failed!'));
  };

  return (
    <div className="App">
      <h1>User Management</h1>
      <input
        type="text"
        placeholder="Enter Ussername" // Bug: Placeholder typo remains
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={addUser}>Add User</button>
      <button onClick={clearAllUsers} style={{ marginLeft: '10px' }}>
        Clear All Users
      </button>
      <p style={{ color: 'red', marginTop: '20px' }}>{error}</p>
      <h2>Users</h2>
      <input
        type="text"
        placeholder="Search Usernames"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={searchUsers}>Search</button>
      <ul>
        {users.length === 0 && <p>No users found.</p>}
        {users.map((user, index) => (
          <li
            key={index}
            style={{
              color: index % 2 === 0 ? 'blue' : 'green', // Bug: Alternating colors but no clear reason
            }}
          >
            {user.username} {user.username} {/* Bug: Duplicate display */}
          </li>
        ))}
      </ul>
      {/* Bug: Button with no functionality */}
      <button>Broken Button</button>
    </div>
  );
}

export default App;
