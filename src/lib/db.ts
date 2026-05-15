import { Pool, type PoolConfig } from 'pg';

const poolConfig: PoolConfig = {
  connectionString: process.env.DATABASE_URL,
  max: 10,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 5000,
};

// Allow SSL in production
if (process.env.NODE_ENV === 'production' && !process.env.DATABASE_URL?.includes('localhost')) {
  poolConfig.ssl = { rejectUnauthorized: false };
}

export const pool = new Pool(poolConfig);

export async function query<T>(text: string, params?: unknown[]): Promise<T[]> {
  const start = Date.now();
  const res = await pool.query(text, params);
  const duration = Date.now() - start;
  if (process.env.NODE_ENV === 'development') {
    console.log('Executed query', { text, duration: duration + 'ms', rows: res.rowCount });
  }
  return res.rows as T[];
}

export async function getClient() {
  const client = await pool.connect();
  return client;
}
