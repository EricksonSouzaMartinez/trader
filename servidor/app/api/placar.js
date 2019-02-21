var db = require('../../config/database');

var api = {};


api.lista = function(req, res) {

    db.find({}).exec(function(err, doc) {
      if (err) return console.log(err);
      res.json(doc);
  });
};

api.insere = function(req, res){
    db.remove({}, { multi: true }, function (err, numRemoved) {
    });
    
    db.insert(req.body.placar, function(err) {
        if(err) return console.log(err);
        //console.log('Sincronizado com sucesso');
        res.json({});
    });
}

module.exports = api;
