const { firestore } = require('../services/storeData');
const destinationsCollection = firestore.collection('destinations');

const getAllDestinations = async (req, res) => {
  try {
    const destinationsQuery = await destinationsCollection.get();
    const destinations = destinationsQuery.docs.map((doc) => doc.data());
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ msg: 'Error getting destinations: ' + error.message });
  }
};

const getDestination = async (req, res) => {
  try {
    const destinationId = req.params.id;
    const destinationQuery = await destinationsCollection.doc(destinationId).get();
    if (!destinationQuery.exists) {
      return res.status(404).json({ msg: 'Destination not found' });
    }
    res.status(200).json(destinationQuery.data());
  } catch (error) {
    res.status(500).json({ msg: 'Error getting destination: ' + error.message });
  }
}

module.exports = { getAllDestinations, getDestination};