var data = require("./fakeData");

module.exports = function(req, res) {
  var id = parseInt(req.query.id);
  var count = data.filter(user => user.id === id).length;
  
  res.send("Usuário com ID: " + id + " foi lido " + count + " vezes.");
};
