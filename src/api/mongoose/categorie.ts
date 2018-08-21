import * as mongoose from "mongoose";

interface ICategorie extends mongoose.Document { }

const categorieSchema = new mongoose.Schema({
  id: String,
  name: String,
});

const Categorie = mongoose.model<ICategorie>("Categorie", categorieSchema)

export = Categorie;