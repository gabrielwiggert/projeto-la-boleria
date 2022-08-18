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