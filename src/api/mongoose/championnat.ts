import * as mongoose from "mongoose";

interface IChampionnat extends mongoose.Document { }

const championnatSchema = new mongoose.Schema({
  id: String,
  name: String,
  type: String,
  date: String,
});

const Championnat = mongoose.model<IChampionnat>("Championnat", championnatSchema)

export = Championnat;