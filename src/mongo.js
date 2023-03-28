
const { MongoClient, ServerApiVersion } = require('mongodb');
const fs = require('fs');

const credentials = './X509-cert-5746084375866329952.pem';

const client = new MongoClient('mongodb+srv://cluster0.lzyuyuq.mongodb.net/?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority', {
  sslKey: credentials,
  sslCert: credentials,
  serverApi: ServerApiVersion.v1
});

// function to open the database connection
async function openConnection() {
  try {
    await client.connect();
    console.log('MongoDB connected');
  } catch (err) {
    console.log('Error connecting to MongoDB:', err);
  }
}

// function to close the database connection
async function closeConnection() {
  try {
    await client.close();
    console.log('MongoDB connection closed');
  } catch (err) {
    console.log('Error closing MongoDB connection:', err);
  }
}

// function to create a new document in a collection
async function createDocument(collectionName, document) {
  const collection = client.db().collection(collectionName);
  try {
    const result = await collection.insertOne(document);
    console.log(`Inserted document with _id: ${result.insertedId}`);
    return result.insertedId;
  } catch (err) {
    console.log(`Error inserting document into ${collectionName}:`, err);
  }
}

// function to read documents from a collection
async function readDocuments(collectionName, query = {}) {
  const collection = client.db().collection(collectionName);
  try {
    const cursor = await collection.find(query);
    const documents = await cursor.toArray();
    console.log(`Found ${documents.length} documents in ${collectionName}`);
    return documents;
  } catch (err) {
    console.log(`Error reading documents from ${collectionName}:`, err);
  }
}

// function to update a document in a collection
async function updateDocument(collectionName, filter, update) {
  const collection = client.db().collection(collectionName);
  try {
    const result = await collection.updateOne(filter, { $set: update });
    console.log(`Updated ${result.modifiedCount} document(s) in ${collectionName}`);
    return result.modifiedCount;
  } catch (err) {
    console.log(`Error updating document in ${collectionName}:`, err);
  }
}

// function to delete a document from a collection
async function deleteDocument(collectionName, filter) {
  const collection = client.db().collection(collectionName);
  try {
    const result = await collection.deleteOne(filter);
    console.log(`Deleted ${result.deletedCount} document(s) from ${collectionName}`);
    return result.deletedCount;
  } catch (err) {
    console.log(`Error deleting document from ${collectionName}:`, err);
  }
}

module.exports = {
  openConnection,
  closeConnection,
  createDocument,
  readDocuments,
  updateDocument,
  deleteDocument,
};