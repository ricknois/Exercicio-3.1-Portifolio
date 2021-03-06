const { italic } = require("chalk");
const { exportAllDeclaration } = require("@babel/types");

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

it('Teste nome', async () => {
  const nm = await getUserName(4);
  expect(nm).toEqual('Mark')
})

it('return erro', async () => {
  try {
    await getUserName(1);
  }catch (error){
    expect(error).toEqual({ error: 'User with 1 not found.' });
  }
})