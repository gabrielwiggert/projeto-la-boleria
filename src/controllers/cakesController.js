import cakesRepository from '../repositories/cakesRepository.js';

export async function createCake(req, res) {
  let {name, price, image, description} = req.body;

  const result = await cakesRepository.checkCake(name);

  if (result.rowCount > 0) {
    return res.sendStatus(409);
  }

  try {
    await cakesRepository.createCake(name, price, image, description);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}