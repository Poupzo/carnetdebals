import * as express from "express";
import * as typeChampionnat from "./mongoose/type-championnat";

export function typeChampionnats(app: express.Express) {

    //ADD
  app.post('/api/type-championnats', function (req, res, next) {
    var tmp = req.body;

    if (!tmp.name) {
      res.status(400);
      res.json({
        "error": "Invalid Data"
      });
    } else {
      const tmptype = new typeChampionnat({
        id: tmp.id,
        name: tmp.name
      });

      tmptype.save(function (err, result) {
        if (err) {
          res.json({ info: 'error during type-championnats creation', error: err });
        } else {
          res.json({ info: 'type-championnats created successfully', data: result });
        }
      })
    }
  });

  //GET
  app.get('/api/type-championnats', function (req, res, next) {
    typeChampionnat.find(function (err, typeChampionnats) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding type-championnats', error: err });

      res.json(typeChampionnats); // return all championnats in JSON format
    });
  });

  //GET BY ID
  app.get('/api/type-championnats/:id', function (req, res, next) {
    const id = req.params.id;
    typeChampionnat.find(id, function (err, typeChampionnats) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding type-championnats', error: err });

      res.json(typeChampionnats); // return all championnats in JSON format
    });
  });

  //UPDATE
  app.put('/api/type-championnats/:id', function (req, res, next) {
    const id = req.params.id;

    typeChampionnat.findByIdAndUpdate(id, function (err, typeChampionnats) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err });
      }
      else
        res.json(typeChampionnats);
    });
  });

  //DELETE
  app.delete('/api/type-championnats/:id', function (req, res, next) {
    const id = req.params.id;

    typeChampionnat.findByIdAndRemove(id, function (err, typeChampionnats) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err});
      }
      else 
        res.json(typeChampionnats);
    });
  });
}
