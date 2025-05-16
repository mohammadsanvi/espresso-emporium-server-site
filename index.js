const express = require('express');
const cors = require('cors');
const { ObjectId } = require('mongodb');
require('dotenv').config()
const app = express();
const port = process.env.PORT || 5000;
const { MongoClient, ServerApiVersion } = require('mongodb');

app.use(cors());
app.use(express.json());

const uri =`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@3prl4wl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// 👉 Keep structure same: declare here
let coffeesColection;

// ------------------------------------------------------------------//

// get coffee to show display 
app.get('/coffees', async (req, res) => {
    const result = await coffeesColection.find().toArray();
    res.send(result);
})

// ------------------------------------------------------------------//

// find one by id
app.get('/coffees/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await coffeesColection.findOne(query);
    res.send(result);
})

// ------------------------------------------------------------------//

// create coffee post
app.post('/coffees', async (req, res) => {
    const newCoffee = req.body;
    const result = await coffeesColection.insertOne(newCoffee);
    res.send(result);
})

// ------------------------------------------------------------------//

// update coffee

app.put('/coffees/:id', async (req, res) => {
  const id = req.params.id;
  const filter = { _id: new ObjectId(id) }; // Correct variable name
  const options = { upsert: true };
  const updatedCoffee = req.body;
  
  const updatedDoc = {
    $set: updatedCoffee
  };

  try {
    const result = await coffeesColection.updateOne(filter, updatedDoc, options);
    res.send(result);
  } catch (error) {
    console.error("Error updating coffee:", error);
    res.status(500).send({ error: "Failed to update coffee" });
  }
});


// ------------------------------------------------------------------//

// delete coffee
app.delete('/coffees/:id', async (req, res) => {
    const id = req.params.id;
    const query = { _id: new ObjectId(id) };
    const result = await coffeesColection.deleteOne(query);
    res.send(result);
})

// ------------------------------------------------------------------//

async function run() {
  try {
    await client.connect();
    // 👉 Now set it here after client is connected
    coffeesColection = client.db('coffeeDb').collection('coffees');
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('Coffe server is getting hotter')
});

app.listen(port, () => {
    console.log('Coffee server running on port', port)
});
