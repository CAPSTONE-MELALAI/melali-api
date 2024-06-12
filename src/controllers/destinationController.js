const { firestore } = require('../services/storeData');
const destinationsCollection = firestore.collection('destinations');

const getAllDestinations = async (req, res) => {
  try {
    const destinationsQuery = await destinationsCollection.get();
    const destinations = destinationsQuery.docs.map((doc) => doc.data());
    res.status(200).json({
      success: true,
      message: 'Destinations retrieved successfully',
      data: destinations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error getting destinations: ' + error.message,
      data: {},
    });
  }
};

const getDestination = async (req, res) => {
  try {
    const destinationId = req.params.id;
    const destinationQuery = await destinationsCollection.doc(destinationId).get();
    if (!destinationQuery.exists) {
      return res.status(404).json({
        success: false,
        message: 'Destination not found',
        data: {},
      });
    }
    res.status(200).json({
      success: true,
      message: 'Destination retrieved successfully',
      data: destinationQuery.data(),
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error getting destination: ' + error.message,
      data: {},
    });
  }
}

module.exports = { getAllDestinations, getDestination};