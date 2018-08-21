import * as mongoose from "mongoose";

interface ITypeChampionnat extends mongoose.Document { }

const typeChampionnatSchema = new mongoose.Schema({
  id: String,
  name: String,
});

const TypeChampionnat = mongoose.model<ITypeChampionnat>("TypeChampionnat", typeChampionnatSchema)

export = TypeChampionnat;