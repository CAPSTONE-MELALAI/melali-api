const tf = require('@tensorflow/tfjs-node');
const process = require('process');

async function loadModel() {
    const modelUrl = process.env.MODEL_URL;
    console.log(`Loading model from ${modelUrl}`);
    
    try {
        const model = await tf.loadGraphModel(modelUrl);
        console.log('Model loaded successfully');
        return model;
    } catch (error) {
        console.error('Error loading model:', error);
        throw error;
    }
}

module.exports = loadModel;
