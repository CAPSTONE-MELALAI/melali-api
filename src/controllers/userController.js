const { firestore } = require("../services/storeData");
const usersCollection = firestore.collection("users");

const getUser = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const userQuery = await usersCollection.where("email", "==", userEmail).limit(1).get();

    if (userQuery.empty) {
      return res.status(404).json({ success: false, message: "Pengguna tidak ditemukan", data: {} });
    }

    const userDoc = userQuery.docs[0];
    const userData = userDoc.data();
    userData.uid = userDoc.id;

    res.status(200).json({
      success: true,
      message: "Pengguna ditemukan",
      data: userData,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error getting user: " + error.message, data: {} });
  }
};

const updateUser = async (req, res) => {
  try {
    const userEmail = req.params.email;
    const userData = req.body;
    userData.updatedAt = new Date();
    const userQuery = await usersCollection.where("email", "==", userEmail).limit(1).get();

    if (userQuery.empty) {
      return res.status(404).json({ success: false, message: "Pengguna tidak ditemukan", data: {} });
    }

    const userDoc = userQuery.docs[0].ref;
    await userDoc.set(userData, { merge: true });

    res.status(200).json({ success: true, message: "Pengguna berhasil diperbarui", data: {} });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating user: " + error.message, data: {} });
  }
};

module.exports = {
  getUser,
  updateUser
};
