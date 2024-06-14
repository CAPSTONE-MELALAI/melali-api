const { loadModel } = require('./loadModel');
const { prepareInput } = require('./preprocessInput');
const { tourismId } = require('../utils/constants');

async function predict(userIdArray, model) {
    try {
        // Load the model
        // const model = loadModel();
        // if (!model) {
        //     throw new Error('Model not loaded');
        // }

        // Prepare input tensors
        const { userInput, tourismInput } = prepareInput(userIdArray, tourismId);

        // Perform prediction
        const prediction = loadModel(model).predict([userInput, tourismInput]);
        const score = await prediction.data();

        // Log prediction result
        console.log('Prediction tensor:', prediction);
        console.log('Prediction score:', score);

        // Return the prediction score
        return score[0];

    } catch (error) {
        console.error('Error in predict function:', error);
        throw error;
    }
}

module.exports = predict;
