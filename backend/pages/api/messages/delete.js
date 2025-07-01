import pool from '../../../lib/db';


export default async function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.body;
    try {
      await pool.query('DELETE FROM messages WHERE id = ?', [id]);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error deleting message:', error);
      res.status(500).json({ error: 'Failed to delete message' });
    }
  }
}
