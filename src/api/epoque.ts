import * as express from "express";
import * as epoque from "./mongoose/epoque";

export function epoques(app: express.Express) {

    //ADD
  app.post('/api/epoques', function (req, res, next) {
    var tmp = req.body;

    if (!tmp.name) {
      res.status(400);
      res.json({
        "error": "Invalid Data"
      });
    } else {
      const tmpepoque = new epoque({
        id: tmp.id,
        name: tmp.name
      });

      tmpepoque.save(function (err, result) {
        if (err) {
          res.json({ info: 'error during epoques creation', error: err });
        } else {
          res.json({ info: 'epoques created successfully', data: result });
        }
      })
    }
  });

  //GET
  app.get('/api/epoques', function (req, res, next) {
    epoque.find(function (err, epoques) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding epoques', error: err });

      res.json(epoques); // return all epoques in JSON format
    });
  });

  //GET BY ID
  app.get('/api/epoques/:id', function (req, res, next) {
    const id = req.params.id;
    epoque.find(id, function (err, epoques) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding epoques', error: err });

      res.json(epoques); // return all epoques in JSON format
    });
  });

  //UPDATE
  app.put('/api/epoques/:id', function (req, res, next) {
    const id = req.params.id;

    epoque.findByIdAndUpdate(id, function (err, epoques) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err });
      }
      else
        res.json(epoques);
    });
  });

  //DELETE
  app.delete('/api/epoques/:id', function (req, res, next) {
    const id = req.params.id;

    epoque.findByIdAndRemove(id, function (err, epoques) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err});
      }
      else 
        res.json(epoques);
    });
  });
}
