import * as express from "express";
import * as choregraphe from "./mongoose/choregraphe";

export function choregraphes(app: express.Express) {

    //ADD
  app.post('/api/choregraphes', function (req, res, next) {
    var tmp = req.body;

    if (!tmp.name) {
      res.status(400);
      res.json({
        "error": "Invalid Data"
      });
    } else {
      const tmpchoregraphe = new choregraphe({
        id: tmp.id,
        name: tmp.name
      });

      tmpchoregraphe.save(function (err, result) {
        if (err) {
          res.json({ info: 'error during choregraphes creation', error: err });
        } else {
          res.json({ info: 'choregraphes created successfully', data: result });
        }
      })
    }
  });

  //GET
  app.get('/api/choregraphes', function (req, res, next) {
    choregraphe.find(function (err, choregraphes) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding choregraphes', error: err });

      res.json(choregraphes); // return all choregraphes in JSON format
    });
  });

  //GET BY ID
  app.get('/api/choregraphes/:id', function (req, res, next) {
    const id = req.params.id;
    choregraphe.find(id, function (err, choregraphes) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding choregraphes', error: err });

      res.json(choregraphes); // return all choregraphes in JSON format
    });
  });

  //UPDATE
  app.put('/api/choregraphes/:id', function (req, res, next) {
    const id = req.params.id;

    choregraphe.findByIdAndUpdate(id, function (err, choregraphes) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err });
      }
      else
        res.json(choregraphes);
    });
  });

  //DELETE
  app.delete('/api/choregraphes/:id', function (req, res, next) {
    const id = req.params.id;

    choregraphe.findByIdAndRemove(id, function (err, choregraphes) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err});
      }
      else 
        res.json(choregraphes);
    });
  });
}
