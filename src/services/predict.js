const loadModel = require('./loadModel');
const preprocessInput = require('./preprocessInput');

async function predict(location, category, cost, foodHalal) {
    try {
        console.log('Starting prediction');
        const model = await loadModel();
        const inputTensor = preprocessInput(location, category, cost, foodHalal);
        console.log('Input tensor:', inputTensor.toString());

        const prediction = model.predict(inputTensor);
        const predictionData = prediction.dataSync();
        console.log('Prediction data:', predictionData);

        return predictionData[0];
    } catch (error) {
        console.error('Error making prediction:', error);
        throw error;
    }
}

module.exports = predict;
