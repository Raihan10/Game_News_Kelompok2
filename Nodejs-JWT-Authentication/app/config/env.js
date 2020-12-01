const env = {
  database: 'GameNews',
  username: 'admin',
  password: 'raihan01',
  host: 'localhost',
  dialect: 'postgres',
  pool: {
	  max: 5,
	  min: 0,
	  acquire: 30000,
	  idle: 10000
  }
};
 
module.exports = env;
