import connection from '../db/pgsql.js';

async function signup(name, email, password) {
	return connection.query(`INSERT INTO users ("name", "email", "password") VALUES ($1, $2, $3);`, [name, email, password]);
}

async function checkEmail(email) {
	return connection.query(`SELECT * FROM users WHERE email= $1`, [email]);
}

const signupRepository = {
	signup,
	checkEmail
}
export default signupRepository;