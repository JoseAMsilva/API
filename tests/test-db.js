const mariadb = require('mariadb');

require('dotenv').config();

async function testConnection() {
  let conn;
  try {
    console.log('Tentando conectar a:', process.env.DATABASE_HOST);
    conn = await mariadb.createConnection({
      host: process.env.DATABASE_HOST,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD.replace(/'/g, ''),
      database: process.env.DATABASE,
      port: Number(process.env.DATABASE_PORT) || 3306,
    });
    console.log('Conexão bem-sucedida!');
  } catch (err) {
    console.error('Erro de conexão detalhado:', err);
  } finally {
    if (conn) await conn.end();
  }
}

testConnection();
