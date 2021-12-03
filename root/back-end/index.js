import express from "express";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";
import dotenv from 'dotenv';

dotenv.config()

const app = express();
const PORT = process.env.PORT;

app.use(express.json()); //every request in app convert into json
// express.json() - inbuild middleware

// MongoDB Connection
const MONGO_URL = process.env.MONGO_URL;

async function createConnection() {
  const client = new MongoClient(MONGO_URL);
  await client.connect(); //promise
  console.log("MongoDB Connected");
  return client;
}

export const client = await createConnection();

app.get("/", (req, res) => {
  res.send("Hello World🤑");
});


// capturing id using find 😀befoore
// app.get("/recipes/:id", (req, res) => {
//     console.log(req.params);
//     const { id } = req.params;
//     const recipe = recipes.find((mv) => mv.id === id);
//     console.log(recipe);
//     recipe ? res.send(recipe) : res.send({ message: "NOT FOUND" });
//   });

// capturing by id using findOne 😀after
app.get("/recipes/:id", async (req, res) => {
  console.log(req.params);
  const { id } = req.params;
  const recipe = await client
    .db("b28wd")
    .collection("recipes")
    .findOne({ _id: ObjectId(id) });
  console.log(recipe);
  recipe ? res.send(recipe) : res.send({ message: "NOT FOUND" });
});

//search by query name 😅before
// app.get("/recipes", async (req, res) => {
//   console.log(req.query);
//   const { name } = req.query;
//   console.log(name);

//   let recipe = recipes;
//   if (name) {
//       recipe = recipe.filter((re) => re.name === name);
//       res.send(recipe);
//     }
// });

//search by query name 😅after
app.get("/recipes", async (req, res) => {
  // request => query params
  console.log(req.query);
  const filter = req.query;
  console.log(filter);
//   if (filter.name) {
//     filter.name = filter.name;
//   }

  const filteredRecipes = await client
    .db("b28wd")
    .collection("recipes")
    .find(filter)
    .toArray(); //  cursor to array

    console.log(filteredRecipes)
    res.send(filteredRecipes);
});

// expess.json() is important //Created recipes data after
app.post("/recipes", async (req, res) => {
  const data = req.body;
  console.log(data);
  //  Create movies in mongo - db.movies.insertMany(data)
  const result = await client
    .db("b28wd")
    .collection("recipes")
    .insertMany(data);
  res.send(result);
});

// createMany before
// app.post("/recipes", async (req, res) => {
//     const data = req.body;
//     console.log(data);
//     //  Create movies in mongo - db.movies.insertMany(data);
//     res.send(data);
//   });

app.listen(PORT, () => {
  console.log("App Started", PORT);
});
