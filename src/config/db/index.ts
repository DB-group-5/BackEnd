import mysql from 'mysql2'
import dotenv from 'dotenv'

dotenv.config()
let option = {}
console.log('App is running in environment: ', process.env.NODE_ENV)
if (process.env.NODE_ENV === 'development') {
  option = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'fabric_store',
    port: 3306,
    waitForConnections: true
  }
} else if (process.env.NODE_ENV === 'production') {
  option = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    port: process.env.DB_PORT,
    waitforconnections: true
  }
}

const pool = mysql.createPool(option)

pool.getConnection((err, connection) => {
  try {
    console.log('Database connected successfully')
    connection.release()
  } catch (error) {
    console.log(err)
  }
})

export default pool
