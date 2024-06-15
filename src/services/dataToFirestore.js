const { firestore } = require("../services/storeData");

async function uploadData(jsonData) {
  try {
    for (const placeData of jsonData) {
      const docRef = await firestore.collection("destinations").doc();

      const uid = docRef.id;
      placeData.uid = uid;

      await docRef.set(placeData);
    }
    console.log("Data successfully uploaded to Firestore");
  } catch (error) {
    console.error("Error uploading data:", error);
  }
}

const jsonData = require("../data/datass.json");
uploadData(jsonData);
