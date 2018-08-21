import * as express from "express";
import * as championnat from "./mongoose/championnat";

export function championnats(app: express.Express) {

    //ADD
  app.post('/api/championnats', function (req, res, next) {
    var tmp = req.body;

    if (!tmp.name) {
      res.status(400);
      res.json({
        "error": "Invalid Data"
      });
    } else {
      const tmpchamp = new championnat({
        id: tmp.id,
        name: tmp.name,
        type: tmp.type,
        date: tmp.date
      });

      tmpchamp.save(function (err, result) {
        if (err) {
          res.json({ info: 'error during championnat creation', error: err });
        } else {
          res.json({ info: 'championnat created successfully', data: result });
        }
      })
    }
  });

  //GET
  app.get('/api/championnats', function (req, res, next) {
    championnat.find(function (err, championnats) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding championnat', error: err });

      res.json(championnats); // return all championnats in JSON format
    });
  });

  //GET BY ID
  app.get('/api/championnats/:id', function (req, res, next) {
    console.log("ICI");
    const id = req.params.id;
    championnat.find(id, function (err, championnats) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding championnat', error: err });

      res.json(championnats); // return all championnats in JSON format
    });
  });

  //UPDATE
  app.put('/api/championnats/:id', function (req, res, next) {
    const id = req.params.id;

    championnat.findByIdAndUpdate(id, function (err, championnats) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err });
      }
      else
        res.json(championnats);
    });
  });

  //DELETE
  app.delete('/api/championnats/:id', function (req, res, next) {
    const id = req.params.id;

    championnat.findByIdAndRemove(id, function (err, championnats) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err});
      }
      else 
        res.json(championnats);
    });
  });
}
