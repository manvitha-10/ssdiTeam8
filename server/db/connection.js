import { MongoClient, ServerApiVersion } from "mongodb";

const URI = process.env.ATLAS_URI || "";
const client = new MongoClient(URI, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connect the client to the server
  await client.connect();
  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error(err);
}

let db = client.db("employee");
let collection = db.collection("records"); // This will now point to 'records' collection under 'employee' db

// Function to insert data
export const insertRecord = async (data) => {
  try {
    const result = await collection.insertOne(data); // Insert into 'records' collection
    console.log(`Record inserted with _id: ${result.insertedId}`);
  } catch (err) {
    console.error("Error inserting record:", err);
  }
};

export default db;
