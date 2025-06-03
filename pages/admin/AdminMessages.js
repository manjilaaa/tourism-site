import { useEffect, useState } from 'react';

const AdminMessages = () => {
  const [messages, setMessages] = useState([]);

  const fetchMessages = async () => {
    const res = await fetch('/api/messages');
    const data = await res.json();
    setMessages(data);
  };

  const deleteMessage = async (id) => {
    const res = await fetch('/api/messages/delete', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    if (res.ok) {
      fetchMessages(); // Refresh after delete
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <div className="admin-messages">
      <h2>Contact Messages</h2>
      {messages.length === 0 ? (
        <p>No messages found.</p>
      ) : (
        <ul>
          {messages.map(msg => (
            <li key={msg.id}>
              <p><strong>Name:</strong> {msg.name}</p>
              <p><strong>Email:</strong> {msg.email}</p>
              <p><strong>Message:</strong> {msg.message}</p>
              <button onClick={() => deleteMessage(msg.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminMessages;
