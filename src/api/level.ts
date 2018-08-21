import * as express from "express";
import * as level from "./mongoose/level";

export function levels(app: express.Express) {

    //ADD
  app.post('/api/levels', function (req, res, next) {
    var tmp = req.body;

    if (!tmp.name) {
      res.status(400);
      res.json({
        "error": "Invalid Data"
      });
    } else {
      const tmplevel = new level({
        id: tmp.id,
        name: tmp.name
      });

      tmplevel.save(function (err, result) {
        if (err) {
          res.json({ info: 'error during levels creation', error: err });
        } else {
          res.json({ info: 'levels created successfully', data: result });
        }
      })
    }
  });

  //GET
  app.get('/api/levels', function (req, res, next) {
    level.find(function (err, levels) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding levels', error: err });

      res.json(levels); // return all levels in JSON format
    });
  });

  //GET BY ID
  app.get('/api/levels/:id', function (req, res, next) {
    const id = req.params.id;
    level.find(id, function (err, levels) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding levels', error: err });

      res.json(levels); // return all levels in JSON format
    });
  });

  //UPDATE
  app.put('/api/levels/:id', function (req, res, next) {
    const id = req.params.id;

    level.findByIdAndUpdate(id, function (err, levels) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err });
      }
      else
        res.json(levels);
    });
  });

  //DELETE
  app.delete('/api/levels/:id', function (req, res, next) {
    const id = req.params.id;

    level.findByIdAndRemove(id, function (err, levels) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err});
      }
      else 
        res.json(levels);
    });
  });
}
