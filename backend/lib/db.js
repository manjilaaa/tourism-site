// lib/db.js
import mysql from 'mysql2/promise';

// Set up MySQL connection pool
const pool = mysql.createPool({
  host: 'localhost',        // Your MySQL host
  user: 'root',  
  port:3306,  // Your MySQL username
  password: '#manjisroot#',// Your MySQL password
  database: 'ptdb',  // Your database name
});

export default pool; // Use promise-based API for easier async handling
