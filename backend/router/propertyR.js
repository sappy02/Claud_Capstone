const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// MongoDB Connection URI - Consider using environment variables for security
const DB_URL = 'mongodb+srv://claudiucornetti:Deloitte12@cluster0.t2gog.mongodb.net/sample_airbnb?retryWrites=true&w=majority';

router.get('/airbnb-data', async (req, res) => {
  const client = new MongoClient(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();

    const database = client.db('sample_airbnb');
    const collection = database.collection('listingsAndReviews');

    // Example query: Find listings with a price less than 100
    const query = { price: { $lt: 100 } };
    
    // You might want to limit the number of results or implement pagination for large datasets
    const options = {
      // sort matched documents in descending order by rating
      sort: { rating: -1 },
      // Limit to 10 documents
      limit: 10
    };

    const cursor = collection.find(query, options);

    if ((await cursor.count()) === 0) {
      res.status(404).send("No listings found!");
    } else {
      const results = await cursor.toArray();
      res.json(results);
    }

  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  } finally {
    await client.close();
  }
});

module.exports = router;
