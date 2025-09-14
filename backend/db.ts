import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config({ path: 'feedback.env' });

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: process.env.PG_USER,
  password: process.env.PG_PASS,
  database: process.env.PG_DB,
});

export default pool;