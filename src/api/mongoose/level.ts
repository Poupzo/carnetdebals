import * as mongoose from "mongoose";

interface ILevel extends mongoose.Document { }

const levelSchema = new mongoose.Schema({
  id: String,
  name: String,
});

const Level = mongoose.model<ILevel>("Level", levelSchema)

export = Level;