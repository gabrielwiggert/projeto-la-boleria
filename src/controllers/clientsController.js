import clientsRepository from '../repositories/clientsRepository.js';

export async function createClient(req, res) {
  let {name, address, phone} = req.body;

  try {
    await clientsRepository.createClient(name, address, phone);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}

export async function getOrdersByClientId(req, res) {
  let { id } = req.params;
  
  try {
    const resultOrders = await clientsRepository.getOrdersByClientId(id);

    if (resultOrders.rowCount === 0) {
      return res.status(404).send(resultOrders.rows);
    }

    res.status(200).send(resultOrders.rows);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}