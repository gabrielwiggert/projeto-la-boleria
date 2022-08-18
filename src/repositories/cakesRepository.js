import connection from '../db/pgsql.js';

async function createCake(name, price, image, description) {
	return connection.query(`INSERT INTO cakes (name, price, image, description) VALUES ($1, $2, $3, $4);`, [name, price, image, description]);
}

async function checkCake(name) {
	return connection.query(`SELECT * FROM cakes WHERE name= $1`, [name]);
}

const cakesRepository = {
	createCake,
	checkCake
}
export default cakesRepository;