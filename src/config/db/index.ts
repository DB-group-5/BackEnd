import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 5771,
  waitForConnections: true
})

pool.getConnection((err, connection) => {
  try {
    console.log('Database connected successfully')
    connection.release()
  } catch (error) {
    console.log(err)
  }
})

export default pool
