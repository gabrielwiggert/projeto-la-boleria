import connection from '../db/pgsql.js';

async function getOrders() {
	return connection.query(`SELECT "clientId" as client, "cakeId" as cake, id as "orderId", "createdAt", quantity, "totalPrice" FROM orders`);
}

async function getOrdersFromDate(date) {
	return connection.query(`SELECT "clientId" as client, "cakeId" as cake, id as "orderId", "createdAt", quantity, "totalPrice" FROM orders WHERE "createdAt">= $1 AND "createdAt"<= $2`, [`${date} 00:00:00`, `${date} 23:59:59`]);
}

async function getClients(id) {
	return connection.query(`SELECT * FROM clients WHERE id= $1`, [id]);
}

async function getCakes(id) {
	return connection.query(`SELECT * FROM cakes WHERE id= $1`, [id]);
}

const ordersRepository = {
	getOrders,
	getOrdersFromDate,
	getClients,
	getCakes
}

export default ordersRepository;