const loadModel = require('./loadModel');
const preprocessInput = require('./preprocessInput');

async function recommendation(location, category, cost, foodHalal) {
    try {
        console.log('Starting recommendation');
        const model = await loadModel();
        const inputTensor = preprocessInput(location, category, cost, foodHalal);
        console.log('Input tensor:', inputTensor.toString());

        const prediction = model.predict(inputTensor);
        const predictionData = prediction.dataSync();
        console.log('Prediction data:', predictionData);

        return predictionData[0];
    } catch (error) {
        console.error('Error generating recommendation:', error);
        throw error;
    }
}

module.exports = recommendation;
