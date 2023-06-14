const { Pool } = require('pg');

let connect = async function () {
  try {
    if (global.connection) {
      return Promise.resolve(global.connection);
    }

    const pool = new Pool({
      //connectionString: 'postgres://postgres:postgres@localhost/joseinfo5a'
      connectionString: 'postgres://xdskxatb:foFqC6C7BaDBMyp4Vyz480YEnM9Xs3Xk@motty.db.elephantsql.com/xdskxatb'
    });

    global.connection = pool;
    return Promise.resolve(pool);
  } catch (error) {
    console.error('Erro ao estabelecer a conexão:', error);
    throw error;
  }
};

module.exports = { connect };
