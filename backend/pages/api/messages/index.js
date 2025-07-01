import pool from '../../../lib/db';

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*'); // Frontend origin
  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
   res.status(200).end();
   return; // Handle preflight request
}

  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    try {
      await pool.query(
        'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
        [name, email, message]
      );
      res.status(200).json({ message: 'Message saved successfully' });
    } catch (error) {
      console.error('Error saving message:', error);
      res.status(500).json({ error: 'Failed to save message' });
    }
  } else if (req.method === 'GET') {
    try {
      const [rows] = await pool.query('SELECT * FROM messages ORDER BY created_at DESC');
      res.status(200).json(rows);
    } catch (error) {
      console.error('Error fetching messages:', error);
      res.status(500).json({ error: 'Failed to fetch messages' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
