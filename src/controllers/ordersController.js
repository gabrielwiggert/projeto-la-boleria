import ordersRepository from '../repositories/ordersRepository.js';

export async function getOrders(req, res) {
  let { date } = req.query;
  let resultOrders;

  if (date) {
    resultOrders = await ordersRepository.getOrdersFromDate(date);
  } else {
    resultOrders = await ordersRepository.getOrders();
  }

  if (resultOrders.rowCount === 0) {
    return res.status(404).send(resultOrders.rows);
  }
  
  try {
     for (let i = 0; i < resultOrders.rowCount; i++) {
      let clientInfo = await ordersRepository.getClients(resultOrders.rows[i].client);
      let cakeInfo = await ordersRepository.getCakes(resultOrders.rows[i].cake);
      resultOrders.rows[i].client = clientInfo.rows[0];
      resultOrders.rows[i].cake = cakeInfo.rows[0];
     }
    res.status(200).send(resultOrders.rows);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}