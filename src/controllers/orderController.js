import orderRepository from '../repositories/orderRepository.js';

export async function createOrder(req, res) {
  let {clientId, cakeId, quantity, totalPrice} = req.body;

  const resultClient = await orderRepository.checkClient(clientId);
  const resultCake = await orderRepository.checkCake(cakeId);

  if (resultClient.rowCount === 0 || resultCake.rowCount === 0) {
    return res.sendStatus(404);
  }

  try {
    await orderRepository.createOrder(clientId, cakeId, quantity, totalPrice);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}