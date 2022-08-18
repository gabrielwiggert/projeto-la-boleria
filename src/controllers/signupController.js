import bcrypt from 'bcrypt';
import signupRepository from '../repositories/signupRepository.js';

export async function signup(req, res) {
  let {name, email, password} = req.body;

  const result = await signupRepository.checkEmail(email);

  if (result.rowCount > 0) {
    return res.sendStatus(409);
  }

  const encryptedPassword = bcrypt.hashSync(password, 10);
  password = encryptedPassword;

  try {
    await signupRepository.signup(name, email, password);
    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
}