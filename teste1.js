const data = require("./fakeData");

const getUser = (req, res, next) => {
  const name = req.query.name;
  const id = parseInt(req.query.id);
  const job = req.query.job;

  let users = data;

  if (name) {
    users = users.filter((user) => user.name === name);
  }

  if (!isNaN(id)) {
    users = users.filter((user) => user.id === id);
  }

  if (job) {
    users = users.filter((user) => user.job === job);
  }

  if (users.length > 0) {
    res.send(users);
  } else {
    res.status(404).send("Usuário(s) não encontrado(s)");
  }
};

const getUsers = (req, res, next) => {
  res.send(data);
};

module.exports = {
  getUser,
  getUsers
};
