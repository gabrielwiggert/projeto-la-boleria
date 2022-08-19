import connection from '../db/pgsql.js';

async function getOrders() {
	return connection.query(`SELECT "clientId" as client, "cakeId" as cake, id as "orderId", "createdAt", quantity, "totalPrice" FROM orders`);
}

async function getClients(id) {
	return connection.query(`SELECT * FROM clients WHERE id= $1`, [id]);
}

async function getCakes(id) {
	return connection.query(`SELECT * FROM cakes WHERE id= $1`, [id]);
}

const ordersRepository = {
	getOrders,
	getClients,
	getCakes
}

export default ordersRepository;