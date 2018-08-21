import * as mongoose from "mongoose";

interface IChoregraphe extends mongoose.Document { }

const choregrapheSchema = new mongoose.Schema({
  id: String,
  name: String,
});

const Choregraphe = mongoose.model<IChoregraphe>("Choregraphe", choregrapheSchema)

export = Choregraphe;