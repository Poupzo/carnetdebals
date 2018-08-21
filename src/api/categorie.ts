import * as express from "express";
import * as categorie from "./mongoose/categorie";

export function categories(app: express.Express) {

    //ADD
  app.post('/api/categories', function (req, res, next) {
    var tmp = req.body;

    if (!tmp.name) {
      res.status(400);
      res.json({
        "error": "Invalid Data"
      });
    } else {
      const tmpcategorie = new categorie({
        id: tmp.id,
        name: tmp.name
      });

      tmpcategorie.save(function (err, result) {
        if (err) {
          res.json({ info: 'error during categories creation', error: err });
        } else {
          res.json({ info: 'categories created successfully', data: result });
        }
      })
    }
  });

  //GET
  app.get('/api/categories', function (req, res, next) {
    categorie.find(function (err, categories) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding categories', error: err });

      res.json(categories); // return all categories in JSON format
    });
  });

  //GET BY ID
  app.get('/api/categories/:id', function (req, res, next) {
    const id = req.params.id;
    categorie.find(id, function (err, categories) {

      // if there is an error retrieving, send the error. 
      // nothing after res.send(err) will execute
      if (err)
        res.json({ info: 'error finding categories', error: err });

      res.json(categories); // return all categories in JSON format
    });
  });

  //UPDATE
  app.put('/api/categories/:id', function (req, res, next) {
    const id = req.params.id;

    categorie.findByIdAndUpdate(id, function (err, categories) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err });
      }
      else
        res.json(categories);
    });
  });

  //DELETE
  app.delete('/api/categories/:id', function (req, res, next) {
    const id = req.params.id;

    categorie.findByIdAndRemove(id, function (err, categories) {
      if (err) {
        res.statusCode = 404;
        res.json({ error: err});
      }
      else 
        res.json(categories);
    });
  });
}
