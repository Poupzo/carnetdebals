import * as mongoose from "mongoose";

interface IEpoque extends mongoose.Document { }

const epoqueSchema = new mongoose.Schema({
  id: String,
  name: String,
});

const Epoque = mongoose.model<IEpoque>("Epoque", epoqueSchema)

export = Epoque;