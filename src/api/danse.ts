import * as express from "express";
import * as danse from "./mongoose/danse";

export function danses(app: express.Express) {

    //ADD
  app.post('/api/danses', function (req, res, next) {
    var tmp = req.body;

    if (!tmp.name) {
      res.status(400);
      res.json({
        "error": "Invalid Data"
      });
    } else {
      const tmpdanse = new danse({
        id: tmp.id,
        name: tmp.name
      });

      tmpdanse.save(function (err, result) {
        if (err) {
          res.json({ info: 'error during danses creation', error: err });
        } else {
          res.json({ info: 'danses created successfully', data: result });
        }
      })
    }
  });

  //GET
  app.get('/api/danses', function (req, res, next) {
    danse.find(function (err, danses) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding danses', error: err });

      res.json(danses); // return all danses in JSON format
    });
  });

  //GET BY ID
  app.get('/api/danses/:id', function (req, res, next) {
    const id = req.params.id;
    danse.find(id, function (err, danses) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding danses', error: err });

      res.json(danses); // return all danses in JSON format
    });
  });

  //UPDATE
  app.put('/api/danses/:id', function (req, res, next) {
    const id = req.params.id;

    danse.findByIdAndUpdate(id, function (err, danses) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err });
      }
      else
        res.json(danses);
    });
  });

  //DELETE
  app.delete('/api/danses/:id', function (req, res, next) {
    const id = req.params.id;

    danse.findByIdAndRemove(id, function (err, danses) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err});
      }
      else 
        res.json(danses);
    });
  });
}
