var data = require("./fakeData");

module.exports = function(req, res) {
  try {
    var name = req.body.name;
    var job = req.body.job;
    var maxId = Math.max(...data.map(user => user.id));
    var newId = maxId + 1;

    var permissions = req.body.permissions;

    var newUser = {
      id: newId,
      name: name,
      job: job,
      permissions: permissions,
    };

    data.push(newUser);

    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erro ao processar a solicitação");
  }
};
