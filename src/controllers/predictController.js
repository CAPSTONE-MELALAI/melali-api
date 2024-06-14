const loadModel = require('../services/loadModel');
const predict = require('../services/predict');
const { prepareInput } = require('../services/preprocessInput'); // Import prepareInput
const { tourismId } = require('../utils/constants');

const predictController = async (req, res) => {
    try {
        const userId = req.body.userId;

        if (!userId) {
            return res.status(400).json({ error: 'ID tidak boleh kosong' });
        }

        // Array kosong untuk menyimpan hasil looping
        let userIdArray = [];

        // Melakukan looping sebanyak 10 kali untuk userId yang diberikan
        for (let i = 0; i < 10; i++) {
            userIdArray.push(userId); // Memasukkan userId ke dalam array
        }

        console.log('Received userIdArray:', userIdArray);

        // Menggunakan prepareInput untuk mempersiapkan input TensorFlow
        const { userInput, tourismInput } = prepareInput(userIdArray);

        // Melakukan prediksi dengan model yang dimuat
        const prediction = await predict(loadModel, userInput, tourismInput);

        console.log('Prediction result:', prediction);

        res.status(200).json({ userIdArray, tourismId: tourismId, prediction });
    } catch (error) {
        console.error('Error during prediction:', error.message);
        res.status(500).json({ error: 'Terjadi kesalahan saat melakukan prediksi' });
    }
}

module.exports = {
    predictController,
};
