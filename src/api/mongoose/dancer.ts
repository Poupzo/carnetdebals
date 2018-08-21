import * as mongoose from "mongoose";

interface IDancer extends mongoose.Document { }

const dancerSchema = new mongoose.Schema({
  id: String,
  name: String,
  surname: String,
  serie: Number
});

const Dancer = mongoose.model<IDancer>("Dancer", dancerSchema)

export = Dancer;