const tf = require('@tensorflow/tfjs-node');
const process = require('process');

async function loadModel() {
    try {
        if (!process.env.MODEL_URL) {
            throw new Error('MODEL_URL environment variable is not defined');
        }

        console.log('Loading model from:', process.env.MODEL_URL);
        const model = await tf.loadLayersModel(process.env.MODEL_URL);
        console.log('Model loaded successfully');
        return model;
    } catch (error) {
        console.error('Error loading model:', error);
        throw error;
    }
}

module.exports = loadModel;

