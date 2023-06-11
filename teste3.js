var data = require("./fakeData");

module.exports = function(req, res) {
  var id = parseInt(req.query.id);
  var index = data.findIndex(user => user.id === id);

  if (index !== -1) {
    data.splice(index, 1);
    res.status(200).send("Usuário deletado com sucesso");
  } else {
    res.status(404).send("Usuário não encontrado");
  }
};
