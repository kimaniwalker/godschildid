import crypto from 'crypto'
import { v4 as uuidv4 } from 'uuid'
import excuteQuery from '../db'

/**
 * User Functions Listed Here To Create , Update , Delete , User Records
 */



export async function createUser({ username, password }) {
 
  let salt = crypto.randomBytes(16).toString('hex')
  let hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  let insertObject = {
    username,
    hash,
    salt,

  }

  try {
    const result = await excuteQuery({
      query: 'INSERT INTO users SET ?',
      values: [insertObject],
    });
    console.log(result);
    return result

  } catch (error) {
    console.log(error);
  }

}

export async function findUser({ username }) {

  try {
    const result = await excuteQuery({
      query: 'SELECT * FROM users where username = ?',
      values: [username],
    });
    console.log(result);
    return result[0]

  } catch (error) {
    console.log(error);
  }

}

// Compare the password of an already fetched user (using `findUser`) and compare the
// password for a potential match
export function validatePassword(user, inputPassword) {
  const inputHash = crypto
    .pbkdf2Sync(inputPassword, user.salt, 1000, 64, 'sha512')
    .toString('hex')
  const passwordsMatch = user.hash === inputHash
  return passwordsMatch
}

export async function resetpassword({ password , username }) {

  let salt = crypto.randomBytes(16).toString('hex')
  let hash = crypto
    .pbkdf2Sync(password, salt, 1000, 64, 'sha512')
    .toString('hex')
  let insertObject = {
    username,
    hash,
    salt,

  }

  try {
    const result = await excuteQuery({
      query: 'UPDATE users SET hash = ? , salt = ? where username = ?',
      values: [insertObject.hash , insertObject.salt, insertObject.username],
    });
    console.log(result);
    return result

  } catch (error) {
    console.log(error);
  }

}

export async function updateUser({ user, id }) {
 
    
  try {
    const result = await excuteQuery({
      query: 'UPDATE users SET ? where id = ?',
      values: [user, id],
    });
    console.log(result);
    return result

  } catch (error) {
    console.log(error);
  }

}


