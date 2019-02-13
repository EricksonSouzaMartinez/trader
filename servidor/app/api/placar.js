var db = require('../../config/database');

var api = {};


api.lista = function(req, res) {

    db.find({}).exec(function(err, doc) {
      if (err) return console.log(err);
      res.json(doc);
  });
};

api.insere = function(req, res){
    db.update(req.body.placar, function(err, newDoc) {
        if(err) return console.log(err);
        console.log('Sincronizado com sucesso: ' + newDoc._id);
        res.json({});
    });
}

module.exports = api;
