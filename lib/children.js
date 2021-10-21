import excuteQuery from "../db";

export async function addChild({ newchild }) {


  try {
    const result = await excuteQuery({
      query: 'INSERT INTO children SET ?',
      values: [newchild],
    });
    console.log(result);
    return result

  } catch (error) {
    console.log(error);
  }

}

export async function updateChild({ child, id }) {


  try {
    const result = await excuteQuery({
      query: 'UPDATE children SET ? where id = ?',
      values: [child, id],
    });
    console.log(result);
    return result

  } catch (error) {
    console.log(error);
  }

}

export async function removeChild({ id }) {


  try {
    const result = await excuteQuery({
      query: 'DELETE from children where id = ?',
      values: [id],
    });
    console.log(result);
    return result

  } catch (error) {
    console.log(error);
  }

}

export async function getOne({ id }) {


  try {
    const result = await excuteQuery({
      query: 'SELECT * FROM children where id = ?',
      values: [id],
    });
    console.log(result)
    return result[0]

  } catch (error) {
    console.log(error);
  }

}

export async function getmykids({ parentid }) {


  try {
    const result = await excuteQuery({
      query: 'SELECT * FROM children where parentid = ?',
      values: [parentid],
    });
    console.log(result);
    return result

  } catch (error) {
    console.log(error);
  }

}

