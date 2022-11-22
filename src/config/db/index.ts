import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  waitForConnections: true
})

pool.getConnection((err, connection) => {
  if (err) throw err
  console.log('Database connected successfully')
  connection.release()
})

export default pool
