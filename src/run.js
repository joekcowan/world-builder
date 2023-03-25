
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');

const credentials = './X509-cert-5746084375866329952.pem';

const client = new MongoClient('mongodb+srv://cluster0.lzyuyuq.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1
});

async function run() {
  try {
    await client.connect();
    const database = client.db("AdventureDB");
    const collection = database.collection("Worlds");
    const docCount = await collection.countDocuments({});
    console.log(docCount);
    // perform actions using client
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);

// export default run;