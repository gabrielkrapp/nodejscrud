var data = require("./fakeData");

module.exports = function(req, res) {
  var id = parseInt(req.query.id);

  var user = data.find(item => item.id === id);

  if (user) {
    user.name = req.body.name;
    user.job = req.body.job;
    user.permissions = req.body.permissions;

    res.send(user);
  } else {
    res.status(404).send("Usuário não encontrado");
  }
};
