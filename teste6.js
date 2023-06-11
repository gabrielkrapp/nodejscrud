const data = require("./fakeData");

const checkPermissions = (req, res, next) => {
    const userId = req.query.userId;
    const user = data.find(user => user.id == userId);
  
    if (user && user.permissions.includes(req.method.toLowerCase())) {
      next();
    } else {
      res.status(403).send("Acesso negado. Você não possui permissão para executar esta ação.");
    }
};
  
module.exports = checkPermissions;
  