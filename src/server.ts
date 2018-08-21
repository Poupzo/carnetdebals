import * as express from 'express';
import * as mongoose from "mongoose";

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').load();
}

const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const port = process.env.PORT || 8080;

mongoose.connect(process.env.MONGODB_URI || process.env.DB_URL);

app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }));
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('X-HTTP-Method-Override'));
app.use(express.static(__dirname + '/'));
app.listen(port);

// routes ==================================================
import * as dancer from "./api/dancer";
dancer.dancers(app);
import * as championnat from "./api/championnat";
championnat.championnats(app);
import * as typeChampionnat from "./api/type-championnat";
typeChampionnat.typeChampionnats(app);
import * as danse from "./api/danse";
danse.danses(app);
import * as categorie from "./api/categorie";
categorie.categories(app);
import * as epoque from "./api/epoque";
epoque.epoques(app);
import * as level from "./api/level";
level.levels(app);
import * as choregraphe from "./api/choregraphe";
choregraphe.choregraphes(app);

app.get('*', function (req, res) {
  res.sendFile('index.html', { "root": __dirname }); // load our public/index.html file
});

console.log('Server running at ' + port);

exports = module.exports = app;                         
