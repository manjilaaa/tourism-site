// lib/db.js
import mysql from 'mysql2/promise';

// Set up MySQL connection pool
const pool = mysql.createPool({
  host: '127.0.0.1',        // Your MySQL host
  user: 'root',    // Your MySQL username
  password: '',// Your MySQL password
  database: 'patenagi',  // Your database name
});

export default pool; // Use promise-based API for easier async handling
