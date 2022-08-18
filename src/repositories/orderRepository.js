import connection from '../db/pgsql.js';

async function createOrder(clientId, cakeId, quantity, totalPrice) {
	return connection.query(`INSERT INTO orders ("clientId", "cakeId", quantity, "totalPrice") VALUES ($1, $2, $3, $4);`, [clientId, cakeId, quantity, totalPrice]);
}

async function checkClient(id) {
	return connection.query(`SELECT * FROM clients WHERE id= $1`, [id]);
}

async function checkCake(id) {
	return connection.query(`SELECT * FROM cakes WHERE id= $1`, [id]);
}

const orderRepository = {
	createOrder,
	checkClient,
	checkCake
}

export default orderRepository;