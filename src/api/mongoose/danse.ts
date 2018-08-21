import * as mongoose from "mongoose";

interface IDanse extends mongoose.Document { }

const danseSchema = new mongoose.Schema({
  id: String,
  name: String,
});

const Danse = mongoose.model<IDanse>("Danse", danseSchema)

export = Danse;