const { Firestore } = require('@google-cloud/firestore');
const serviceAccount = require('../../service-account.json');

const firestore = new Firestore({
  projectId: serviceAccount.project_id,
  credentials: {
    client_email: serviceAccount.client_email,
    private_key: serviceAccount.private_key
  }
});

module.exports = {
  firestore,
};
