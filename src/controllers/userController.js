const { firestore } = require('../services/storeData');
const usersCollection = firestore.collection('users');


exports.getUser = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const userQuery = await usersCollection.where('email', '==', userEmail).limit(1).get();

    if (userQuery.empty) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const userDoc = userQuery.docs[0];
    res.status(200).json(userDoc.data());
  } catch (error) {
    res.status(500).json({ msg: 'Error getting user: ' + error.message });
  }
};


exports.updateUser = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const userData = req.body;
    const userQuery = await usersCollection.where('email', '==', userEmail).limit(1).get();

    if (userQuery.empty) {
      return res.status(404).json({ msg: 'User not found' });
    }

    const userDoc = userQuery.docs[0].ref;
    await userDoc.set(userData, { merge: true });

    res.status(200).json({ msg: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ msg: 'Error updating user: ' + error.message });
  }
};
