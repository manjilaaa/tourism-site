import pool from '../../../lib/db';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, rating } = req.body;

    if (!name || !rating ) {
      return res.status(400).json({ message: 'All fields required' });
    }

    try {
      const [result] = await pool.query(
        'INSERT INTO reviews (name, rating) VALUES (?, ?)',
        [name, rating]
      );
      return res.status(201).json({ message: 'Review submitted', id: result.insertId });
    } catch (err) {
      return res.status(500).json({ message: 'Database error', error: err });
    }
  }

  if (req.method === 'GET') {
    try {
      const [rows] = await pool.query('SELECT * FROM reviews ORDER BY created_at DESC');
      return res.status(200).json(rows);
    } catch (err) {
      return res.status(500).json({ message: 'Error fetching reviews', error: err });
    }
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}