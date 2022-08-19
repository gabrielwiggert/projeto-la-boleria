import connection from '../db/pgsql.js';

async function createClient(name, address, phone) {
	return connection.query(`INSERT INTO clients (name, address, phone) VALUES ($1, $2, $3);`, [name, address, phone]);
}

async function getOrdersByClientId(id) {
	return connection.query(`SELECT orders.id as "orderId", orders.quantity, orders."createdAt", orders."totalPrice", cakes.name as "cakeName" FROM orders JOIN cakes ON orders."cakeId"=cakes.id WHERE orders."clientId"= $1`, [id]);
}

const clientsRepository = {
	createClient,
	getOrdersByClientId
}

export default clientsRepository;