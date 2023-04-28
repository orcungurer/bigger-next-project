// POST /api/new-meetup
import { MongoClient } from "mongodb"; // 1

async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    // const { title, image, address, description } = data;

    // 2
    const client = await MongoClient.connect(
      "mongodb+srv://orcungurer:ljsrAfeGwOTjuuBN@cluster0.4nfosmu.mongodb.net/meetups?retryWrites=true&w=majority"
    );

    const db = client.db(); // 3

    const meetupsCollection = db.collection("meetups"); // 4

    const result = await meetupsCollection.insertOne(data); // 5
    
    console.log(result);

    client.close(); // 6

    res.status(201).json({message: "Meetup inserted!"}); // 7
  }
}

export default handler;
